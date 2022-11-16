import { Link } from 'react-router-dom';
import './style.css';
import { useDispatch } from 'react-redux';
import { setStoryPage } from '../../../redux/slices/storyPageSlice';

export const Story = ({ story }) => {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(setStoryPage(story)); 
    }

    return story && <div className='story' onClick={handleClick}>
        <Link to={`storyPage_${story.id}`}>
            <div className='story-title'>{story.title}</div>
            <div className='story-by'>by {story.by}</div>
            <div className='story-bottom'> 
                <span>time {story.time}</span>
                <span>score {story.score}</span>
                <span>comments {story.descendants}</span>
            </div>
        </Link>
    </div>
}