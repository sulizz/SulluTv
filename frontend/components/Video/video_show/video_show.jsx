import React from 'react';

class VideoShow extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.requestVideo(this.props.match.params.videoId);
    }

    render() {

        
        const {video} = this.props
            if (!video) {
                return null;
            }

        return (
            <div> 
                <video className='thumbnail_url' controls width='300' height='300'>
                        <source src={video.videoUrl} type='video/mp4' />
                </video>
                <h1> {video.title} </h1>
                <h1> {video.username}</h1>
                <h1> {video.description} </h1> 
                <h1> {video.views} </h1>
                <h1>HELLO</h1>
            </div>
        )
    }
    
}

export default VideoShow;