import {connect} from 'react-redux';
import VideoForm from './video_form'
import {
  createVideo,
  requestVideo,
  requestAllVideos,
} from "../../../actions/video_actions";

const mapStateToProps = state => {
    return {

    } 
}

const mapDispatchToProps = dispatch => {
    return {
      uploadNewVideo: (data) => dispatch(createVideo(data)),
    //   requestVideo: (videoId) => dispatch(requestVideo(videoId)),
      requestAllVideos: () => dispatch(requestAllVideos()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoForm);