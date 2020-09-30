import React from 'react';
import NavBarContainer from '../nav-bar/nav_bar_container';
import VideoIndexContainer from '../Video/video_index/video_index_container'


class MainDisplay extends React.Component {

    
    render () {
        return (
            <div className='main-display'>
                <NavBarContainer />
                <VideoIndexContainer/>
            </div>
        )
    }
}

export default MainDisplay;