import React, { Component } from 'react';
import Person from './Person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>I'm a React App!</h1>
        <Person />
        <Person />
        <Person />
      </div>
    );
  }
}

export default App;
