import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons';
import ToggleButton from '../components/ToggleButton';

class App extends Component {
  constructor(props) {
    console.log('[App.js] inside constructor', props);
    super(props);
    this.state = {
      persons: [
        { id: 'asfa1', name: 'Meggie', age: 28 },
        { id: 'vasdf1', name: 'Raj', age: 29 },
        { id: 'asdf11', name: 'Max', age: 30 }
      ],
      showPersons: false
    }
  }

  componentWillMount() {
    console.log('[app.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[app.js] Inside componentDidMount');
  }
  
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    console.log('[App.js] inside render');
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />
    }

    return (
      <div className={classes.App}>
        <ToggleButton
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;

