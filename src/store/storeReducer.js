const initialState = {
    cartItems: [{
        cartItemKey: {
            "itemId": 1,
            "itemName": "Pokeball",
            "itemDescription": "A tool used for catching wild POKéMON.",
            "itemPrice": 200,
            "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png",
            "quantity": 200,
            "isSpecialItem": false
        },
        quantity: 1,
        total: 200,
        id: 1
    }]
}

export default function storeReducer(state = initialState, action) {
    //console.log(action)
    //console.log(state)

    switch (action.type) {
        case 'UPDATE_CART':
            const itemToAdd = action.payload
            const itemToUpdate = state.cartItems.find((itemInCart) => itemInCart.id === itemToAdd.itemId)
            console.log(itemToUpdate)
            function createLineItem(item) {
                return {
                    cartItemKey: item,
                    quantity: 1,
                    total: item.itemPrice,
                    id: item.itemId
                }
            }
            if (itemToUpdate) {
                const updatedQuantity = []
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) => {
                        if (item.id === itemToAdd.itemId) {
                            item.quantity++
                            item.total = item.quantity * item.cartItemKey.itemPrice
                            return item
                        }
                            return item

                    })
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, createLineItem(itemToAdd),]
                }
            }





        default: return state

    }
}
