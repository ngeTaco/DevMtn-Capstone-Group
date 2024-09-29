function ShopperInventoryRow({itemName, shopperQuantity}) {
    
    return (
        <>
            <li className="flex justify-between gap-x-6 py-5">
                    <div className="flex min-w-0 gap-x-4">
                        <div className="min-w-0 flex-auto">
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                {itemName}
                                </p>
                        </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="mt-1 text-xs leading-5 text-gray-500">
                            x{shopperQuantity}
                            </p>
                    </div>
                </li>
        </>
    )
}

export default ShopperInventoryRow;