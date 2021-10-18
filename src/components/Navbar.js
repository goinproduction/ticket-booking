import React, { useState } from 'react';
import logo from '../assets/img/web-logo.png';
import avt from '../assets/img/avatar.png';
import DropdownProvince from './DropdownProvince';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
    const [location, setLocation] = useState('Hồ Chí Minh');
    const [showSelection, setShowSelection] = useState(false);
    const history = useHistory();
    const handleClick = () => {
        history.push('/login');
    };
    return (
        <header className='header'>
            <a className='header-logo' onClick={() => history.push('/')}>
                <img src={logo} alt='logo' className='header-logo__img' />
            </a>
            <div className='header-navbar'>
                <ul className='header-navbar__list'>
                    <li className='header-navbar__list-item'>
                        <a
                            href='#movie'
                            className='header-navbar__list-item-link'
                        >
                            Lịch Chiếu
                        </a>
                    </li>
                    <li className='header-navbar__list-item'>
                        <a
                            href='#cineplex'
                            className='header-navbar__list-item-link'
                        >
                            Cụm rạp
                        </a>
                    </li>
                    <li className='header-navbar__list-item'>
                        <a href='#news' className='header-navbar__list-item-link'>
                            Tin Tức
                        </a>
                    </li>
                    <li className='header-navbar__list-item'>
                        <a href='#app' className='header-navbar__list-item-link'>
                            Ứng dụng
                        </a>
                    </li>
                </ul>
            </div>
            <div className='header-right'>
                <div
                    className='header-right__login-wrap'
                    onClick={handleClick.bind(this)}
                >
                    <img src={avt} alt='avatar' className='header-login__img' />
                    <p className='header-login__text'>Đăng Nhập</p>
                </div>
                <div
                    className='header-right__location'
                    onClick={() => setShowSelection(!showSelection)}
                >
                    <i className='header-right__location-icon fas fa-map-marker-alt' />
                    <p className='header-right__location-text'>{location}</p>
                    <i className='header-right__location-dropdown-icon fa fa-chevron-down' />
                    {showSelection === true ? (
                        <DropdownProvince
                            setLocation={setLocation}
                            setShowSelection={setShowSelection}
                        />
                    ) : null}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
