import { Link } from 'react-router-dom';
import './style.css';

export const Story = ({ story }) => {

    return story && <div className='story'>
        <Link to={`storyPage_${story.id}`}> 
            <p>by {story.by}</p>
            <p>time {story.time}</p>
            <p>score {story.score}</p>
            <p>comments {story.descendants}</p>
        </Link>
    </div>
}