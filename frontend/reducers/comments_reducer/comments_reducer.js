import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../../actions/comment_actions'
import { RECEIVE_VIDEO } from '../../actions/video_actions'

const CommentsReducer = (oldState = {}, action) => { 
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        
        case RECEIVE_COMMENT:
            return Object.assign({}, oldState, { [action.comment.id]: action.comment })
        
        case REMOVE_COMMENT: 
            delete newState[action.commentId];
            return newState

        case RECEIVE_VIDEO:
            if (action.video.comments) {
                return action.video.comments;
            } else {
                return {};
            }

        default:
            return oldState;
    }
};

export default CommentsReducer;
