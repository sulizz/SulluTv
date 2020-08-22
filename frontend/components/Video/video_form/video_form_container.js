import {connect} from 'react-redux';
import VideoForm from './video_form'
import {createVideo} from '../../../actions/video_actions'

const mapStateToProps = state => {
    return {

    } 
}

const mapDispatchToProps = dispatch => {
    return {
        uploadNewVideo: data => dispatch(createVideo(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoForm);