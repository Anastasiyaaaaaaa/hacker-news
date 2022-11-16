import { Story } from './Story';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchStories } from '../../redux/thunks/storiesThunks';

export const Stories = () => {

    const newStories = useSelector((state) => state.stories.newStories);
    const isLoaded = useSelector((state) => state.stories.isLoaded);
    const newStoriesIds = useSelector((state) => state.stories.newStoriesIds);

    const dispatch = useDispatch();

    const handleUpdate = async () => {
        dispatch(fetchStories(newStoriesIds, newStories))
    }

    useEffect(() => {
        handleUpdate();

        const interval = setInterval(() => {
            handleUpdate();
            console.log('Автоматический запрос на сервер (раз в минуту)');
        }, 60000);
        return () => clearInterval(interval);
    }, []);



    return isLoaded ?
        <div className='stories'>
            <button type='button' onClick={handleUpdate}>Обновить</button>
            {newStories.map(newStory => <Story key={newStory.id} story={newStory} />)}
        </div>
        :
        <div>Загрузка...</div>
}