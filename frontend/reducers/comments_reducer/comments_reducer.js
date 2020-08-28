import { RECEIVE_COMMENT, REMOVE_COMMENT, RECEIVE_COMMENTS} from '../../actions/comment_actions'
import { RECEIVE_VIDEO } from '../../actions/video_actions'

const CommentsReducer = (oldState = {}, action) => { 
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_COMMENT:
            return Object.assign({}, oldState, { [action.comment.id]: action.comment })
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
