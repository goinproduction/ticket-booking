import React from 'react';
import logo from '../assets/img/web-logo.png'
import avt from '../assets/img/avatar.png'

const Navbar = () => {
    return (
        <header className='header'>
            <a href='/' className='header-logo'>
                <img
                    src={logo}
                    alt='logo'
                    className='header-logo__img'
                />
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
                        <a href='#' className='header-navbar__list-item-link'>
                            Tin Tức
                        </a>
                    </li>
                    <li className='header-navbar__list-item'>
                        <a href='#' className='header-navbar__list-item-link'>
                            Ứng dụng
                        </a>
                    </li>
                </ul>
            </div>
            <div className='header-right'>
                <div className='header-right__login-wrap'>
                    <img
                        src={avt}
                        alt='avatar'
                        className='header-login__img'
                    />
                    <p className='header-login__text'>Đăng Nhập</p>
                </div>
                <div className='header-right__location'>
                    <i className='header-right__location-icon fas fa-map-marker-alt' />
                    <p className='header-right__location-text'>Hồ Chí Minh</p>
                    <i className='header-right__location-dropdown fa fa-chevron-down' />
                </div>
            </div>
        </header>
    );
};

export default Navbar;
