import { combineReducers } from "redux";
import usersReducer from "../users_reducer/users_reducer";
import videoReducer from "../video_reducer/video_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    video: videoReducer
});

export default entitiesReducer;