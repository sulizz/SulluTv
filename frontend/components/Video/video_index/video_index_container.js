import {connect} from 'react-redux';
import {requestAllVideos} from '../../../actions/video_actions'
import videoIndex from './video_index'

const mapStateToProps = (state) => {
    
    return {videos: Object.values(state.entities.video)}
}

const mapDispatchToProps = (dispatch) => ({
    requestAllVideos: () => dispatch(requestAllVideos())
})

export default connect(mapStateToProps, mapDispatchToProps)(videoIndex); 