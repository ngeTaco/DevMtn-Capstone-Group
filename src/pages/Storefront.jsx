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

    const [selectedItem, setSelectedItem] = useState(null);

    const dispatch = useDispatch()

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

    //These are to get the inventory items from redux on page load with an empty array in case of failure
    const regInventory = useSelector((state) =>
        state.globalState.regInventory || []);
    const specInventory = useSelector((state) =>
        state.globalState.specInventory || []) ;


    function openDrawerOnMain() {
        dispatch({
            type: `HANDLE_DRAWER`,
            payload: true
        })
    }

    //Event handler for sending props to modal
    function handleItemClick(item) {
        setSelectedItem(item);
    }

    //TODO : add ability to update quanity in textbox + update quanity in general

    function addToCartDrawer() {

    }

    return (
        <body>
            <section className="">
                <div className="mx-auto flex max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 className=bg-gray-200">
                    
                    <div className="relative flex py-5">
                        <div className="flex-grow border-t-2 border-red-600"></div>
                    </div>

                    <div className="mt-10 grid gap-x-16 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 ">
                        {/* Regular Inventory */}
                        {regInventory.map((reginv) => {
                            return (
                                <Itembox
                                    key={reginv.itemId}
                                    onClick={() => handleItemClick(reginv)}
                                    itemData={reginv}
                                />
                            )
                        })}
                        {/* Special Item */}
                    </div>
                    <div className="mt-44 gap-x-12">
                        {specInventory.map((specinv) => {
                            return (
                                <Specialbox
                                    key={specinv.itemId}
                                    onClick={() => handleItemClick(specinv)}
                                    itemData={specinv}
                                />
                            )
                        })}
                        <ItemboxModal
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                            item={selectedItem}
                        />
                    </div>
                    <div>
                        <button onClick={openDrawerOnMain}>
                            <ShoppingCartIcon
                                className='size-8'
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