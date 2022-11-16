import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    newStories: [],
    isLoaded: false
}

export const storiesSlice = createSlice({
    name: 'stories',
    initialState,
    reducers: {
        setStories: (state, action) => {
            const newStories = action.payload;
            state.isLoaded = true;
            state.newStories = newStories;
        },
    }
})

export const { setStories } = storiesSlice.actions

export default storiesSlice.reducer //storiesReducer