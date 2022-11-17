
import { Comment } from './Comment';
import './style.css';

export const Comments = ({ kids, comments }) => {

    console.log('comments', comments)
    return comments && <div className='comments'>
        {comments.map((comment, index) => <Comment
            key={comment.id}
            index={index}
            comment={comment}
        />)}
    </div>
}