import React from 'react';
import {Route, Redirect, IndexRoute} from 'react-router';
import App from './App';
import Delivery from '../components/delivery/delivery'
import FAQ from '../components/faq/faq'
import Help from '../components/help/help'
import StartPage from '../components/StartPage';
import NotFound from '../components/notFound/notFound';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={StartPage}/>
        <Route path="/delivery" component={Delivery}/>
        <Route path="/faq" component={FAQ}/>
        <Route path="/help" component={Help}/>
        <Route path="404" component={NotFound}/>
        <Redirect from="*" to="404"/>
    </Route>
);
