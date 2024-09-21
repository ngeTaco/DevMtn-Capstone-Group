const initialState = {
    allItems: [],
    cart: [],
    itemModal: false,
    modelContent: {},
    isLoggedIn: false
}
/// {type:"UPDATE_CART", payload:cartItems} ///

export default function globalReducer(state = initialState, action) {
    switch (action.type) {
        case "UPDATE_CART":
            return {
                ...state,
                cart: action.payload
            }
        default:
            return state

    }
}