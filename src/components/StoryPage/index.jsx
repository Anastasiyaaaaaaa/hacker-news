import { Link } from 'react-router-dom';
import './style.css';
import { useSelector } from 'react-redux';
import { Comments } from './Comments';
import { useDispatch } from 'react-redux';
import { fetchComments } from '../../redux/thunks/storyPageThunks';
import { getFormattedTime } from '../../utils/formattedTime';
import { Button, Card, Spin } from 'antd';
import { MessageOutlined, StarOutlined } from '@ant-design/icons';
import { useLayoutEffect } from 'react';
export const StoryPage = () => {

    const storyPage = useSelector((state) => state.storyPage.storyPage);
    const storyComments = useSelector((state) => state.storyPage.storyComments);
    const commentsisLoaded = useSelector((state) => state.storyPage.commentsisLoaded);

    const dispatch = useDispatch();

    const handleUpdComments = () => {
        dispatch(fetchComments(storyPage.kids));
    }

    useLayoutEffect(() => {
        window.scrollTo(0, 0); //чтобы не прокручивалось вниз, когда много комментов 
    }, []);

    return <div className='story-page'>
        <Button><Link to="/stories">Назад</Link></Button>
        <Card title={<a href={storyPage.url} target='blank'>{storyPage.title}</a>}>

            <div className='story-by'>Автор: {storyPage.by}</div>

            <div><a href={storyPage.url} target='blank'>Ссылка на источник</a></div>
            <div className='story-bottom'>
                <div>{getFormattedTime(storyPage.time)}</div>
                <span><StarOutlined /> {storyPage.score}</span>
                <div><MessageOutlined /> {storyPage.kids ? storyPage.kids.length : 0}</div>
            </div>
            
            <Button onClick={handleUpdComments}>Обновить комментарии</Button>
            {!commentsisLoaded && <div><Spin /></div>}
            {storyPage.kids && <div className='story-page-comments'>
                <div className='story-page-comments-header'>Комментарии</div> 
                <Comments comments={storyComments} />
            </div>
            }
        </Card>
    </div>
}