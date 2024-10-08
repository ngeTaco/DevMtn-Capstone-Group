const initialState = {
    cartItems: []
}

export default function storeReducer(state = initialState, action) {

    switch (action.type) {

        case 'RESET_CART':
            return {
                ...state,
                cartItems: initialState.cartItems
            };

        case 'UPDATE_CART':
            // increments too, dont need another one
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

function cartTotal(cartItems) {
    return cartItems.reduce((total, item) => total + item.total, 0);
}