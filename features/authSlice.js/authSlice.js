import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    loading: false,
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
            try {
                state.register = [...state.register, action.payload]
            } catch (error) {
                console.log("ERROR OCCURED", error)
            }
        },

        logoutUser: (state) => {
            state.user = (null)
        },

        loading: (state) => (!state)
    }
})

export default authSlice.reducer
export const { loginUser, registerUser, logoutUser, loading } = authSlice.actions
export const selectRegisteredUsered = state => state.auth.register
export const selectLoginUser = state => state.auth.user
export const selectLoading = state => state.auth.loading
