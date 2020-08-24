import React from 'react';
import { AuthRoute, ProtectedRoute} from '../utils/route_utils'
import { Route, Switch } from 'react-router-dom';
import SignUpContainer from './session/signup_container'
import SignInFormContainer from './session/signin_container'
import TopHeader from './header/top_header_container'

import VideoIndexContainer from './Video/video_index/video_index_container'
import VideoFormContainer from './Video/video_form/video_form_container'
import MainDisplay from './Main/main_display'

const App = () => (
    <div>
        <div>
            <Route path ='/' component={TopHeader}/>
            <Route exact path='/' component={MainDisplay}/>
            <Switch>

                <ProtectedRoute path='/upload' component={VideoFormContainer}/>
                

                <AuthRoute path="/login" component={SignInFormContainer} /> 
                <AuthRoute path='/signup' component={SignUpContainer} />
                {/* <Route path='/' component={VideoIndexContainer} /> */}
            </Switch>
            
        
        </div>

    </div>
);

export default App;