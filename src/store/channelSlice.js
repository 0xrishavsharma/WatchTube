import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentChannel: null,
    loading: false,
    error: false,
}

const channelSlice = createSlice({
    name: "channel",
    initialState,
    reducers: {
        channelFetchStart: (state) => {
            state.loading = true;
        },
        channelFetchSuccess: (state, action) => {
            state.loading = false;
            state.currentChannel = action.payload;
        },
        channelFetchError: (state) => {
            state.loading = true;
        },
    }
})

export const { channelFetchStart, channelFetchSuccess, channelFetchError } = channelSlice.actions;
export default channelSlice.reducer;