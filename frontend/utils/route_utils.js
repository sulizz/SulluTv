import React from 'react';
import {connect } from 'react-redux';
import {Redirect, Route, withRouter} from 'react-router-dom';

//Get the different props all of this will rely on 

const mapStateToProps = state => ({
    //whether or not if the user is logged in or not
    loggedIn: Boolean(state.session.currentUser)
});

//protect auth routes log in sign up
//if user is logged in redirect them to home page 
//take in component, path we are looking for(which will be passed down), take in logged in
// <AuthRoute path ="" component={} />
const Auth = ({loggedIn, path, component: Component} ) => (
    <Route
        path = {path}
        render = {props => (
            //if we are logged in we want to redirect
            loggedIn ? < Redirect to="/" /> : <Component{...props} />
        )}
    />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));