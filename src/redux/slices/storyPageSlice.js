import { createSlice, current } from "@reduxjs/toolkit"

const initialState = {
    storyPage: {},
    storyComments: []

}

export const storyPageSlice = createSlice({
    name: 'storyPage',
    initialState,
    reducers: {
        setStoryPage: (state, action) => {
            const storyPage = action.payload;
            state.storyPage = storyPage;
        },
        setComments: (state, action) => {
            state.storyComments = action.payload;

        },
        setCommentTree: (state, action) => {
            const index = action.payload.index;
            state.storyComments[index].storyCommentTree = action.payload.storyCommentTree;

        },
    },
});

export const { setStoryPage, setComments, setCommentTree } = storyPageSlice.actions

export default storyPageSlice.reducer //storyPageReducer