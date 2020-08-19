import React from 'react';
import {Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

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
            <Link className="btn" to="/login">Log In</Link> 
        </div>
    );

    return (
        <header className='header-bar'>
            <div className= 'left-container'>
                <MenuIcon />
                <h1 className='logo'>SulluTV</h1>
            </div>

            <div className='center-container'>
                <input type='text' />
            </div>

            <div className='right-container'>
                {display}
            </div>
        </header>
    );
};