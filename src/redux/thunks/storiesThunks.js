import { baseRequest, storiesIdsRequest } from "../requests";
import { setStories, setStoriesIds } from "../slices/storiesSlice";

export const fetchStories = (oldIds, oldStories) => async dispatch => {
    const storiesIds = await storiesIdsRequest(); /* получаем 500 id`s историй */
    const storiesIds100 = storiesIds.slice(0, 100); /* первые 100 id`s историй */
    const newStoriesIds = storiesIds100.filter(id => !oldIds.includes(id)); /* смотрим, какие id добавились */
    const updStoriesIds = [...newStoriesIds, ...oldIds].slice(0, 100); /* формируем массив с новыми  id`s историй */
    const newStories = await Promise.all(newStoriesIds.map(baseRequest)); /* делаем запросы только по новым id */
    const updStories = [...newStories, ...oldStories].slice(0, 100); /* формируем массив с новыми историями */
    dispatch(setStories({ updStoriesIds: updStoriesIds, updStories: updStories }));
}