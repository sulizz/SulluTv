
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../../actions/session_actions';

//default state. 
//session reducer to keep track of current user
const _nullUser = {
    currentUser: null //key of currentUser and val of null when there is no current User
};


const sessionReducer = (oldState = _nullUser, action) => {
    Object.freeze(oldState); //stop from mutation of state. 

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // const currentUser = action.user.id;
            // return Object.assign({}, { currentUser });
            return Object.assign({}, {currentUser: action.user })

        case LOGOUT_CURRENT_USER:
            return _nullUser;
            
        default:
            return oldState;
    }
};

export default sessionReducer;