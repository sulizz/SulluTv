import { combineReducers } from "redux";
import usersReducer from "../users_reducer/users_reducer";
import videoReducer from "../video_reducer/video_reducer";
import likesReducer from '../likes_reducer/likes_reducer';
import CommentsReducer from '../comments_reducer/comments_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    video: videoReducer,
    comments: CommentsReducer
});

export default entitiesReducer;