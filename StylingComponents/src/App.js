import React, { Component } from 'react';
import './App.css';
// import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'abc', name: 'Max', age: 28 },
      { id: 'def', name: 'Mike', age: 25 },
      { id: 'ghi', name: 'Neil', age: 29 }
    ],
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonsHandler = (personIndex) => {
    const persons = [...this.state.persons];
    // splice removes on element from the array
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    //if doesShow is true, showPersons is false and vice versa
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
      // ':hover': {
      //   backgroundColor: 'lightgreen',
      //   color: 'black'
      // }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {/* outputting lists */}
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonsHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}
        </div>
      );

      // ================================
      // Setting style dynamically
      // ==================================
      style.backgroundColor = 'red';
      //we dont assign a new value, so style is still a const
      //but we assign a new value to its backgroundColor property

      // ================================
      // Using radium for pseudoselectors
      // ==================================

    //   style[':hover'] = {
    //     //since its a string, you cant use style.hover, you've to enclose it in sq. bracket
    //     backgroundColor: 'grey',
    //     color: 'white'
    //   }
    };

    // =======================================
    // Setting classNames dynamically
    // =======================================
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); //pushes red class on this array -> classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // array fo classes -> classes = ['red', 'bold']
    }

    return (
      // <StyleRoot>
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p className={classes.join(' ')}>Setting className dynamically</p>
        {/* it joins the array of strings  */}
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
      // </StyleRoot>
    );
  }
}

// export default Radium(App); //this is HOC, one comp. wrapping another comp to give extra functionality
export default App;