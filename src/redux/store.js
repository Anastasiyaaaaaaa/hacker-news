import { configureStore } from '@reduxjs/toolkit';
import storiesReducer from './slices/storiesSlice';
import storyPageReducer from './slices/storyPageSlice';

export const store = configureStore({
    reducer: {
        stories: storiesReducer,
        storyPage: storyPageReducer
    },
})