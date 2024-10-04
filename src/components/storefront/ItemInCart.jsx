
function ItemInCart(props) {


    return (
        <div className="flex flex-col text-lg">
            <li className="size-16 flex items-center space-x-4">
                <div className="flex flex-col items-center">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" alt="Pokeball" className="w-14 h-14" />
                    <input type="number" id="minimum" min="1" placeholder="Quantity" className="mt-2 border rounded-md p-1 w-16 text-center" />
                    {/* //remove arrows on input
                                //add increment and decriment button(s) */}
                </div>
                <div className="flex flex-col text-lg">
                    <p>Pokeball</p>
                    <p>Price</p>
                    <p className="whitespace-nowrap">Total: 400pts</p>
                </div>
            </li>
        </div>

    )
}

export default ItemInCart