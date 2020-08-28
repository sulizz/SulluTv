import React from 'react';
import VideoIndexItem from './video_index_item'

class VideoIndex extends React.Component {
    
    componentDidMount() {
        this.props.requestAllVideos()
    }

    componentDidUpdate(oldProps) {
        if (oldProps.video && oldProps.video.id != this.props.match.params.videoId) {
            this.props.requestVideo(this.props.match.params.videoId);
            window.scrollTo(0, 0);
        }
    }

    render() {
        const videos = this.props.videos.map(video => (
            <VideoIndexItem video={video} key={video.id} />
        ));
        
        return (
            <ul className="video-main">
                {videos}
            </ul>
        )
        return null;
    }
};

export default VideoIndex;