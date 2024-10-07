import { useSelector, useDispatch } from "react-redux";
import { ShoppingCartIcon, XMark } from "../CommonComponents/icons";
import ItemInCart from "./ItemInCart";
import { useState } from "react";

// Utility function to calculate the cart total (same as calculateTotalPrice)
function cartTotal(cartItems) {
    return cartItems.reduce((total, item) => total + item.total, 0);
}

function CartDrawer() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);
    const drawer = useSelector((accessState) => accessState.globalState.cartDrawer);
    const initialUserInfo = useSelector((state) => {return state.globalState.userProfile});
    const [userInfo, setUserInfo] = useState(initialUserInfo);
    const totalPrice = Math.round(cartTotal(cartItems));

    const closeDrawer = () => {
        dispatch({
            type: `HANDLE_DRAWER`,
            payload: false
        });
    };

    const openDrawer = () => {
        dispatch({
            type: `HANDLE_DRAWER`,
            payload: true
        });
    };

    const handleCheckout = async () => {
        if (userInfo.points >= totalPrice) {
            const updatedPoints = userInfo.points - totalPrice;
            setUserInfo({ ...userInfo, points: updatedPoints });

            try {
                await axios.post(`/api/user/${userInfo.userId}/points`, { points: updatedPoints });
            } catch (error) {
                console.error('Error updating points:', error);
            }
        } else {
            alert('Not enough points');
        }
    };

    console.log("CART-ITEMS", cartItems)
    if (!drawer) return null;

    return (
        <div className="relative">
            <button onClick={openDrawer}>
                <ShoppingCartIcon />
            </button>

            <div className={`fixed top-0 right-0 h-full w-96 bg-slate-200 shadow-lg`}>
                <div className="flex justify-end p-4">
                    <button onClick={closeDrawer}>
                        <XMark />
                    </button>
                </div>

                <div className="p-4">
                    <h2 className="text-3xl text-center font-bold mb-2">Cart</h2>
                    <p className="text-center mb-1">@{userInfo.username}</p>
                    <p className="text-center mb-10">{userInfo.points.toLocaleString()} available points</p>

                    <ul className="space-y-4 overflow-scroll">
                        {cartItems.map((itemInCart) => {
                            return (
                                <ItemInCart
                                    key={itemInCart.itemId}
                                    itemData={itemInCart}
                                />
                            )
                        })}
                    </ul>
                </div>
                <p className="flex text-xl ml-8 mt-32 pb-10 space-y-5 font-weight">
                    Grand Total: {totalPrice.toLocaleString()} points
                </p>
                <div className="mx-32">
                    <button
                        className="bg-slate-700 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded"
                        onClick={handleCheckout}>
                        Pay Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartDrawer;

// add items to user history
// deduce items from inventory