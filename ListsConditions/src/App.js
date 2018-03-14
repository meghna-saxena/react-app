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

    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {
          this.state.showPersons === true ?
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />

          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            //passing method references as props between components
            //MOST EFFECIENT WAY TO PASS DATA IS BY BINDING `this` to the specific function of this class
            click={this.switchNameHandler.bind(this, 'Max')}
            changed={this.nameChangeHandler}>
            My hobbies: Racing</Person>

          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
        </div> : null
        }
      </div>
    );
  }
}

export default App;
