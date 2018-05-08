import React, { Component } from 'react';
import Person from './Person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>I'm a React App!</h1>
        <Person name="Meg" age="28" />
        <Person name="Raj" age="29">Hobbies: Playing video games</Person>
        <Person nam="Mex" age="30" />
      </div>
    );
  }
}

export default App;
