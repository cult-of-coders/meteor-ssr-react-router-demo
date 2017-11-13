import React from 'react';
import {Link} from 'react-router-dom';
import Loadable from 'react-loadable';
import path from 'path';

const HeavyComponent = Loadable({
    loader: () => {
        return import('./HeavyComponent');
    },
    loading: () => <div>Loading</div>,
});

export default () => {
    return (
        <div>
            <h1>Contact Us Page</h1>
            <br/>

            {/* Avoid loading this super heavy component on the server, it may blow-up the RAM ?!*/}
            {Meteor.isClient
                ? <HeavyComponent />
                : <div>Loading</div>
            }

            <Link to="/">Go back home</Link>
        </div>
    )
}
