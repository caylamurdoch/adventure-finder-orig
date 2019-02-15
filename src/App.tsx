import React, { Component } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Feed from './components/feed/Feed';
//import ReactContent from './components/ReactContent'
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
