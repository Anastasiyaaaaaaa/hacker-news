import { createSlice, current } from "@reduxjs/toolkit"

const initialState = {
    storyPage: {},
    storyComments: [],
    commentsisLoaded: false

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
            const storyComments = action.payload;
            state.storyComments = storyComments;
            state.commentsisLoaded = storyComments.length > 0 ? true : false;
            // console.log(current(state))
        },
        setCommentTree: (state, action) => {
            const index = action.payload.index;
            state.storyComments[index].storyCommentTree = action.payload.storyCommentTree;
        },
    },
});

export const { setStoryPage, setComments, setCommentTree } = storyPageSlice.actions

export default storyPageSlice.reducer //storyPageReducer