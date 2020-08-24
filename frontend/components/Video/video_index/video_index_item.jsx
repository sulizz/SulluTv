import React from 'react';
import { Link, withRouter } from 'react-router-dom';
 

const VideoIndexItem = ({ video }) => {
    return (
        
            <div className="videoItem">
                    <video className='thumbnail_url' width='300' height='300'> 
                    autoPlay ={false} controls
                        <source src={video.videoUrl} type='video/mp4' />
                    </video>
                    <h1><Link to={`/videos/${video.id}`}>     Display
                    </Link></h1>
                <h1> {video.title} </h1>
                <h1> {video.username}</h1>
                {/* <h1> {video.description} </h1> */}
                {/* <h1> {video.views} </h1> */}
            </div>
        
    );
};

export default VideoIndexItem;