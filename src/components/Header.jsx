import React from 'react';
import logo from './../img/logo.png';

const Header = () => {
    return (
        <header className="app-header">
            <img src={logo} alt="logo" />
        </header>
    );
}

export default Header;