import { postUser, deleteSession, postSession } from '../utils/session_api_util';

//constants- the messages we send to the reducers
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS ='CLEAR_ERRORS';

//ACTION CREATORS
//returns a POJ with a type and paylod.

export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user   //takes in user as payload  {user: user}
});

// basically pass a msg on to reducer - logged the user out. 
export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})


// THUNK ACTION CREATORS 
//organized way to have state in check

//creates a new user - takes in a user obj from a form
//curry and  receive dispatch from thunk middleware - 
// once it receives the dispatch-- call our callback method with formUser that we received from form. 

//postUser is a ajax request that will return a promise to us
//if we sucessfully receive a user, we are going to dispatch our action creator invoking it. 
export const signup = formUser => dispatch => postUser(formUser)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)));

//takes in user obj from form and from thunk middleware it will receive dispatch
//upon sucessfull login -- we want the user obj we got from backend and dispatch receiveCurrentUser with the user we got back
export const login = formUser => dispatch => postSession(formUser)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)));

// export const loginDemo = formUser => dispatch => getDemoUser(formUser)
//     .then(user => dispatch(receiveCurrentUser(user)))
//     .fail(err => dispatch(receiveErrors(err.responseJSON)));
    
//upon sucessful deletetion, it will call a callback which dispatches logoutCurrentUser.
export const logout = () => dispatch => deleteSession()
    .then(() => dispatch(logoutCurrentUser()))
    .fail(err => dispatch(receiveErrors(err.responseJSON)));

