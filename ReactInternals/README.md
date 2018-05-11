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


## Component Updating Lifecycle Hooks
Differentiate b/w updates triggered by parent, so changing props. And internally triggered updates, so by changing state.

### Component Lifecycle - Update (triggered by parent, by props)

1. componentWillReceiveProps(nextProps)
- Sync component's state (if any) with the props received from parent.
- Dont cause side-effects, otherwsie causes rerendering and performance issues. 

2. shouldComponentUpdate(nextProps, nextState)
- Receive 2 args, the props and state which triggered this update.
- This method can cancel the updating process! Because if return true the updating continues, if return false, updating stops, you never return anything!
- If you allow update, the next lifecycle continues..

3. componentWillUpdate(nextProps, nextState)
- Again, can sync state to props

```
class PrintInColor extends Component {
    backgroundColor = 'blue' // some default
    
    componentWillUpdate(nextProps) {
        this.backgroundColor = nextProps.bgColor // passed via <PrintInColor bgColor={'red'} />
    }
 
    render() {
        return (
            <div style={this.backgroundColor}><p>Hello there</p></div>
        );
    }
}
```

- Dont cause side-effects
- Might be a better place to sync state to props bause unlike componentWillReceiveProps, here you know that you're continuing to update

4. render()
- Renders JSX- tells react  what the result will be after the update  
- Prepare and structure JSX code

5. Update child component props

6. componentDidUpdate()
- Can cause side-effect, just like in componentDidMount()
- Dont update state - triggers rerendering


Note: we write these methods like  componentDidUpdate() {..} and not  componentDidUpdate = () => {...}, since these methods are not called for DOM events, and therefore no `this` issue


### Component Lifecycle - Update (triggered by state changes/ internal change)
- By setState basically

1. shouldComponentUpdate(nextProps, nextState)
- May cancel updating process!
- Decide whether to continue or not
- Dont cause side effects

2. componentWillUpdate()
- Sync state to props
- Cause side-effects

3. render() 
- Prepare and structure JSX

4. Update child components

5. componentDidUpdate()
- Can cause side-effects
- Dont update state - triggers re-rendering


Note: Update triggered internally is similar to update triggered by parent, the only difference is there's no  componentWillReceiveProps(nextProps) lifecycle method here.


## How shouldComponentUpdate(nextProps, nextState) is important?
It renders every time something changes in your app. But when you dont change state, and then too just by clicking a button, a rendering occurs whch cause performance issues.
Therefore make condtion checks, so that render doesnt occur unnecessarily.

### Performance Gains with PureComponent
For putting checks, we can avoid shouldComponentUpdate(nextProps, nextState), and `import {PureComponent}`, a special object from react lib, but it has shouldComponentUpdate check already built-in. So it will automatically compare props and state for changes and update only when it sees some changes.

https://reactjs.org/docs/react-api.html#reactpurecomponent 
React.PureComponent’s shouldComponentUpdate() only shallowly compares the objects. 
If these contain complex data structures, it may produce false-negatives for deeper differences. 
Only extend PureComponent when you expect to have simple props and state