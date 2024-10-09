import axios from "axios"

const initialState = {
    allItems: [],
    cart: [],
    itemModal: false,
    modelContent: {},
    isLoggedIn: false,
    isAdmin: false,
    userProfile: {},
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

export const updateRegInventory = (inventory) => ({
    type: 'UPDATE_REG_INVENTORY',
    payload: inventory
});

export const updateSpecInventory = (inventory) => ({
    type: 'UPDATE_SPEC_INVENTORY',
    payload: inventory
});

export default function globalReducer(state = initialState, action) {

    switch (action.type) {
        case "ADD_ITEM":
            return {
                ...state,
                allItems: [...state.allItems, action.payload]
            }

        case "DELETE_ITEM":
            const updatedAllItems = [...state.allItems]
            const index = updatedAllItems.findIndex((item) => item.itemId === action.payload) 
            updatedAllItems.splice(index, 1)
            return {
                ...state, 
                allItems: updatedAllItems
            }

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

        case "SET_REGULAR_ITEMS":
            return {
                ...state,
                regInventory: action.payload
            }

        case "SET_SPECIAL_ITEM":
            return {
                ...state,
                specInventory: [action.payload]
            }

        case 'UPDATE_REG_INVENTORY':
            return {
                ...state,
                regInventory: action.payload
            };

        case 'UPDATE_SPEC_INVENTORY':
            return {
                ...state,
                specInventory: action.payload
            };

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

        case "SET_USER_HISTORY":
            return {
                ...state,
                userHistory: action.payload
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