
function ItemInCart(props) {
    const {imageUrl, itemName, itemPrice } = props.itemData.cartItemKey
    const {quantity, total} = props.itemData
    console.log('props', props)
    return (
        <div className="flex flex-col text-lg">
            <li className=" flex items-center space-x-4 mt-5">
                <div className="flex flex-col items-center">
                    <img src={imageUrl} alt={itemName} className="w-12 h-12" />
                    <input type="number" id="minimum" min="1" placeholder={quantity} className="mt-2 border rounded-md p-1 w-16 text-center" />
                    {/* //remove arrows on input
                                //add increment and decriment button(s) */}
                </div>
                <div className="flex flex-col text-lg">
                    <p>{itemName}</p>
                    <p>{itemPrice}</p>
                    <p className="whitespace-nowrap">Total: {total}</p>
                </div>
            </li>
        </div>

    )
}

export default ItemInCart