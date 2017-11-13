import React from 'react';
import {Route} from 'react-router';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import App from './components/App';

export const Routes = () =>
    <App>
        <Route exact path="/" component={Home}/>
        <Route path="/contact-us" component={ContactUs}/>
    </App>
