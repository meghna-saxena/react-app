import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <Person name="Max" age="28" />
        <Person name="Mike" age="25">My hobbies: Reacing</Person>
        <Person name="Neil" age="29" />
      </div>  
    );
  }
}

export default App;
