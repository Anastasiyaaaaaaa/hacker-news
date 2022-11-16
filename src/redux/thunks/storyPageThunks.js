import axios from "axios";
import { API_NEWSTORIES_URL } from "../constants";
import { baseRequest } from "../requests";
import { setStories } from "../slices/storiesSlice";
import { setComments } from "../slices/storyPageSlice";

export const fetchComments = (ids) => async dispatch => {
    const comments = await Promise.all(ids.map(baseRequest));
    dispatch(setComments(comments))
}