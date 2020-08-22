import { combineReducers } from "redux";
import sessionErrorsReducer from "../session_reducer/session_errors_reducer";
import videoErrorReducer from '../video_reducer/video_error_reducer';
const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    video: videoErrorReducer
});

export default errorsReducer;