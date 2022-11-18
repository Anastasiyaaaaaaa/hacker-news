

import { ChildComment } from '../ChildComment';
import './style.css';

export const CommentsTree = ({ storyCommentTree }) => { 

    return <div className='comments-tree'>
        {storyCommentTree && storyCommentTree.map((comment) => {
            return <ChildComment
                key={comment.id}
                comment={comment}
            />
        })}
    </div>
}