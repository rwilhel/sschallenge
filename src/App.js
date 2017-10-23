import React, { Component } from 'react';
import './App.css';

const DEFAULT_QUERY = '1BoatSLRHtKNngkdXEeobR76b53LETtpyT';
const PATH_BASE = 'https://bitaps.com/api/address/transactions/';
const PATH_END = '/0/received/confirmed';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      result: null,
      searchAddress: DEFAULT_QUERY,
    };

    this.setSearchAddress = this.setSearchAddress.bind(this);
    this.fetchSearchAddress = this.fetchSearchAddress.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  setSearchAddress(result) {
    this.setState({ result });
  }

  fetchSearchAddress(searchAddress) {
    fetch(`${PATH_BASE}${searchAddress}${PATH_END}`)
      .then(response => response.json())
      .then(result => this.setSearchAddress(result))
      .catch(e => e);
  }

  componentDidMount() {
    const { searchAddress } = this.state;
    this.fetchSearchAddress(searchAddress);
  }

  onSearchChange(event) {
    this.setState({ searchAddress: event.target.value });
  }

  onSearchSubmit(event) {
    const { searchAddress } = this.state;
    this.fetchSearchAddress(searchAddress);
    event.preventDefault();
  }

  render() {
    const { searchAddress, result } = this.state;

    if (!result) { return null; }

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
          onSubmit={this.onSearchSubmit}
        >
          Search
        </Search>
        <Table
          results={result}
        />
      </div>
    );
  }
}

const Search = ({
  value,
  onChange,
  onSubmit,
  children
}) =>
  <form onSubmit={onSubmit}>
    <input
      type="text"
      value={value}
      onChange={onChange}
    />
    <button type="submit">
      {children}
    </button>
  </form>

const Table = ({ results }) =>
    <div className="table">
      <div className="table-row header-row">
        <span className="header" style={{ width: '50%' }}>
          TIMESTAMP
        </span>
        <span className="header" style={{ width: '50%' }}>
          AMOUNT
        </span>
      </div>
      { results.map((tx, i) => (
        <div key={i} className="table-row">
          <span style={{ width: '50%' }}>
            {tx[0]}
          </span>
          <span style={{ width: '50%' }}>
            {tx[7]}
          </span>
        </div>
      ))}
    </div>

const Button = ({ onClick, className = '', children }) =>
  <button
    onClick={onClick}
    className={className}
    type="button"
  >
    {children}
  </button>

export default App;
