import React, { Component } from 'react'
//import { Link } from 'react-router-dom';
import AddAdventure from './AddAdventure.jsx'
import './Feed.css';

class Feed extends Component {
    render() {
        return (
            <div>
                <AddAdventure />
                <div class="post">
                    <div>
                        <p>ADVENTURE HERE</p>
                    </div>
                </div>
                <div class="post">
                    <div>
                        <p>ADVENTURE HERE</p>
                    </div>
                </div>
                <div class="post">
                    <div>
                        <p>ADVENTURE HERE</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Feed;
