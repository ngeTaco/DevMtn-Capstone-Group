import axios from "axios"

const initialState = {
    allItems: [],
    cart: [],
    itemModal: false,
    modelContent: {},
    cartDrawer: false,
    drawerContent: {}
}

export function getAllItems(dispatch) {
    axios.get('/api/all/inventory').then(({ data }) => {
        dispatch({
            type: "SET_ALL_ITEMS",
            payload: data
        })
    })
}

export default function globalReducer(state = initialState, action) {

    switch (action.type) {
        

        case "UPDATE_CART":
            return {
                ...state,
                cart: action.payload
            }

        case "HANDLE_MODAL":
            return {
                ...state,
                itemModal: action.payload
            }
        case "HANDLE_SPECIAL_MODAL":
            return {
                ...state,
                itemModal: action.payload

            }
        case "HANDLE_DRAWER":
            return {
                ...state,
                cartDrawer: action.payload

            }
        default:
            return state
    }
}