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
            state.newStories = newStories;
            state.newStoriesIds = action.payload.newStoriesIds;
            state.isLoaded = true;
        },
    }
})

export const { setStories } = storiesSlice.actions

export default storiesSlice.reducer //storiesReducer