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
        <Search
          value={searchAddress}
          onChange={this.onSearchChange}
        />
        <Table
          results={results}
          pattern={searchAddress}
          onDismiss={this.onDismiss}
        />
      </div>
    );
  }
}

export default App;
