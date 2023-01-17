import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./authSlice.js/authSlice"
import postReducer from './postSlice/postSlice';


export const store = configureStore({
    reducer: {
        auth: authReducer,
        post: postReducer
    }
})