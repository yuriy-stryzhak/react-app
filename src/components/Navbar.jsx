import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.nav__list}>
                <li><a className={`${s.nav__link} ${s.active}`} href="#s">Profile</a></li>
                <li><a className={s.nav__link} href="#s">Messages</a></li>
                <li><a className={s.nav__link} href="#s">News</a></li>
                <li><a className={s.nav__link} href="#s">Music</a></li>
                <li><a className={s.nav__link} href="#s">Settings</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;