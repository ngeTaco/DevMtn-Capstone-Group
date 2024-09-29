import { useSelector } from "react-redux";
import ShopperInventoryRow from "./ShopperInventoryRow.jsx";

function ShopperInventory() {

    const userHistory = useSelector((state) => 
        state.globalState.userHistory) || [];

    return (
        <>
            <h3 className="text-gray-800 text-xl my-4 font-bold text-center">Inventory</h3>
            <ul role="list" className="divide-y divide-gray-100 ml-20 mr-20">
                <li className="flex justify-between gap-x-6 py-5">
                    <div className="flex min-w-0 gap-x-4">
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">Item Name</p>
                        </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm font-semibold leading-6 text-gray-900">Quantity</p>
                    </div>
                </li>
                {userHistory.map((history) => {
                return(
                <ShopperInventoryRow
                key={history.historyId}
                itemName={history.inventory.itemName}
                shopperQuantity={history.shopperQuantity}
                />
                )
                })}

            </ul>

        </>
    )

}

export default ShopperInventory;