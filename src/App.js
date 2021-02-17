import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/layout/Layout';
import Todos from './containers/Todos/Todos';
import Login from './containers/Auth/Login/Login';
import SignUp from './containers/Auth/SignUp/SignUp';
import Logout from './containers/Auth/Logout/Logout';
import verifyEmail from './containers/Auth/Verify/VerifyEmail';
import RecoverPassword from './containers/Auth/RecoverPassword/RecoverPassword';
import Profile from './containers/Auth/Profile/Profile';
import firebase from './Firebase/Firebase'

const App = ({ loggedIn, emailVerified }) => {

    useEffect(() => {
        console.log('i have ran')
        console.log(window.location.href)
        confirmSignIn()
    }, [])

    const confirmSignIn = () => {
        if(firebase.auth().isSignInWithEmailLink(window.location.href)) {
            let email = window.localStorage.getItem('emailForSignIn')
            if(!email){
                email = window.prompt('Please provide your email email for confirmation')
            }
            firebase.auth().signInWithEmailLink(email, window.location.href)
            .then((result) => {
                window.localStorage.removeItem('emailForSignIn')
                console.log(result)
            })
            .catch(err => {
                console.log(err)
            })
        }
    }

    let routes;

    console.log(loggedIn)
    console.log(emailVerified)

    if(loggedIn && !emailVerified ) {
        routes = (
            <Switch>
                <Route exact path='/verify-email' component={verifyEmail} />
                <Route exact path='/logout' component={Logout} />
                <Redirect to='/verify-email' />
            </Switch>
        )
    }

    else if(loggedIn && emailVerified) {
        routes = (
            <Switch>
                <Route exact path='/' component={Todos} />
                <Route exact path='/profile' component={Profile} />
                <Route exact path='/logout' component={Logout} />
                <Redirect to='/' />
            </Switch>
        )
    } else {
        routes = (
            <Switch>
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={SignUp} />
                <Route exact path='/recover' component={RecoverPassword} />
                {
                    // Redirect check for logout
                    window.location.href.includes("/logout") && <Redirect to='/login' />
                }
            </Switch>
        )
    }

    return <Layout>{routes}</Layout>
}

const mapStateToProps = ({ firebase }) => ({
    loggedIn: firebase.auth.uid,
    emailVerified: firebase.auth.emailVerified
})

export default connect(mapStateToProps)(App);