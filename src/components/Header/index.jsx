import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import './style.css';

export const Header = () => {
    const MenuItems = [
        { label: <Link to="/">Главная</Link>, key: 'main-page' },
        { label: <Link to="/stories">Новости</Link>, key: 'stories' }
    ];
    return <header className='header'>
        <Menu mode="horizontal" items={MenuItems} />
    </header>
}