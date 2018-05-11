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
- `Render child components`


4. componentDidMount() 
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