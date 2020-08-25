
import {connect} from 'react-redux';
import { updateVideo, deleteVideo} from '../../../actions/video_actions';
import EditForm from './edit_form';
const mapStateToProps = (state, ownProps) => {
    currentUser = state.session.currentUser.id;

    let video = state.entities.video[ownProps.match.params.videoId]

    return {video:video}
}

const mapDispatchToProps = (dispatch) => ({
    editVideo: (formData, videoId) => dispatch(updateVideo(formData, videoId)),
    deleteVideo: videoId => dispatch(deleteVideo(videoId))

})

export default connect(mapStateToProps, mapDispatchToProps)(EditForm)