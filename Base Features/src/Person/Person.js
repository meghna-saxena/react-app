import React from 'react';
import './Person.css';

//If we want to run some dynamic content as JS and not interpret as text, wrap it in {}
//props is an object which gives access to all the properties/attributes passed to the component

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old!</p>
            <p>{props.children}</p> 
           {/* props.children refers to any element b/w opening and closing tag of component */}
           <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
};

export default person;