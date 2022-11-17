import { Link } from 'react-router-dom';
import './style.css';
import { useDispatch } from 'react-redux';
import { setStoryPage } from '../../../redux/slices/storyPageSlice';
import { fetchComments } from '../../../redux/thunks/storyPageThunks';
import { getFormattedTime } from '../../../utils/formattedTime';
import { Card } from 'antd';

import { MessageOutlined, StarOutlined } from '@ant-design/icons';
export const Story = ({ story }) => {
    
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(setStoryPage(story));
        story.kids && dispatch(fetchComments(story.kids));
    } 

    return story && <div className='story' onClick={handleClick}>
        <Card>
            <Link to={`storyPage_${story.id}`}>
                <div>{story.title}</div>
                <div className='story-by'>by {story.by}</div>
                <div> {getFormattedTime(story.time)}</div>
                <div><StarOutlined />  {story.score}</div>
                <div><MessageOutlined /> {story.kids ? story.kids.length : 0}</div>
            </Link>
        </Card>
    </div>
}