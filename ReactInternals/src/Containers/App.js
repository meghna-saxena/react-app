import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons';
import ToggleButton from '../components/ToggleButton';

class App extends PureComponent {
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
  //understanding lifecycle methods

  //lifecycle methods for component creation/mounting

  componentWillMount() {
    console.log('[app.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[app.js] Inside componentDidMount');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] inside shouldComponentUpdate', nextProps, nextState);
  //   // return true;
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons
  // }

  // lifecycle methods for component update
  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] inside componentDidUpdate'); //newProps and newState are current props & current state at this time
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
        {/*this button is always true*/}
        <button onClick={() => this.setState({ showPersons: true })}>Show Persons</button>

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

