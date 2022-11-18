import { baseRequest } from "../redux/requests";
import { existenceCheck } from "./existenceCheck";

export const getAllKids = async(kids) => {
    const exsistKids = existenceCheck(kids);
    for (const kid of exsistKids) {
        if (kid.kids) {
            await treeFetch(kid);
        }
    }
    return kids;
}

const treeFetch = async(comment) => {
    if (comment.kids) { /** если есть kids (массив из ids) */
        const kids = await Promise.all(comment.kids.map(baseRequest)); /** получаем массив объектов kids */
        const exsistKids = existenceCheck(kids);
        for (const kid of exsistKids) {
            await treeFetch(kid);
        }

        comment.storyCommentTree = exsistKids; /**сохраняем массив объектов в дерево*/
    }

    return comment;
};