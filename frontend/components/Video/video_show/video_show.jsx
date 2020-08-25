import VideoIndexItem from '../video_index/video_index_container'
import { Link, withRouter } from 'react-router-dom';
import { formatDateTime } from '../../../utils/date_util'

import React from 'react';
class VideoShow extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.requestVideo(this.props.match.params.videoId);
        this.props.requestAllVideos()
    }

    render() {

        const { video, currentUser} = this.props
        if (!video) {
            return null;
        }

        // const displayedit = currentUser.id ? (video.user_id === currentUser.id ?( 
        //     <div>
        //         Edit
        //     </div>
        // ): (<> </>)):();

        
        return (

            <div className ='main-display'> 
                <div className ='video-display'>
                    <video className='video_url' controls>
                            <source src={video.videoUrl} type='video/mp4' />
                    </video>

                    <h1 className='title-text'> {video.title} </h1>

                    <div className='views-date'>
                        <h1> {video.views } views </h1>
                        <h1>{formatDateTime(video.created_at)}</h1>
                        {/* likes go here */}
                    </div>

                    <div className= 'user-info'> 
                        <h1 className='user-name'> {video.username}</h1>
                        {/* <h1> {video.username[0]}</h1> */}
                    </div>
                    <h1> {video.description} </h1> 
                    <Link to={`/edit/${video.id}`}>edit</Link>
                </div>
                
                <div className= 'side-bar-display'>
                        <Link to={`/videos/${video.id}`}><VideoIndexItem /></Link>
                </div>
            </div>
        )
    }
    
}

export default VideoShow;