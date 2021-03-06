import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from '../../actions/session_actions';

const sessionErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_ERRORS:
            // if (action && action.errors ) {
                return action.errors;
            // }
            // return [];
        
        case CLEAR_ERRORS:
            return [];

        case RECEIVE_CURRENT_USER:
            // when user successfully signs up or logs in
            // since successful, no errors. We can clear our errors array.
            // we can return [], an empty arr.
            return [];
        
        default:
            return oldState;
    }
};

export default sessionErrorsReducer;