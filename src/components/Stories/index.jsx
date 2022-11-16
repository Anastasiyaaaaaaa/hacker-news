import { Story } from './Story';
import './style.css';

export const Stories = () => {

    return <div className='stories'>
        <button type='button'>Обновить</button>
        <Story />
        <Story />
        <Story />
    </div>
}