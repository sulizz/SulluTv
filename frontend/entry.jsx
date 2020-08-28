
import ReactDOM from 'react-dom'; 
import configureStore from './store/store';
import Root from './components/root';
import React from 'react';
// import {postLike} from './utils/like_api_utils'


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
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    // window.postLike = postLike

    //
    
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);
});

//Test
// user = {username: 'suliztest100', email: 'sulizTest100@gmail.com', password: "helloSuliz", Profile_pic_url:'55.google.com'}