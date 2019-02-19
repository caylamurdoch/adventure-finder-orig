import React, { Component } from 'react'
import './Feed.css';

class AddAdventure extends Component {
    render() {
        return (
            <a className="addAdventure" href="/home">
                <div className="post">
                    <p>Add Adventure</p>
                </div>
            </a>
        )
    }
}

export default AddAdventure;
