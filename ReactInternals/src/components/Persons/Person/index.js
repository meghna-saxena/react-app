import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component {
    constructor(props) {
        console.log('[Person.js] inside constructor', props);
        super(props);
    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount');
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount');
    }

    render() {
        console.log('[Person.js] inside render');

        return (
            <div className={classes.Person}>
                <p onClick={this.props.clicked}>I'm {this.props.name} and I'm {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        );
    }
}

export default Person;