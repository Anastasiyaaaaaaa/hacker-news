import { Story } from './Story';
import './style.css';

export const Stories = () => {

    return <div className='stories'>
        <button type='button'>Обновить</button>
        <Story story={{id: 1}}/>
        <Story story={{id: 2}}/>
        <Story story={{id: 3}}/>
    </div>
}