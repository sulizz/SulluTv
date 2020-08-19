
import ReactDOM from 'react-dom'; 
import configureStore from './store/store';
import Root from './components/root';
import React from 'react';

import { postUser, postSession, deleteSession } from './utils/session_api_util'
import {signup, login, logout} from './actions/session_actions'

document.addEventListener('DOMContentLoaded', () => {
    
    let store;
    let preloadedState = undefined;

    if (window.currentUser) {
        preloadedState = {
            entities: {
                users: {
                    [currentUser.id]: currentUser
                }
            },
            session: {
                currentUser:window.currentUser     //window.currentUser.id
            }
        };
        store = configureStore(preloadedState);
    } else {
        store = configureStore();
    }
    
    
    
    //TEST 
    window.postUser = postUser;
    window.postSession = postSession;
    window.deleteSession = deleteSession;
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);
});

//Test
// user = {username: 'suliztest100', email: 'sulizTest100@gmail.com', password: "helloSuliz", Profile_pic_url:'55.google.com'}