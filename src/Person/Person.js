import React from 'react';

//If we want to run some dynamic content as JS and not interpret as text, wrap it in {}
//props is an object which gives access to all the properties/attributes passed to the component

const person = (props) => {
    return (
        <div>
            <p>I'm a {props.name} and I'm {props.age} years old!</p>
            <p>{props.children}</p> 
           {/* props.children refers to any element b/w opening and closing tag of component */}
        </div>
    );
};

export default person;