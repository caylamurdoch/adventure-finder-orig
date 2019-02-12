import React, { Component } from 'react';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import Feed from './components/feed/Feed.jsx';
//import ReactContent from './components/ReactContent.jsx'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Feed />
        <Footer />
      </div>
    );
  }
}

export default App;
