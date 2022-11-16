import { Link } from 'react-router-dom';
import './style.css';

export const Story = ({ story }) => {

    return story && <div className='story'>
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