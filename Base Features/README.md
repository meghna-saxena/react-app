# Base-Features
 
## Using a workflow

### Why?
- Recommended for SPAs and multi-page apps (MPAs)
- Optimize code -> increases performance of app
- Use next-gen JS features
- Be more productive -> by including features like CSS autoprefixing
* CSS prefixes are used to achieve boradest possible borwser support for CSS features. But manually adding them is cumbersome.
- Linting tool


### How?
- Use dependency management tool. Eg: npm or yarn
- Use bundler. Recommended: Webpack. It doesnt just bundles all the files, but also allows to apply couple of other build steps before it does bundling. Eg: Compilation of next-gen JS.
- Use compiler (next-gen javascript). Babel + presets
- Use development server

## What does extends Component mean?
The class uses the extends keyword to inherit the class/object from react library to access its properties and methods.

```
class App extends Component {
  render() {
    return (
      <div>
        <h1>I'm a React App</h1>
      </div>
    );
  }
}

export default App;
```

## Understanding JSX
- We need to import react in each fie where we're returning JSX. Since JSX gets transpiled to React.createElement() at the end.
- Usually React.createElement() takes 3 arguments: 
1. Element we want to render on DOM. Eg: <div> or some component
2. Second arg is configuration for it. Optional, so we can pass null, if we dont want to configure it.
3. Third arg is any amt of children. We can have multiple arg separated by commas. Children means what's nested inside <div>

> See how JSX gets compiled into JS

```
class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <h1>I'm a React App!</h1>
    //   </div>
    // );

    //  return React.createElement('div', null, 'h1', 'I\'m a React App!'); //here h1 is interpreted as text, not as element
    
    // return React.createElement('div', null, React.createElement('h1', null, 'I\'m a React App!')); 
    //text gets rendered properly but no css class applied

     return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m a React App!')); 
     //correctly rendered
  }
}

export default App;
```


## JSX restrictions
- use className
- When returning JSX inside a component, JSX expression must have one root element. Wrap everything inside one root element i.e <div>


## Functional Components
- A component is just a func returning some JSX

## Components and JSX Cheatsheet
Components are the core building block of React apps. Actually, React really is just a library for creating components in its core.

A typical React app therefore could be depicted as a component tree - having one root component ("App") and then an potentially infinite amount of nested child components.

Each component needs to return/ render some JSX code - it defines which HTML code React should render to the real DOM in the end.

JSX is NOT HTML but it looks a lot like it. Differences can be seen when looking closely though (for example className in JSX vs class in "normal HTML"). JSX is just syntactic sugar for JavaScript, allowing you to write HTMLish code instead of nested React.createElement(...) calls.

When creating components, you have the choice between two different ways:

1. Functional components (also referred to as "presentational", "dumb" or "stateless" components - more about this later in the course) => 
`const cmp = () => { return <div>some JSX</div> }` (using ES6 arrow functions as shown here is recommended but optional)

2. Class-based components (also referred to as "containers", "smart" or "stateful" components) => 
`class Cmp extends Component { render () { return <div>some JSX</div> } }`


Extra Note: For rendering some dynamic content in JSX which you want to run as javascript code and not interpret as text, wrap wit curly braces {}.



## Working with props
- Props are objects giving access to all the properties/attributes passed to a component. 
- In func comp, use props._ and in clss comp use this.props._


> New way of using props inside func component

##ES6 deconstruct syntax with props
```
export const Person = ({name, age}) => {
  return (
    <div>
      <p>Nome: {name}</p>
      <p>Idade: {age}</p>
    </div>
)};
```
You can even do it shorter:

```
export const Person = ({name, age}) => (
  <div> 
    <p>Nome: {name}</p> 
    <p>Idade: {age}</p> 
  </div> 
);
```

`props.children` refers to any properties/plain text between opening and closing tags of component.

```
 {/* <p>{props.children}</p> */} 
 
Since on inspecting elements, we see that for other components also props.children gets applied, but they have empty paragraphs, so rewritten as:

{props.children ? <p>{props.children}</p> : null}  
``` 


## Understanding `state`

- Sometimes you dont' want information from outside, but inside and also manage it internally, so State comes into play!

Class has property. Think of property as variable of class.
`Eg: property = "value"`

