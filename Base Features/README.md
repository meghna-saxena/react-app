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
- Props are object with all the properties of a component. 
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