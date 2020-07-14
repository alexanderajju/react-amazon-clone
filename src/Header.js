import React from 'react';
import './Header.css';
import {Link } from 'react-router-dom';

function Header() {
    return (
        <Link to="/">
        <nav className="header">
            <img
            className="header__logo"
             src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
        </nav>
        
        </Link>
        
    )
}

export default Header
