import { useSelector, useDispatch } from "react-redux";
import { ShoppingCartIcon, XMark } from "../CommonComponents/icons";


function CartDrawer() {
    const dispatch = useDispatch();

    const closeDrawer = () => {
        console.log('Drawer close clicked');
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

    const drawer = useSelector((accessState) => accessState.globalState.cartDrawer);

    console.log('Drawer state:', drawer);

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
                    <p className="text-center mb-10">@username</p>

                    <ul className="space-y-4">
                        <li className="size-16 flex items-center space-x-4">
                            <div className="flex flex-col items-center">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" alt="Pokeball" className="w-14 h-14" />
                                <input type="number" placeholder="Quantity" className="mt-2 border rounded-md p-1 w-16 text-center" />
                            </div>
                            <div className="flex flex-col text-lg">
                                <p>Pokeball</p>
                                <p>Price</p>
                                <p className="whitespace-nowrap">Total: 400pts</p>
                            </div>
                        </li>


                    </ul>
                </div>
                <p className="flex text-2xl ml-8 mt-32 pb-10 space-y-5"> Total:  </p>
                <div className="mx-32">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                        Buy Now
                    </button>
                </div>

            </div>

        </div>
    );
}

export default CartDrawer;
