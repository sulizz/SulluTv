import NavBar from './nav_bar';
import VideoIndexContainer from '../Video/video_index/video_index_container'
import React from 'react';
class MainDisplay extends React.Component {

    render () {
        return (
            <div className='main-display'>
                <NavBar />
                <VideoIndexContainer/>
            </div>
        )
    }
}

export default MainDisplay;