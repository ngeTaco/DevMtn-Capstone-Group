import ShopperInventoryRow from "./ShopperInventoryRow.jsx";

function ShopperInventory() {
    return (
        <>
            <h3 class="text-gray-800 text-xl my-4 font-bold text-center">Inventory</h3>
            <ul role="list" class="divide-y divide-gray-100 ml-20 mr-20">
                <li class="flex justify-between gap-x-6 py-5">
                    <div class="flex min-w-0 gap-x-4">
                        <div class="min-w-0 flex-auto">
                            <p class="text-sm font-semibold leading-6 text-gray-900">Item Name</p>
                        </div>
                    </div>
                    <div class="flex min-w-0 gap-x-4">
                        <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p class="text-sm font-semibold leading-6 text-gray-900">Description</p>
                        </div>
                    </div>
                    <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p class="text-sm font-semibold leading-6 text-gray-900">Quantity</p>
                    </div>
                </li>
                <ShopperInventoryRow />
                <ShopperInventoryRow />
                <ShopperInventoryRow />
                <ShopperInventoryRow />
                <ShopperInventoryRow />
            </ul>

        </>
    )

}

export default ShopperInventory;