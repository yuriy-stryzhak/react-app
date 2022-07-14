import React from 'react';
import logo from './../../img/logo.png';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src={logo} alt="logo" />
        </header>
    );
}

export default Header;