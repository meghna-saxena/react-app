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