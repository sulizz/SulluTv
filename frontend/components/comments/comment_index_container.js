import {connect} from 'react-redux';
import { createComment, deleteComment} from '../../actions/comment_actions'
import { requestVideo } from '../../actions/video_actions'
import CommentIndex from './comment_index'
import { withRouter } from 'react-router-dom'

const MapStateToProps = (state, ownProps) => {
    
    let comments = Object.values(state.entities.comments);
    let currentUser = state.session.currentUser === null ? null : state.entities.users[state.session.currentUser.id];
    let video = state.entities.video[ownProps.match.params.videoId];

    return ({
        comments: comments,
        video: video,
        currentUser: currentUser
    })
}

const MapDispatchToProps = dispatch => {
    return ({
        createComment: comment => dispatch(createComment(comment)),
        deleteComment: commentId => dispatch(deleteComment(commentId)),
        requestVideo: (videoId) => dispatch(requestVideo(videoId))
    })
}

export default withRouter(connect(MapStateToProps, MapDispatchToProps)(CommentIndex));
