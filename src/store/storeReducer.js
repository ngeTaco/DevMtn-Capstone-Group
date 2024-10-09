const initialState = {
    cartItems: []
};

export default function storeReducer(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_CART': 
            const itemToAdd = action.payload;
            const itemToUpdate = state.cartItems.find(
                (itemInCart) => itemInCart.id === itemToAdd.itemId
            );
            function createLineItem(item) {
                return {
                    cartItemKey: item,
                    quantity: 1,
                    total: item.itemPrice,
                    id: item.itemId
                };
            }
            if (itemToUpdate) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) => {
                        if (item.id === itemToAdd.itemId) {
                            item.quantity++;
                            item.total = item.quantity * item.cartItemKey.itemPrice;
                        }
                        return item;
                    })
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, createLineItem(itemToAdd)]
                };
            }

        case 'DECRIMENT_ITEM':
            const itemToDecrement = state.cartItems.find(
                (itemInCart) => itemInCart.id === action.payload.itemId
            );
            if (itemToDecrement) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) => {
                        if (item.id === action.payload.itemId && item.quantity > 1) {
                            item.quantity--;
                            item.total = item.quantity * item.cartItemKey.itemPrice;
                        }
                        return item;
                    })
                };
            }
            return state;

        default:
            return state;
    }
}
