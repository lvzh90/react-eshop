import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../Layout';
import Home from '../../components/Home';
import Login from '../../components/Login';
import NotFound from '../../components/NotFound';
import ForgotPassword from '../../components/ForgotPassword';
import '../../styles/global.scss';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/forgot-password' component={ForgotPassword} />
                    <Route path='*' component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;