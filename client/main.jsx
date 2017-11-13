import React from 'react';
import ReactDOM from "react-dom";
import { Meteor } from 'meteor/meteor';
import { onPageLoad } from "meteor/server-render";
import {BrowserRouter} from 'react-router-dom';
import {Routes} from '../imports/ui/router';

const App = props =>
    <BrowserRouter>
        <Routes />
    </BrowserRouter>;

onPageLoad(sink => {
    ReactDOM.hydrate(
        <App />,
        document.getElementById("app")
    );
});