import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    togglePostForm: false,
    toggleActionBtn: false,
    loading: false,
    postData: [],
    categoryData: null
}

const postSlice = createSlice({
    name: "post",
    initialState,

    reducers: {
        toggleForm: (state) => {
            state.togglePostForm = (!state)
        },

        loadingSppinner: (state) => {
            state.loading = (!state)
        },

        post: (state, action) => {
            state.postData = [...state.postData, action.payload]
        },

        category: (state, action) => {
            state.categoryData = action.payload
        }
    }

})

export default postSlice.reducer
export const { toggleForm, toggleActionBtn, loadingSpinner, post, category } = postSlice.actions
export const seleectCategory = state => state.post.categoryData