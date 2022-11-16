import axios from "axios";
import { API_NEWSTORIES_URL } from "../constants";
import { baseRequest } from "../requests";
import { setStories } from "../slices/storiesSlice";

export const fetchStories = () => async dispatch => {
    const { data: storiesIds } = await axios.get(API_NEWSTORIES_URL);
    const newStories = await Promise.all(storiesIds.slice(0, 100).map(baseRequest));
    dispatch(setStories(newStories))
}