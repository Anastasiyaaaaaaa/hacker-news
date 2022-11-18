import { createSlice, current } from "@reduxjs/toolkit"

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
            state.newStoriesIds = action.payload.updStoriesIds;
            state.newStories = action.payload.updStories;
            state.isLoaded = true;
        },
    }
})

export const { setStories, setStoriesIds } = storiesSlice.actions

export default storiesSlice.reducer //storiesReducer