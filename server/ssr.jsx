import React from "react";
import { renderToString } from "react-dom/server";
import { onPageLoad } from "meteor/server-render";
import { StaticRouter } from 'react-router';
import {Routes} from '../imports/ui/router';

const App = props => {
    return (
        <StaticRouter location={props.location.path} context={{}}>
            <Routes/>
        </StaticRouter>
    )
};

onPageLoad((sink) => {
    sink.renderIntoElementById('app', renderToString(<App location={sink.request.url} />));
});