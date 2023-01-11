import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./authSlice.js/authSlice"


export const store = configureStore({
    reducer: {
        auth: authReducer
    }
})