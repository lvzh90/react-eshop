import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '@containers/Layout';

import Home from '@pages/Home';
import Login from '@pages/Login';
import ForgotPassword from '@pages/ForgotPassword';
import SendEmail from '@pages/SendEmail';
import NewPassword from '@pages/NewPassword';
import MyAccount from '@pages/MyAccount';
import CreateAccount from '@pages/CreateAccount';
import Checkout from '@pages/Checkout';
import Orders from '@pages/Orders';
import NotFound from '@pages/NotFound';

import AppContext from '@context/AppContext';

import useInitialState from '@hooks/useInitialState';

import '@styles/global.scss';

const App = () => {
    return (
        <AppContext.Provider value={useInitialState()}>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/forgot-password' component={ForgotPassword} />
                        <Route exact path="/send-email" component={SendEmail} />
                        <Route exact path="/new-password" component={NewPassword} />
                        <Route exact path="/account" component={MyAccount} />
                        <Route exact path="/signup" component={CreateAccount} />
                        <Route exact path="/checkout" component={Checkout} />
                        <Route exact path="/orders" component={Orders} />
                        <Route path='*' component={NotFound} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;