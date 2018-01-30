import React, { Component } from 'react';
import GiftsWrapper from './GiftsWrapper';
import logo from './logo.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">It's Christmas !</h1>
        </header>

        <img src="https://media.giphy.com/media/JltOMwYmi0VrO/giphy.gif" />

        <GiftsWrapper />
      </div>
    );
  }
}

export default App;
