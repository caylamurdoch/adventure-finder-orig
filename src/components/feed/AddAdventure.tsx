import React, { Component } from 'react'
//import { Link } from 'react-router-dom';
import './Feed.css';

class AddAdventure extends Component {
    render() {
        return (
            <a className="addAdventure" href="/">
                <div className="post">
                    <p>Add Adventure</p>
                </div>
            </a>
        )
    }
}

export default AddAdventure;
