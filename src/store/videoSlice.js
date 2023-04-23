import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentVideo: null,
    loading: false,
    error: false
}

const videoSlice = createSlice({
    name: "video",
    initialState,
    reducers: {
        likeVideo: (state) => {
            state.loading = true
        },
        dislikeVideo: (state, action) => {
            state.loading = false,
                state.currentUser = action.payload
        },
        subscribeChannel: (state) => {
            state.loading = false,
                state.error = true
        },
        unsubscribeChannel: (state) => {
            return initialState
        }
    },
})

export const { loginStart, loginSuccess, loginFailure, logout } = videoSlice.actions;

export default videoSlice.reducer;
