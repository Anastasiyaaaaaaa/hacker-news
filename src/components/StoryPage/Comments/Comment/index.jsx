import './style.css';
import HTMLReactParser from 'html-react-parser';
import { fetchAllKids } from '../../../../redux/thunks/storyPageThunks';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CommentsTree } from './CommentsTree';
import { getFormattedTime } from '../../../../utils/formattedTime';

export const Comment = ({ comment, index }) => {

    const dispatch = useDispatch()

    const [watchAll, setWatchAll] = useState(false);

    const handleClick = () => {
        !watchAll && dispatch(fetchAllKids(comment.kids, index));
        setWatchAll(!watchAll);
    }

    return <div className='comment'>
        {/*  <p>id: {comment.id} </p>  */}
        <p>by: {comment.by}</p>
        <p>{comment.text && HTMLReactParser(comment.text)}</p>
        <p>{getFormattedTime(comment.time)}</p>
        {comment.kids &&
            <button type='button' onClick={handleClick}>
                {watchAll ? 'Скрыть' : 'Посмотреть'} все
            </button>}
        {watchAll && <CommentsTree storyCommentTree={comment.storyCommentTree} index={index} />}
    </div>
}