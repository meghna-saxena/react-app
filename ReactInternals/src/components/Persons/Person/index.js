import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] inside constructor', props);
         // create a ref to store the textInput DOM element
    
        // this.inputElement =  React.createRef();
    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount');
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount');
        // if (this.props.position === 0) {
        //     this.inputElement.current.focus();
        // };
    }

    render() {
        console.log('[Person.js] inside render');

        return (
            <div className={classes.Person}>
            {this.props.authenticated ? <p>I'm authenticated</p> : null}
                <p onClick={this.props.clicked}>I'm {this.props.name} and I'm {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input
                    // ref={this.inputElement}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name} />
            </div>
        );
    }
}

Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
    clicked: PropTypes.func
}

export default Person;