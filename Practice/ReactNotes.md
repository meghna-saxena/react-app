React is great for making highly reactive and super-fast web applications. Since its javascript which runs in browser, user dont need to wait for page reloads


### What is React?
- A javascript library for building UIs.
    - It build javascipt driven apps that run on the browser, and not on the server. We dont have to wait for the server response to get a new page or render smething, instead things happen instantly on the browser.

    - It builds UIs by the help of components.
    Eg - Header, Sidebar, Heading, Article
    We dont have to build a complex webpage as one bigger picture. The components are the building blocks which contain small pieces of code. Components are managebale and reusable. We write react components which are reusbale custom HTML element

### Why React?
- UI state becomes difficult to handle with plain vanilla JS
- Huge ecosystem, active community, better performance
- Highly scalable web apps
- Focus more on logic and business model

#### Alternatives of React 
- Angular and Vue JS
- jQuery is not really an alternative. It only works by traversing the DOM and target diff elements on DOM


#### Two kind of applications
##### Single-page application - 
- Only one single HTML page, contant is (re)rendered on the client. 
- If you manage the entire page with javascript, you never have to go back to the serer and reload the page. That's an amazing user expericne, because evrything happens instantly
- Only one ReactDom.render() call, becuase there is one root app compoentn which is mounted to the DOM which hosts all other react components.
- SPAs also allows us to use some external lib like react-router

#### Multi-page application - 
- Multiple HTML pages, content is rendered on the server
- ReactDOM.render() is called more often to render different component because all the components are not build in react, they are not connected with each other
since multi-page app doesn't have a root component.


## A react component is just a function

> ReactDOM.render picks up a container place in the HTML document where you want to render the app.

- ReactDOM.render() allows to render a javascript function as a component written by JSX to the real DOM
- React components can be configured dynamically
- Function is converted into component by react in reactDOM.render(< App/>) here app func is turned into app component

> With React, the server is only aware of React's index.html file. 
- When the user clicks on a link to navigate within an app (website), then React only loads new information into that index.html. 
- Since that index.html did not change, so a real page reload did not occur. React has techniques to make the user think a page actually reloaded. 
- Also,  if a webpage is made of 100 elements, then only one element is altered, instead of rendering the whole webpage,  React only re-renders that one element. 
- If some new data comes from the server,  only that one element is rerendered, not the whole webpage (not a reload).   


#FAQS
- How we render list?
- How we render content conditionally
- If you're rendering views from your backend, you're not building a SPA. That is okay, you can still use React to control parts of your rendered view.


## Next-gen Javascript (ES6)

### Let and Const
- let & const are different ways of creating variables.
- let - used to store variable values
- const - used to store constant values

> Example:

- let 
```
let myName = "Meg";
console.log(myName); //Meg

myName = "Raj";
console.log(myName);  //Raj
```

> variable is reassigned the value

- const 
```
const myName = "Meg";
console.log(myName); //Meg

myName = "Raj";
console.log(myName);  //Error
```
> const variable can't be reassigned another value


### Arrow functions
