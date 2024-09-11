function ShopperInventoryRow() {
    
    return (
        <>
            <li class="flex justify-between gap-x-6 py-5">
                    <div class="flex min-w-0 gap-x-4">
                        <div class="min-w-0 flex-auto">
                            <p class="mt-1 truncate text-xs leading-5 text-gray-500">Pokemon 1</p>
                        </div>
                    </div>
                    <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p class="mt-1 text-xs leading-5 text-gray-500">This pokemon is really cool.</p>
                    </div>
                    <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p class="mt-1 text-xs leading-5 text-gray-500">2</p>
                    </div>
                </li>
        </>
    )
}

export default ShopperInventoryRow;