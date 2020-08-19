import React from 'react';
import {Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import DropDown from './drop-down-container'

export default ({currentUser, logout}) => {

    const display = currentUser ? (
    
        <div className='right-container'>
            <div>
                <header className= 'userProfile'>
                    <p> {currentUser.username}</p>
                </header>
                <section className = 'drop-down'>
                    <DropDown />
                </section>

            </div>
        </div>
        
    ) 
    : (
        <div>
            {/* <Link className="btn" to="/signUp">Sign Up</Link> */}
            <i className="far fa-user-circle"></i>
                <Link className="btn" to="/login"> Log In</Link> 
                
        </div>
    );

    return (
        <header className='header-bar'>
            <div className= 'left-container'>
                <MenuIcon />
                <Link className='logo' to="/">SulluTV</Link>
            </div>

            <div className='center-container'>
                
                <input placeholder="Search" type="text"
                 type='text' />
            </div>

            <div>
                {display}
            </div>
        </header>
    );
};