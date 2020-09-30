import React from 'react';
import { Link, withRouter } from 'react-router-dom';
 

const VideoIndexItem = ({ video }) => {
    return (
        
            <div className="videoItem">
                <Link to={`/videos/${video.id}`}>
                <img src={video.photoUrl} className='video-thumbnail'
                    />
                </Link>

                <h1 className ='avatar'>{video.username[0].toUpperCase()}</h1>
                <div className= 'video-bottom-text'>

                    <div className='video-text'>
                        <h2> {video.title} </h2>
                        <h1> {video.username}</h1>
                        <h1>{video.views}  views</h1>
                    </div>
                <div className='empty'>   </div>
                </div>
            </div>
        
    );
};

export default VideoIndexItem;