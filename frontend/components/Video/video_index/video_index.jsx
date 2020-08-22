import React from 'react';
// import VideoIndexItem from './video_index_item'
const VideoIndexItem = ({ video }) => {
    return (
        <li>
            <ul className="videoItem">
                <li> {video.title} </li>
                <li> {video.description} </li>
                <li> {video.views} </li>
                <li>
                    <video autoPlay controls>
                        <source src={video.videoUrl} type='video/mp4'/> 
                    </video>

                </li>
            </ul>
        </li>
    );
};

class VideoIndex extends React.Component {
    
    componentDidMount() {
        debugger
        this.props.requestAllVideos()
    }

    render() {
        const videos = this.props.videos.map(video => (
            <VideoIndexItem video={video} key={video.id} />
        ));
            debugger
        return (
            <ul className="maincontent">
                {videos}
            </ul>
        )
        return null;
    }
};

export default VideoIndex;