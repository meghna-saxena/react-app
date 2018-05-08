import React, { Component } from 'react';
import Person from './Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      {name: "Meg", age: 28},
      {name: "Raj", age: 29},
      {name: "Max", age: 30}  
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>I'm a React App!</h1>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobbies: Playing video games</Person>
        <Person nam={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
