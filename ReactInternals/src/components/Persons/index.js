import React, { Component } from 'react';
import Person from './Person';

class Persons extends Component {
    constructor(props) {
        console.log('[Persons.js] inside constructor', props);
        super(props);
    }

    componentWillMount() {
        console.log('[Persons.js] Inside componentWillMount');
    }

    componentDidMount() {
        console.log('[Persons.js] Inside componentDidMount');
    }

    render() {
        console.log('[Persons.js] inside render');
        
        return this.props.persons.map((person, index) => {
            return <Person
                clicked={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)} />
        });
    }
}

export default Persons;
