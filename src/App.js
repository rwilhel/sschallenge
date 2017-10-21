import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange() {
    this.setState({ searchAddress: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">BITCOIN TRANSACTIONS</h1>
        </header>
        <p className="App-intro">
          Enter your Bitcoin address to see recent transactions!
        </p>
        <form>
          <input
            type="text"
            onChange={this.onSearchChange}
          />
        </form>
      </div>
    );
  }
}

export default App;
