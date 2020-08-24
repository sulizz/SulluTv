import { connect } from 'react-redux';
import { getOneVideo, getAllVideos } from '../../../actions/video_actions';
import VideoShow from './video_show';

//when the video is clicked on index render the display page
//also render other videos on the side, which which cliks redirect to that show page
//need id of that video being clicked
//route {/videos/{video.id}}
const mapStateToProps = (state) => {
    //return { videos: Object.values(state.entities.video) }
    //get one video
};

const mapDispatchToProps = (dispatch) => ({
    getOneVideo: (id) => dispatch(getOneVideo(id)),
    getAllVideos: () => dispatch(getAllVideos())
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow);