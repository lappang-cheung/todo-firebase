import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/layout/Layout';
import Home from './containers/Home/Home';
import Todos from './containers/Todos/Todos';
import Login from './containers/Auth/Login/Login';
import SignUp from './containers/Auth/SignUp/SignUp';

const App = ({ loggedIn }) => {

    let routes;
    console.log(loggedIn)
    if(loggedIn) {
        routes = (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/todos' component={Todos} />
                <Redirect to='/' />
            </Switch>
        )
    } else {
        routes = (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={SignUp} />
                <Redirect to='/' />
            </Switch>
        )
    }

    return <Layout>{routes}</Layout>
}

const mapStateToProps = ({ firebase }) => ({
    loggedIn: firebase.auth.uid
})

export default connect(mapStateToProps)(App);