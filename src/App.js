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
  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    //DON'T mutate/change state directly => this.state.persons[0].name = 'Shane';
    //use setState method by Component object imported by react

    this.setState({
      persons: [
        { name:newName, age:28 },
        { name:'John', age:25 },
        { name:'Karl', age:29 }   
      ] 
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        //
        <button onClick={() => this.switchNameHandler('Shane')}>Switch Name</button> 
        {/* Dont pass parenthesis at the end of handler,otherwise it will immediately get rendered 
        when this portion gets mount on DOM. Instead we just need a to pass a reference. */}

        {/* Even though parenthesis is used after handler's name, but this wont get executed immediately. */}
        {/* Instead it's a anonymous func. which gets executed on a click */}

        {/* Although a convenient syntax, but can be INEFFECIENT.
        React can rerender certain things. */}
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} />

        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        //passing method references as props between components
        //MOST EFFECIENT WAY TO PASS DATA IS BY BINDING `this` to the specific function of this class
        click={this.switchNameHandler.bind(this, 'Sherry')}>My hobbies: Reacing</Person>

        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} />
      </div>  
    );
  }
}

export default App;
