import { Link } from 'react-router-dom';
import './style.css';
import { useDispatch } from 'react-redux';
import { setStoryPage } from '../../../redux/slices/storyPageSlice';
import { fetchComments } from '../../../redux/thunks/storyPageThunks';
import { getFormattedTime } from '../../../utils/formattedTime';
import { List } from 'antd';

import { MessageOutlined, StarOutlined } from '@ant-design/icons';

export const Story = ({ story }) => {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(setStoryPage(story));
        if (story.kids) dispatch(fetchComments(story.kids))
    }



    return story && <div className='story' onClick={handleClick}>
        <Link to={`storyPage_${story.id}`}>
            <List.Item
                key={story.id}
            >
                <List.Item.Meta
                    title={story.title}
                    description={`by: ${story.by}`}
                /> <div><StarOutlined />  {story.score}</div>
                <div><MessageOutlined /> {story.kids ? story.kids.length : 0}</div>
                <div> {getFormattedTime(story.time)}</div>
            </List.Item>
        </Link>

    </div>
}