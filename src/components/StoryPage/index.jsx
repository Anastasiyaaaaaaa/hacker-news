import { Link } from 'react-router-dom';
import { Comments } from './Comments';
import './style.css';

export const StoryPage = () => {

    return <div className='story-page'>
        <Link to="/stories">Назад</Link>
        <div>StoryPage</div>
        <Comments />
    </div>
}