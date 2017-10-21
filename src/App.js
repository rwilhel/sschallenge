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
    const { searchAddress, results } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">BITCOIN TRANSACTIONS</h1>
        </header>
        <p className="App-intro">
          Enter your Bitcoin address to see recent transactions!
        </p>
        <Search
          value={searchAddress}
          onChange={this.onSearchChange}
        >
          Bitcoin Address:
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
      <div></div>
    );
  }
}

const Button = ({
  onClick,
  className = '',
  children,
}) =>
  <button
    onClick={onClick}
    className={className}
    type="button"
  >
    {children}
  </button>

export default App;
