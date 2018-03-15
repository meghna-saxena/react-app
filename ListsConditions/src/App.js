import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  //New ES6+ enables to use state propert directly without enclosing it in constructor function
  state = {
    persons: [
      { id: 'abc', name: 'Max', age: 28 },
      { id: 'def', name: 'Mike', age: 25 },
      { id: 'ghi', name: 'Neil', age: 29 }
    ],
    showPersons: false
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

  deletePersonsHandler = (personIndex) => {
    // change state immutably
    // First approach -> const persons = this.state.persons.slice();
    //Another approach
    const persons = [...this.state.persons];
    // splice removes on element from the array
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
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
          {this.state.persons.map((person, index) => {
            return <Person
            click = {() => this.deletePersonsHandler(index)}
            name = {person.name}
            age = {person.age}
            key ={person.id} />
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
