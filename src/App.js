import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">BITCOIN TRANSACTIONS</h1>
        </header>
        <p className="App-intro">
          Enter your Bitcoin address to see recent transactions!
        </p>
      </div>
    );
  }
}

export default App;
