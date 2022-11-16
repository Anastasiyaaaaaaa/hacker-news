import { createSlice, current } from "@reduxjs/toolkit"

const initialState = {
    storyPage: {},
    storyComments: [{
        comment: {},
        storyCommentTree: []
    }]

}

export const storyPageSlice = createSlice({
    name: 'storyPage',
    initialState,
    reducers: {
        setStoryPage: (state, action) => {
            const storyPage = action.payload;
            state.storyPage = storyPage;
            console.log('storyPage current(state)', current(state));
        },
    },
});

export const { setStoryPage } = storyPageSlice.actions

export default storyPageSlice.reducer //storyPageReducer