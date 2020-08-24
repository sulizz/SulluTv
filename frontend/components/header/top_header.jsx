import React from 'react';
import {Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall'
import DropDown from './drop-down-container'


export default ({currentUser, logout}) => {

    const display = currentUser ? (
    
        <div className='right-container'>
            <div>
                <header className= 'userProfile'>
                    <p> {currentUser.username[0]}</p>
                </header>
                <section className = 'drop-down'>
                    <DropDown />
                </section>

            </div>
        </div>
        
    ) 
    : (
        <div className ='login-btn'>

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
                <SearchIcon className='search-icon'/>
            </div>

            <div className = 'video-icon'>
                <VideoCallIcon className= 'video-logo'/>
                    <div className = 'upload-link'>
                        <Link to='/upload'>Upload</Link>
                    </div>
            </div>

            <div className='right-container'>
                
                <span className ='user-logo'> 
                    <h1>  {display}  </h1>
                </span>
            </div>
        </header>
    );
};