import { existenceCheck } from "../../utils/existenceCheck";
import { getAllKids } from "../../utils/getAllKids";
import { baseRequest } from "../requests";
import { setComments, setCommentTree } from "../slices/storyPageSlice";

export const fetchComments = (ids) => async dispatch => {

    const comments = await Promise.all(ids.map(baseRequest));
    const exsistComments = existenceCheck(comments);
    dispatch(setComments(exsistComments))
}

export const fetchAllKids = (ids, index) => async dispatch => {

    const kids = await Promise.all(ids.map(baseRequest));
    const allExsistKids = await getAllKids(kids);
    dispatch(setCommentTree({ index: index, storyCommentTree: allExsistKids })); /** диспатчим после получения всех детей */
}