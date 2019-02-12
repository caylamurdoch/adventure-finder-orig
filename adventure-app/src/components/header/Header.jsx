import React, { Component } from 'react'
//import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header class="topnav">
                <a id="logo" href="/">Home</a>
                <a href="/">Profile</a>
                <a href="/">Explore</a>
                <a href="/">Search</a>
            </header>
        )
    }
}

export default Header;
