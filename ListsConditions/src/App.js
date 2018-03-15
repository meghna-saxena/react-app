import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  //New ES6+ enables to use state propert directly without enclosing it in constructor function
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Mike', age: 25 },
      { name: 'Neil', age: 29 }
    ],
    showPersons: false
  }

  //Using arrow function to overcome the problem of 'this', which is called by event handler
  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    //DON'T mutate/change state directly => this.state.persons[0].name = 'Shane';
    //use setState method by Component object imported by react

    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'John', age: 25 },
        { name: 'Karl', age: 29 }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 25 },
        { name: 'Karl', age: 29 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    //if doesShow is true, showPersons is false and vice versa
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {/* outputting lists */}
          {this.state.persons.map(person => {
            return <Person
            name = {person.name}
            age = {person.age} />
          })}
        </div>
      );
    };

    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
      </div>
    );
  }
}

export default App;
