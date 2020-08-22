import React from 'react';

const VideoIndexItem = ({ video }) => {
    return (
        <li>
            <ul className="videoItem">
                <img src={video.title}/>
                <li> {video.description} </li>
                <li> {video.views} </li>

            </ul>
        </li>
    );
};

export default VideoIndexItem;