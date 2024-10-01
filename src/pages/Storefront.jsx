import { useEffect, useState } from "react";
import Itembox from "../components/storefront/Itembox.jsx";
import Specialbox from "../components/storefront/Specialbox.jsx";
import ItemboxModal from "../components/storefront/ItemboxModal.jsx";
import CartDrawer from "../components/storefront/CartDrawer.jsx";
import { ShoppingCartIcon } from "../components/CommonComponents/icons.jsx";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";


function Storefront() {
    const [isOpen, setIsOpen] = useState(true)
    const [selectedItem, setSelectedItem] = useState(null); //NOTE
    console.log("selectedItem", selectedItem)
    const dispatch = useDispatch()

    const userInfo = useSelector((state) => {
        return state.globalState.userProfile
    })

    // This is to fetch user history when shopper logs in. Since shoppers are navigated here first, it made sense to put here instead of profile page
    useEffect(() => {
        async function fetchUserHistory() {
            try {
                const response = await axios.get(`/api/history/${userInfo.userId}`);
                const userHistory = response.data;

                dispatch({
                    type: 'SET_USER_HISTORY',
                    payload: userHistory
                });
            } catch (error) {
                console.error("Error fetching user history:", error);
            }
        }
        if (userInfo.userId) {
            fetchUserHistory();
        }
    }, [userInfo.userId, dispatch])

    // This is to fetch regular inventory for the shopping page
    useEffect(() => {
        async function fetchRegularInventory() {
            try {
                const response = await axios.get('/api/inventory/regular');
                const regularInventory = response.data;

                dispatch({
                    type: 'SET_REGULAR_ITEMS',
                    payload: regularInventory
                });
            } catch (error) {
                console.error("Error fetching regular inventory:", error);
            }
        }
        fetchRegularInventory();
    }, [dispatch]);

    //Need to fetch the singular special endpoint and pass those props to the component
    useEffect(() => {
        async function fetchSpecialInventory() {
            try {
                const response = await axios.get('/api/inventory/special/instock');
                const specialInventory = response.data;

                dispatch({
                    type: 'SET_SPECIAL_ITEM',
                    payload: specialInventory
                });
            } catch (error) {
                console.error("Error fetching special inventory:", error);
            }
        }
        fetchSpecialInventory();
    }, [dispatch]);


    const regInventory = useSelector((state) =>
        state.globalState.regInventory) || [];

    const specInventory = useSelector((state) =>
        state.globalState.specInventory) || [];


    function openDrawerOnMain() {
        dispatch({
            type: `HANDLE_DRAWER`,
            payload: true
        })
    }

    function handleItemClick(item) {
        console.log("Item clicked:", item);
        setSelectedItem(item);
    } //NOTE

    return (
        <body>
            <section className="">
                <div className="mx-auto flex max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 className=bg-gray-200">
                    <h2 className="text-xl text-center font-bold sm:text-3xl ">PokéShop</h2>
                    <div className="relative flex py-5">
                        <div className="flex-grow border-t-2 border-red-600"></div>
                    </div>

                    <div className="mt-10 grid gap-x-16 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 ">
                        {/* Grid Start + item1 */}
                        {/* add set widths for each itembox */}
                        {regInventory.map((reginv) => {
                            return (
                                <Itembox
                                    key={reginv.itemId}
                                    itemName={reginv.itemName}
                                    itemPrice={reginv.itemPrice}
                                    quantity={reginv.quantity}
                                    imageUrl={reginv.imageUrl}
                                    onClick={() => handleItemClick(reginv)} //NOTE
                                />
                            )
                        })}

                        {/* Special Item */}
                    </div>
                    <div className="mt-44 gap-x-12">
                        <Specialbox
                            key={specInventory.itemId}
                            itemName={specInventory.itemName}
                            itemPrice={specInventory.itemPrice}
                            quantity={specInventory.quantity}
                            imageUrl={specInventory.imageUrl}
                            onClick={() => handleItemClick(specInventory)} //NOTE
                        />
                        <ItemboxModal
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                            item={selectedItem}  //NOTE
                        />
                    </div>
                    <div>
                        <button onClick={openDrawerOnMain}>
                            <ShoppingCartIcon
                                role="button"

                            />
                        </button>
                        <CartDrawer />
                    </div>
                </div>
            </section>
        </body>


    )
}

export default Storefront