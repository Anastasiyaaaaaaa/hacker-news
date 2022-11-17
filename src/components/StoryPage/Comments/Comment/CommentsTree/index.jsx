

import { Child } from '../Child';
import './style.css';

export const CommentsTree = ({ storyCommentTree }) => { 

    return <div className='comments-tree'>
        {storyCommentTree && storyCommentTree.map((comment) => {
            return <Child
                key={comment.id}
                comment={comment}
            />
        })}
    </div>
}