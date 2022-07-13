import React from 'react';

const Navbar = () => {
    return (
        <nav className="app-nav">
            <ul className="app-nav__list">
                <li><a className="app-nav__link" href="#s">Profile</a></li>
                <li><a className="app-nav__link" href="#s">Messages</a></li>
                <li><a className="app-nav__link" href="#s">News</a></li>
                <li><a className="app-nav__link" href="#s">Music</a></li>
                <li><a className="app-nav__link" href="#s">Settings</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;