import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    newStoriesIds: [],
    newStories: [],
    isLoaded: false
}

export const storiesSlice = createSlice({
    name: 'stories',
    initialState,
    reducers: {
        setStories: (state, action) => {
            const newStories = action.payload.newStories;
            state.isLoaded = true;
            state.newStories = newStories;
            state.newStoriesIds = action.payload.newStoriesIds;
        },
    }
})

export const { setStories } = storiesSlice.actions

export default storiesSlice.reducer //storiesReducer