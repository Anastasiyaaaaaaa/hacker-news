import { Link } from 'react-router-dom';
import './style.css';

export const Story = ({ story }) => {

    return <div className='story'>
        <Link to={`storyPage_${story.id}`}>
            Story {story.id}
        </Link>
    </div>
}