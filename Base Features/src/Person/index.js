import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.clicked}>I'm {props.name} and I'm {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} /> {/*two-way binding*/}
        </div>
    ) 
};

export default person;