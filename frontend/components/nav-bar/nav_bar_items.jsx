import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';

class NavBarItems extends React.Component {
    render () {
        return (
        <div>
            <div className='nav-bar-items'>
                <HomeIcon className ='home-icon'/>
                <h1> Home </h1>
            </div>
            <div className='nav-bar-items'>
                    <WhatshotIcon className='whatshot-icon'/>
                <h1> Trending </h1>
            </div>
        </div>
        )
    }
}

export default NavBarItems;
