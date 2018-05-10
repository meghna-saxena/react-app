import React from 'react';
import Person from './Person';

//we can omit return statement if we're returning just one thing
const persons = (props) => props.persons.map((person, index) => {
    return <Person
        clicked={() => props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => props.changed(event, person.id)} />
});

export default persons;
