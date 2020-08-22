import React from 'react';

const VideoIndexItem = ({ video }) => {
    return (
        <li>
            <ul className="videoItem">
                <li> {video.title} </li>
                <li> {video.description} </li>
                <li> {video.views} </li>
                <li>
                    <video autoPlay controls>
                        <source src={video.videoUrl} type='video/mp4' />
                    </video>

                </li>
            </ul>
        </li>
    );
};

export default VideoIndexItem;