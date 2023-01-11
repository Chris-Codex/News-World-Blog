import { createSlice } from "@reduxjs/toolkit"
import { auth } from "../../firebase"

const initialState = {
    user: null,
    register: [],
}

export const authSlice = createSlice({
    name: "user_param",
    initialState,

    reducers: {
        loginUser: (state, action) => {
            state.user = action.payload
        },

        registerUser: (state, action) => {
            state.register = [...state.register, action.payload]
        },

        logoutUser: (state, action) => {

        },
    }
})

export default authSlice.reducer
export const { loginUser, registerUser, logoutUser } = authSlice.actions
export const selectRegisteredUsered = state => state.auth.register
export const selectLoginUser = state => state.auth.user
