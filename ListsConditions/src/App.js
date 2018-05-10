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

  deletePersonHandler = (personIndex) => {
    //manipulating data immutably
    // const persons = this.state.persons(slice);
    const persons = [...this.state.persons]; 
    persons.splice(personIndex, 1); //removes 1 el from the personIndex

    this.setState({persons: persons});
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
         {this.state.persons.map((person, index) => {
           return <Person
           clicked = {() => this.deletePersonHandler(index)} 
           name={person.name} 
           age={person.age} />
         })}
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
