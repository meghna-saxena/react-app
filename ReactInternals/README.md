## Diving Deeper into Components & React Internals

- Split an app into small components

## Stateless vs Stateful components

Stateless comp -
cost XY = () => (...)
Cant access state or lifecycle hooks
Access props via "props"
`props.XY`   

Stateful comp - 
class XY extends Component
Access state and lifecycle hooks
Access props via "this"
`this.state.XY` or `this.props.XY`

## Components Lifecycle
- When react creates component, means it get instantiated and rendered, it goes thru multiple lifecycle hooks -

Note: Only availabe in stateful components!

- constructor()
- componentWillMount()
- componentWillReceiveProps()
- shouldComponentUpdate()
- componentWillUpdate()
- componentDidUpdate()
- componentDidCatch()
- componentDidMount()
- render()
- componentWillUmount()


## Methods executed during lifecycle creation 

- constructor()
- componentWillMount()
- componentDidMount()
- render()

## Creation component lifecycle process
1. constructor(props) 
- default ES6 class feature
- react creates comp, intantiates it and pass any props that comp receives to its constructor
- when constructor is implemented, call super & pass on props - this calls construcotr of parent class & since we use this method in stateful component, parent class is Component object imported from react lib. We then can use `this.props` anwhere else inside the app.
- May intialize state in constructor
- Never cause side-effects. Eg: reaching out to web server. Response that come back, cause rerendering of app, hence performance issues. So, state becomes unpredictable


2. componentWillMount()
- This method exists for histroric reasons, don't really use it that often.
- Used for updating state, last min optimization
- Dont cause side-effect


3. render()
- Executing render method doesnt meanthat it access real DOM
- It gives idea to react, what should be rendered
- Prepare & structure jsx code
- Other sub-components are also defined here

4. `Render child components`

5. componentDidMount() 
- Tells that comp has been successfully mounted
- Can cause side-effects, and fetch some data
- Dont update state, cause it triggers re-render
- Dont immediately call setState() in componentDidMount() . It'll trigger an instant re-render process. It's fine to use it in some callback/ async code 

```
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
class App extends Component {
    state={data:'Starship'};
    getData() {
        setTimeout(() => {
            console.log('Our data is fetched');
            this.setState({data:'Jane'});
        }, 1500);
    }
    componentDidMount(){ this.getData(); }
    render() {
        const myContainer={maxWidth:'200px',margin:'10px auto',padding:'10px 0',
                backgroundColor:'#ddd',textAlign:'center',border:'1px solid #000'};
        return (
            <div style={myContainer}>{this.state.data}</div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
```

## Component Creation Lifecycle in Action
Props are called only in the constructor method in a class comp. Define super inside constructor.

When constructor method is not used, react automatically reaches super under the hood. - ES7 feature

componentDidMount executes AFTER render() and therefore after all child components were rendered first and then componentDidMount  method gets executed.

There also is one Lifecycle method which gets executed (when implemented) right before a Component is removed from the DOM: `componentWillUnmount()` .

Here's an Example:

> App.js (using class App extends Component )

```
state = {
    showUserComponent: true
};
 
removeUserHandler = () => {
    this.setState({showUserComponent: false});
}
 
render() {
    return (
        <div>
            {this.state.showUserComponent ? <User /> : null}
            <button onClick={this.removeUserHandler}>Remove User Component</button>
        </div>
    );
}
```

> User.js (using class User extends Component )


```
componentWillUnmount() {
    // Component is about to get removed => Perform any cleanup work here!
    console.log('I\'m about to be removed!');
}
```
In the above example, the User component is removed upon a button click (due to it being rendered conditionally and the condition result being changed to false ). This triggers componentWillUnmount()  to run in the User component right before the component is destroyed and removed from the DOM.


## Component updating lifecycle hooks
