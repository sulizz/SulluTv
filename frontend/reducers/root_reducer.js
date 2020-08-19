import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer/entities_reducer';
import sessionReducer from  './session_reducer/session_reducer';
import errorsReducer from './error_reducer/errors_reducer';

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
});

export default rootReducer;