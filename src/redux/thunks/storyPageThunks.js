import { baseRequest } from "../requests";
import { setComments, setCommentTree } from "../slices/storyPageSlice";

export const fetchComments = (ids) => async dispatch => {
    const comments = await Promise.all(ids.map(baseRequest));

    const exsistComments = [];
    comments.forEach(comment => {
        if (!comment.deleted && !comment.dead)
            exsistComments.push(comment)
    })
    dispatch(setComments(exsistComments))
}

export const fetchAllKids = (ids, index) => async dispatch => {

    const kids = await Promise.all(ids.map(baseRequest));

    for (const kid of kids) {
        if (kid.kids) {
            await treeFetch(kid);
        }
    }

    dispatch(setCommentTree({ index: index, storyCommentTree: kids })); /** диспатчим после получения всех детей */
}

const treeFetch = async(comment) => {

    if (comment.kids) { /** если есть kids (массив из ids) */
        const kids = await Promise.all(comment.kids.map(baseRequest)); /** получаем массив объектов kids */
        for (const kid of kids) {
            await treeFetch(kid);
        }

        comment.storyCommentTree = kids; /**сохраняем массив объектов в дерево*/
    }

    return comment;
};