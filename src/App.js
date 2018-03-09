import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  //New ES6+ enables to use state propert directly without enclosing it in constructor function
  state = {
    persons: [
      { name:'Max', age:28 },
      { name:'Mike', age:25 },
      { name:'Neil', age:29 }
    ] 
  }

//Using arrow function to overcome the problem of 'this', which is called by event handler
  switchNameHandler = () => {
    console.log('Was clicked!');
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button> 
        {/* Dont pass parenthesis at the end of handler,otherwise it will immediately get rendered 
        when this portion gets mount on DOM. Instead we just need a to pass a reference. */}
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Reacing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>  
    );
  }
}

export default App;
