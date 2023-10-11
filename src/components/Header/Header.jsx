import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <h1>Header</h1>
            <div>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/blog">Blog</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;