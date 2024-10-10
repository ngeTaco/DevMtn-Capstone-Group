import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./globalReducer";
import storeReducer from "./storeReducer";
import inventoryReducer from "./inventoryReducer";
import profileReducer from "./profileReducer";

export default configureStore({
    reducer: {
        globalState:globalReducer, 
        cart: storeReducer,
        inventoryState: inventoryReducer,
        profileState: profileReducer
    }
}) 