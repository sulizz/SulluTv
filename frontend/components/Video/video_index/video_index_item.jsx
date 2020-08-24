import React from 'react';
import { Link, withRouter } from 'react-router-dom';
 

const VideoIndexItem = ({ video }) => {
    return (
        
            <div className="videoItem">
                <Link to={`/videos/${video.id}`}>
                <img src={video.photoUrl} className='video-thumbnail'
                    />
                </Link>

                <div className= 'video-bottom-text'>
                    <h1 className ='avatar'>{video.username[0]}</h1>

                    <div className='video-text'>
                        <h2> {video.title} </h2>
                        <h1> {video.username}</h1>
                        <p>{video.views}</p>
                        {/* <p>{video.timestamp}</p> */}
                    </div>
                </div>
            </div>
        
    );
};

export default VideoIndexItem;