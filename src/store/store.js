import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./globalReducer";
import storeReducer from "./storeReducer";

export default configureStore({
    reducer: {
        globalState:globalReducer, 
        cart: storeReducer
    }
}) 