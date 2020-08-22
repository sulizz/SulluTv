import React from 'react';
import {AuthRoute} from '../utils/route_utils'
import { Route } from 'react-router-dom';
import SignUpContainer from './session/signup_container'
import SignInFormContainer from './session/signin_container'
import TopHeader from './header/top_header_container'

import VideoIndexContainer from './Video/video_index/video_index_container'
import VideoDisplay from './Main/video_display';



const App = () => (
    <div>
        <div>
            {/* <Route path ='/' component={TopHeader}/> */}
            {/* <Route path='/' component={VideoDisplay} /> */}
            <Route path='/' component={VideoIndexContainer} />
            {/* <AuthRoute path='/signup' component={SignUpContainer} />
            <AuthRoute path="/login" component={SignInFormContainer} /> */}
        </div>

    </div>
);

export default App;