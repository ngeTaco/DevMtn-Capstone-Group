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
                        <li className="flex justify-between text-lg ml-5">
                            <p>Pokeball</p>
                            <p>...5</p>
                        </li>
                        <li className="flex justify-between text-lg ml-5">
                            <p>Great Ball</p>
                            <p>...5</p>
                        </li>
                        <li className="flex justify-between text-lg ml-5">
                            <p>Potion</p>
                            <p>...5</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CartDrawer;
