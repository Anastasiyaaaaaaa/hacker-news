
import { getFormattedTime } from '../../../../../utils/formattedTime';
import { CommentsTree } from '../CommentsTree';
import './style.css';
import { Comment as CommentAntd } from 'antd'
import HTMLReactParser from 'html-react-parser';

export const ChildComment = ({ comment  }) => { 
    
    /** добавить проверку на то, что коммент не удален */
    return <div className='child-comment'>
        
        <CommentAntd
            author={comment.by}
            content={comment.text && HTMLReactParser(comment.text)}
            datetime={getFormattedTime(comment.time)}
        ></CommentAntd>

        <CommentsTree
            storyCommentTree={comment.storyCommentTree}
        />
    </div>
}