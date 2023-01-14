import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    user: {},
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
            try {
                state.register = [...state.register, action.payload]
            } catch (error) {
                console.log("ERROR OCCURED", error)
            }
        },

        logoutUser: (state) => {
            state.register = (null)
        },
    }
})

export default authSlice.reducer
export const { loginUser, registerUser, logoutUser } = authSlice.actions
export const selectRegisteredUsered = state => state.auth.register
export const selectLoginUser = state => state.auth.user