Funct components dont have properties. There you have to declare a const varibale first.
`Eg: const property = "value"`

- All class components which extends {Component} of react lib have access to special property called state.

> Props are set and passed from outside

- Steps:
- - Initialize state by assigning a value which is a javascript object
- - Render the state's properties by this.state__. `this` refers to class
- - State update leads to rendering of DOM


## Props and State  
They are CORE concepts of React. Actually, only changes in props  and/ or state  trigger React to re-render your components and potentially update the DOM in the browser (a detailed look at how React checks whether to really touch the real DOM is provided in section 6).

### Props
props  allow you to pass data from a parent (wrapping) component to a child (embedded) component.

Example:

> AllPosts Component:
```
const posts = () => {
    return (
        <div>
            <Post title="My first Post" />
        </div>
    );
}
```
Here, `title` is the custom property (prop ) set up on the custom Post  component. We basically replicate the default HTML attribute behavior we already know (e.g. <input type="text">  informs the browser about how to handle that input).

> Post Component:
```
const post = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    );
}
```
The Post  component receives the props  argument. You can of course name this argument whatever you want - it's your function definition, React doesn't care! But React will pass one argument to your component function => An object, which contains all properties you set up on <Post ... /> .

`{props.title}`  then dynamically outputs the title  property of the props  object - which is available since we set the title  property inside AllPosts  component (see above).



### State

Whilst props allow you to pass data down the component tree (and hence trigger an UI update), state is used to change the component, well, state from within. Changes to state also trigger an UI update.

Example:

> NewPost Component:
```
class NewPost extends Component { // state can only be accessed in class-based components!
    state = {
        counter: 1
    };  
 
    render () { // Needs to be implemented in class-based components! Needs to return some JSX!
        return (
            <div>{this.state.counter}</div>
        );
    }
}
```
Here, the NewPost  component contains `state`. Only class-based components can define and use state . You can of course pass the state  down to functional components, but these then can't directly edit it.

state  simply is a property of the component class, you have to call it state  though - the name is not optional. You can then access it via `this.state` in your class JSX code (which you return in the required render()  method).

Whenever state  changes, the component will re-render and reflect the new state. The difference to props is, that this happens within one and the same component - you don't receive new data (props ) from outside!



## Handling events with methods

- Upon trigger of an event, execute a method of class. You usually name the method with 'handler' word at the end since it signifies that you're not actively calling the method, but assigning as an event handler.

Property which holds a funct that gets executed

```
switchNameHandler = () => {

} 
```

> Dont add parenthesis at the end of the eventhandler when you call it on onClick, otherwise it will get executed immediately once react renders to the DOM.
> Only pass a reference, by using `this.switchEventHandler`

If you dont use arrow func in creating event hadnler, you'll run into error if you try to use `this` because `this` will not refer to the class at run time.


Note: 
Arrow functions do not understand what `this` is. Therefore, arrow functions do not redirect the (relative) class' `this`. 

Method declarations (a normal / regular function) do understand `this`. Example:  DOM events like a button click, a method declaration will redirect (capture) the (relative) class' this. So, with method declarations, `bind(this)` must be used to fix the problem. 

If an arrow function can be used, (almost always) it's the better choice.   


## setState
- Updates state immuatably and re-render the DOM


### How would we pass the argument to the handler if we cannot use "()" onClick?
 - Two options:

1) <div onClick={this.myHandler.bind(this, 'your argument')}> 

2) <div onClick={() => this.myHandler('your argument')}> 
here onClick calls anonymous funct which will return the result of this method getting executed
//However its an inefficient syntax, since react can rerender certain things, so use bind(this) manner more.


## Functional comp vs. class comp

- Functional comp are function returning some jsx.
- They only render something on DOM
- They are dynamic because of props   
- You can add some logic prior to calling return
- Dont manipulate app state
- listen to event here and execute the method inside container


- State should only be changed in containers.
- Containers are components which contains some part of app state


## Adding two-way binding
Chnaging the name dynamically

See the current value of the name in the input right from the start. When we change it, it should propogate that change so that state can get updated.

 <input type="text" onChange={props.changed} value={props.name} /> //value attribut does the two-way binding


 ## Styling components
 - Either use css files whose access is on global level or use inline styles which are scoped to that particular component
 - Hovering styles are not done in inline styles