import React, { PureComponent } from 'react';
import Person from './Person';

class Persons extends PureComponent {
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

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js] inside componentWillReceiveProps', nextProps);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[UPDATE Persons.js] inside shouldComponentUpdate', nextProps, nextState);
    //     return nextProps.persons !== this.props.persons ||
    //     nextProps.changed !== this.props.changed ||
    //     nextProps.clicked !== this.props.clicked
    //     // return true;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('[UPDATE Persons.js] inside componentDidUpdate'); //newProps and newState are current props & current state at this time
    }

    render() {
        console.log('[Persons.js] inside render');

        return this.props.persons.map((person, index) => {
            return <Person
                clicked={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                position={index}
                key={person.id}
                authenticated={this.props.isAuthenticated}
                changed={(event) => this.props.changed(event, person.id)} />
        });
    }
}

export default Persons;
