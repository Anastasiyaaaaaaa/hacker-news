import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import './style.css';

export const Header = () => {
    return <header className='header'>
        <Menu mode="horizontal">
            <Menu.Item><Link to="/">Главная</Link></Menu.Item>
            <Menu.Item><Link to="/stories">Новости</Link></Menu.Item>
        </Menu> 
    </header>
}