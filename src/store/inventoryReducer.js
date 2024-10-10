const initialState = {
    allItems: [],
    regInventory: [],
    specInventory: []
}

export const updateRegInventory = (inventory) => ({
    type: 'UPDATE_REG_INVENTORY',
    payload: inventory
});

export const updateSpecInventory = (inventory) => ({
    type: 'UPDATE_SPEC_INVENTORY',
    payload: inventory
});

export default function inventoryReducer(state = initialState, action) {

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

        default:
            return state
    }
}