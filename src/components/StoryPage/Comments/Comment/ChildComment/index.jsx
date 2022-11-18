
import { getFormattedTime } from '../../../../../utils/formattedTime';
import { CommentTree } from '../CommentTree';
import './style.css';
import { Comment as CommentAntd } from 'antd'
import HTMLReactParser from 'html-react-parser';

export const ChildComment = ({ comment  }) => { 
     
    return <div className='child-comment'>
        
        <CommentAntd
            author={comment.by}
            content={comment.text && HTMLReactParser(comment.text)}
            datetime={getFormattedTime(comment.time)}
        ></CommentAntd>

        <CommentTree
            storyCommentTree={comment.storyCommentTree}
        />
    </div>
}