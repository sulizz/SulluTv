import { connect } from 'react-redux';
import { requestVideo, requestAllVideos } from '../../../actions/video_actions';
import VideoShow from './video_show';

//when the video is clicked on index render the display page
//also render other videos on the side, which which cliks redirect to that show page
//need id of that video being clicked
//route {/videos/{video.id}}
const mapStateToProps = (state, ownProps) => {
    //return { videos: Object.values(state.entities.video) }
    //get one video
    // debugger
    
    let video = state.entities.video[ownProps.match.params.videoId]

    return {video: video}
};

const mapDispatchToProps = (dispatch) => ({
    requestVideo: (videoId) => dispatch(requestVideo(videoId)),
    // requestAllVideos: () => dispatch(requestAllVideos())
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow);