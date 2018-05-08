import React, { Component } from 'react';
import Person from './Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: "Meg", age: 28 },
      { name: "Raj", age: 29 },
      { name: "Max", age: 30 }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Raj", age: 29 },
        { name: "Max", age: 32 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Meggie", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Max", age: 30 }
      ],
      showPersons: false
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div >
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            clicked={this.switchNameHandler.bind(this, 'Ed')}
            changed={this.nameChangedHandler}>
            Hobbies: Playing video games
        </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
        </div >
      );
    }

    return (
      <div className="App">
        <h1>I'm a React App!</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
