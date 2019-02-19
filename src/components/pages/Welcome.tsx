import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Welcome.css';

class Welcome extends Component {
    state = {
        toHome: false,
    }
    goHome = () => {
        this.setState({
            toHome: true
        })
    }
    render() {
        if (this.state.toHome === true) {
            return <Redirect to='/home' />
        }

        return (
            <div className='welcome'>
                <h2>Welcome to Like a Local!</h2>
                <p>Search your local area for adventure inspiration.</p>
                <button className='btn' onClick={this.goHome}>Get Started</button>
            </div>
        )
    }
}

export default Welcome;
