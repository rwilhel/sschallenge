import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchAddress: '',
    };

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(event) {
    this.setState({ searchAddress: event.target.value });
  }

  render() {
    const { searchAddress } = this.state;
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
            value={searchAddress}
            onChange={this.onSearchChange}
          />
        </form>
      </div>
    );
  }
}

export default App;
