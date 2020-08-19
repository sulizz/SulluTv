import React from 'react';
import SignUpContainer from './session/signup_container'
import SignInFormContainer from './session/signin_container'
import { Route } from 'react-router-dom';
import TopHeader from './header/top_header_container'
import {AuthRoute} from '../utils/route_utils'


const App = () => (
    <div>
        <div>
            <Route path ='/' component={TopHeader}/>
            <AuthRoute path='/signup' component={SignUpContainer} />
            <AuthRoute path="/login" component={SignInFormContainer} />
        </div>
    </div>
);

export default App;