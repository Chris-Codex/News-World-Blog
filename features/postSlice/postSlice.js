import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    togglePostForm: false,
    loading: false,
    postData: []
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
        }
    }

})

export default postSlice.reducer
export const { toggleForm, loadingSppinner } = postSlice.actions