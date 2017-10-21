import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

CONST PATH_BASE = 'https://blockchain.info/rawaddr/';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      result: null,
      searchAddress: '',
    };

    this.setSearchAddress = this.setSearchAddress.bind(this);
    this.fetchSearchAddress = this.setSearchAddress.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(event) {
    this.setState({ searchAddress: event.target.value });
  }

  render() {
    const { searchAddress, results } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">XBT TRANSACTIONS</h1>
        </header>
        <p className="App-intro">
          Enter your Bitcoin address to see recent transactions!
        </p>
        <Search
          value={searchAddress}
          onChange={this.onSearchChange}
        >
          XBT Address:
        </Search>
        <Table
          results={results}
          pattern={searchAddress}
          onDismiss={this.onDismiss}
        />
      </div>
    );
  }
}

const Search = ({ value, onChange, children }) =>
  <form>
    {children} <input
      type="text"
      value={value}
      onChange={onChange}
    />
  </form>

class Table extends Component {
  render() {

    return (
      <div className="table">
        <div className="table-row"></div>
          <span style={{ width: '40%' }}></span>
      </div>
    );
  }
}

const Button = ({ onClick, className = '', children }) =>
  <button
    onClick={onClick}
    className={className}
    type="button"
  >
    {children}
  </button>

export default App;
