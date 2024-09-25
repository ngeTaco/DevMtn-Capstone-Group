import axios from "axios"

const initialState = {
    allItems: [{ id: 0, name: "Cool Store Item" }],
    cart: [],
    itemModal: false,
    modelContent: {},
    isLoggedIn: false,
    isAdmin: false,
    userProfile: {}
}
/// {type:"UPDATE_CART", payload:cartItems} ///

export function getAllItems(dispatch) {
    axios.get('/api/all/inventory').then(({ data }) => {
        dispatch({
            type: "SET_ALL_ITEMS",
            payload: data
        })
    })
}

export default function globalReducer(state = initialState, action) {
    //console.log(action)
    //console.log(state)

    switch (action.type) {
        case "UPDATE_CART":
            return {
                ...state,
                cart: action.payload
            }

        case "SET_ALL_ITEMS":
            return {
                ...state,
                allItems: action.payload
            }

        case "SET_USER":
            return {
                ...state,
                userProfile: action.payload
            }

        case "SET_IS_ADMIN":
            return {
                ...state,
                isAdmin: action.payload
            }

        default:
            return state
    }
}