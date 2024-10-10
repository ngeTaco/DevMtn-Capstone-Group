const initialState = {
    cartItems: []
};

export default function storeReducer(state = initialState, action) {

    switch (action.type) {

        case 'RESET_CART':
            return {
                ...state,
                cartItems: initialState.cartItems
            };

        // case 'UPDATE_CART':
        //     const itemToAdd = action.payload;
        //     const itemToUpdate = state.cartItems.find(
        //         (itemInCart) => itemInCart.id === itemToAdd.itemId
        //     );
        //     function createLineItem(item) {
        //         return {
        //             cartItemKey: item,
        //             quantity: 1,
        //             total: item.itemPrice,
        //             id: item.itemId
        //         };
        //     }
        //     if (itemToUpdate) {
        //         return {
        //             ...state,
        //             cartItems: state.cartItems.map((item) => {
        //                 if (item.id === itemToAdd.itemId) {
        //                     item.quantity++;
        //                     item.total = item.quantity * item.cartItemKey.itemPrice;
        //                 }
        //                 return item

        //             })
        //         }
        //     } else {
        //         return {
        //             ...state,
        //             cartItems: [...state.cartItems, createLineItem(itemToAdd)]
        //         };
        //     }

        case 'UPDATE_CART': {
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
                            return {
                                ...item,
                                quantity: item.quantity + 1,
                                total: (item.quantity + 1) * item.cartItemKey.itemPrice
                            };
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
        }


        // case 'DECRIMENT_ITEM':
        //     const itemToDecrement = state.cartItems.find(
        //         (itemInCart) => itemInCart.id === action.payload.itemId
        //     );
        //     if (itemToDecrement) {
        //         return {
        //             ...state,
        //             cartItems: state.cartItems.map((item) => {
        //                 if (item.id === action.payload.itemId && item.quantity > 1) {
        //                     item.quantity--;
        //                     item.total = item.quantity * item.cartItemKey.itemPrice;
        //                 }
        //                 return item;
        //             })
        //         };
        //     }
        //     return state;

        case 'DECRIMENT_ITEM': {
            const itemToDecrement = state.cartItems.find(
                (itemInCart) => itemInCart.id === action.payload.itemId
            );

            if (itemToDecrement && itemToDecrement.quantity > 1) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) => {
                        if (item.id === action.payload.itemId) {
                            return {
                                ...item,
                                quantity: item.quantity - 1,
                                total: (item.quantity - 1) * item.cartItemKey.itemPrice
                            };
                        }
                        return item;
                    })
                };
            }

            return state;
        }


        case 'REMOVE_ITEM':
            const itemToRemove = state.cartItems.find(
                (itemInCart) => itemInCart.id === action.payload.itemId
            );

            if (itemToRemove) {
                return {
                    ...state,
                    cartItems: state.cartItems.filter(
                        (item) => item.id !== action.payload.itemId
                    )
                };
            }

            return state;


        default:
            return state;
    }
}
