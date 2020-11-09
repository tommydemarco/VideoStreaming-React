import React from 'react';
import './TheNavbar.css'

import { Link, NavLink } from 'react-router-dom'

const TheNavbar = () => {
    return (
        <div className="the-navbar">
            <Link to="/" className="the-navbar__logo">
                Logo
            </Link>
            <nav className="the-navbar__navigation">
                <NavLink to="/create-stream">Create</NavLink>
                <NavLink to="/create-stream">Delete</NavLink>
            </nav>
        </div>
    );
}

export default TheNavbar;
