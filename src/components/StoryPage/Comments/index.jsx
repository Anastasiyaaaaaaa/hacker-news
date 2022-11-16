import { Comment } from './Comment';
import './style.css';

export const Comments = () => {

    return <div className='comments'>
        <button type='button'>Обновить</button>
        <Comment />
        <Comment />
    </div>
}