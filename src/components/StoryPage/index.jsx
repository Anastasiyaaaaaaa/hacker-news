import { Link } from 'react-router-dom';
import './style.css';
import { useSelector } from 'react-redux';
import { Comments } from './Comments';
import { useDispatch } from 'react-redux';
import { fetchComments } from '../../redux/thunks/storyPageThunks';

export const StoryPage = () => {

    const storyPage = useSelector((state) => state.storyPage.storyPage);
    const storyComments = useSelector((state) => state.storyPage.storyComments);

    const dispatch = useDispatch();

    const handleUpdComments = () => {
        dispatch(fetchComments(storyPage.kids));
    }
 
    return <div className='story-page'>
        <Link to="/stories">Назад</Link>
        <div className='story-title'>{storyPage.title}</div>
        <div className='story-by'>by {storyPage.by}</div>
        <div><a href={storyPage.url} target='blank'>ссылка</a></div>
        <div className='story-bottom'> 
        <div>time: {storyPage.time}</div>
            <span>score {storyPage.score}</span>
        <div>descendants: {storyPage.descendants}</div>
        </div>
        {storyPage.kids && <>
            <button type='button' onClick={handleUpdComments}>Обновить</button>
            <Comments comments={storyComments} />
        </>
        }
    </div>
}