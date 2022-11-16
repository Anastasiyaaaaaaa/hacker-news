import axios from "axios";
import { API_NEWSTORIES_URL } from "../constants";
import { baseRequest } from "../requests";
import { setStories } from "../slices/storiesSlice";

export const fetchStories = (oldIds, oldStories) => async dispatch => {
    const { data: storiesIds } = await axios.get(API_NEWSTORIES_URL); /* получаем обновлённые id`s историй */
    const newStoriesIds = storiesIds.filter(id => !oldIds.includes(id)); /* смотрим, какие id добавились */
    const newStories = await Promise.all(newStoriesIds.slice(0, 100).map(baseRequest)); /* делаем запросы только по новым id */
    const stories = [...newStories, ...oldStories].slice(0, 100); /* формируем массив с новыми историями */
    dispatch(setStories({ newStories: stories, newStoriesIds: storiesIds }))
}