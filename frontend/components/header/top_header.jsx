import React from 'react';
import {Link } from 'react-router-dom'

export default ({currentUser, logout}) => {

    const display = currentUser ? (
        <div>
            <p> {currentUser.username}</p>
            <button onClick={logout}>Log Out</button>
        </div>
    ) 
    : (
        <div>
            <Link className="btn" to="/signUp">Sign Up</Link> 
            <Link className="btn" to="/LogIn">Log In</Link> 
        </div>
    );

    return (
        <header className='header-bar'>
            <h1 className='logo'>SulluTV</h1>
            <div>
                {display}
            </div>
        </header>
    );
};