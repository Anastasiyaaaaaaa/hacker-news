
import { Comment } from './Comment';
import './style.css';

export const Comments = ({ kids, comments }) => {

   
    return comments && <div className='comments'> 
        {comments.map((comment, index) => <Comment
            key={comment.id}
            comment={comment} 
        />)}
    </div>
}