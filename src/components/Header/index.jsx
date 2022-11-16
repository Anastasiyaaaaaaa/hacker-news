import { Link } from 'react-router-dom';
import './style.css';

export const Header = () => {
    return <header className='header'>
        <nav>
            <ul>
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/stories">Новости</Link></li>
            </ul>
        </nav>
    </header>
}