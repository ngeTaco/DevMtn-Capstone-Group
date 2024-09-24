import axios from "axios"

const initialState = {
    allItems: [{ id: 0, name: "Cool Store Item" }],
    cart: [],
    itemModal: false,
    modelContent: {},
    isLoggedIn: false,
    cartDrawer: false,
    drawerContent: {}
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
    console.log(action)
    console.log(state)

    switch (action.type) {
        case "UPDATE_CART":
            return {
                ...state,
                cart: action.payload
            }

        case "SET_ALL_ITEMS":
        console.log(action.payload)    
        return {
                ...state,
                allItems: action.payload
            }
        case "HANDLE_MODAL" :
        console.log(action.payload)
        return {
            ...state,
            itemModal: action.payload
        }
        case "HANDLE_SPECIAL_MODAL":
        console.log(action.payload)
        return {   
            ...state,
            itemModal: action.payload

        }
        case "HANDLE_DRAWER":
        console.log(action.payload)
        return {
            ...state,
            cartDrawer: action.payload
            
        }
        default:
            return state
    }
}