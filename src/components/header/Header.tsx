import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Feed from '../feed/Feed';
import Welcome from '../pages/Welcome';
import './Header.css';

class Header extends Component {
    render() {

        const Profile = () => (
            <div>
                <h2>Profile</h2>
            </div>
        );

        const Explore = () => (
            <div>
                <h2>Explore</h2>
            </div>
        );

        const Search = () => (
            <div>
                <h2>Search</h2>
         </div>
        );
        
        return (
            <Router>
                <div>
                    <header className="topnav">
                        <span id="logo"><Link to="/home">Home</Link></span>
                        <Link to="/profile">Profile</Link>
                        <Link to="/explore">Explore</Link>
                        <Link to="/search">Search</Link>
                        <Link to="/"></Link>
                    </header>

                    <Route path="/home" component={Feed} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/explore" component={Explore} />
                    <Route path="/search" component={Search} />
                    <Route exact path="/" component={Welcome} />
                </div>
            </Router>
        );
    }
}

export default Header;
