import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/root_util';  //add protected route
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container'
import MainPage from './main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container.js';
import TweetsContainer from './tweets/tweets_container.js';
import ProfileContainer from './profile/profile_container';
import TweetComposeContainer from './tweets/compose_container';


const App = () => (
    <div>
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path="/" component={MainPage} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />

            <ProtectedRoute exact path="/tweets" component={TweetsContainer} />
            <ProtectedRoute exact path="/profile" component={ProfileContainer} />
            <ProtectedRoute exact path="/new_tweet" component={TweetComposeContainer} />

        </Switch>
    </div>
);

export default App;