
import { getFormattedTime } from '../../../../../utils/formattedTime';
import { CommentsTree } from '../CommentsTree';
import './style.css';

export const Child = ({ comment  }) => { 
    
    /** добавить проверку на то, что коммент не удален */
    return <div className='child'>
        {/*  <p>id: {comment.id} </p>
        <p> parent: {comment.parent}</p>  */}
        <p>by: {comment.by}</p>
        <p>{comment.text}</p>
        <p>time {getFormattedTime(comment.time)}</p>
        <CommentsTree
            storyCommentTree={comment.storyCommentTree}
        />
    </div>
}