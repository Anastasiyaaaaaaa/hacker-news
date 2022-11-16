import { Story } from './Story';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchStories } from '../../redux/thunks/storiesThunks';

export const Stories = () => {

    const state = useSelector((state) => state.stories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchStories())
    }, []);

    return state.isLoaded ?
        <div className='stories'>
            <button type='button'>Обновить</button>
            {state.newStories.map(newStory => <Story key={newStory.id} story={newStory} />)}
        </div>
        :
        <div>Загрузка...</div>
}