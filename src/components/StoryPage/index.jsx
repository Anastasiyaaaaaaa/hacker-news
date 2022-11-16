import { Link } from 'react-router-dom'; 
import './style.css';
import { useSelector } from 'react-redux';

export const StoryPage = () => {
    const storyPage = useSelector((state) => state.storyPage.storyPage);
    console.log('storyPage', storyPage)
    return <div className='story-page'>
        <Link to="/stories">Назад</Link>
        <div className='story-title'>{storyPage.title}</div>
        <div className='story-by'>by {storyPage.by}</div>
        <div className='story-bottom'>
            <span>time {storyPage.time}</span>
            <span>score {storyPage.score}</span>
            <span>comments {storyPage.descendants}</span>
        </div>
    </div>
}