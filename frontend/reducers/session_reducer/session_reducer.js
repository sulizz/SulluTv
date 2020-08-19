import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../../actions/session_actions';
const _nullUser = {
    currentUser: null
};

const sessionReducer = (oldState = _nullUser, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        // debugger
        case RECEIVE_CURRENT_USER:
            const currentUser = action.user.id;
            return Object.assign({}, { currentUser });
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        default:
            return oldState;
    }
};

export default sessionReducer;