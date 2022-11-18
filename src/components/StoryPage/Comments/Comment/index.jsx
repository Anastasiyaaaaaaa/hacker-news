import './style.css';
import HTMLReactParser from 'html-react-parser';
import { fetchAllKids } from '../../../../redux/thunks/storyPageThunks';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CommentTree } from './CommentTree';
import { getFormattedTime } from '../../../../utils/formattedTime';
import { Button, Comment as CommentAntd } from 'antd'

export const Comment = ({ comment, index }) => {

    const dispatch = useDispatch()

    const [watchAll, setWatchAll] = useState(false);

    const handleClick = () => {
        !watchAll && comment.kids && dispatch(fetchAllKids(comment.kids, index));
        setWatchAll(!watchAll);
    }

    return <div className='comment'>
        <CommentAntd
            author={comment.by}
            content={comment.text && HTMLReactParser(comment.text)}
            datetime={getFormattedTime(comment.time)}
        ></CommentAntd>
        {comment.kids &&
            <Button onClick={handleClick} type="primary"> {watchAll ? 'Скрыть' : 'Посмотреть'} все</Button>}

        {watchAll && <CommentTree storyCommentTree={comment.storyCommentTree} index={index} />}
    </div>
}