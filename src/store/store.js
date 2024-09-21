import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./globalReducer";

export default configureStore({
    reducer: {
        globalState:globalReducer
    }
}) 