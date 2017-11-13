import React from 'react';
import {Link} from 'react-router-dom';

export default class Home extends React.Component {
    increaseNumber = () => {
        this.setState({
            count: this.state.count+1
        })
    }

    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <div>
                <h1>Home</h1>

                <button onClick={this.increaseNumber}>Increase Number</button>
                {this.state.count}

                <br/>
                <Link to="/contact-us">Move to another link</Link>
            </div>
        );
    }
}
