import React from 'react';
import { Link, withRouter } from 'react-router-dom';
 

const VideoIndexItem = ({ video }) => {
    return (
        
            <div className="videoItem">
            <Link to={`/videos/${video.id}`}><img src={video.photoUrl}></img></Link>
                <h1> {video.title} </h1>
                <h1> {video.username}</h1>
            </div>
        
    );
};

export default VideoIndexItem;