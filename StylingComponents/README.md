# react-app
Personal notes and project on React.

## Inline style
Advantage -
- Scoped styling

Limitations -
- Cant use media queries
- Cant use pseudoselectors

To overcome the limitation, an alternative is style in css file.

Limitation of css file:
If we use button:hover, it will affect all the buttons globally, since all css files are compiled into one at the end.

## Setting styles dynamically


## How to define 2 className together?
Define 2 className inside css file, and use both of them together by this technique

> app.css
```
.red {
  color: red;
}

.bold {
  font-weight: bold;
}
```

> app.js
```
 let classes = ['red', 'bold'].join(' '); which gives "red bold"
 ```

 ## Setting className dynamically

 ```
 const classes = []; //since classes is an array, join it while binding it to <p className>

    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red','bold']
    }
```

``` 
<p className={classes.join(' ')}> 
```


## Adding & using radium

We cant use pseudoselectors in inline styles. And css files have limitations, you have to give id/className to button or else style will be applied globally to all the buttons.

However it would be better if we can use pseudoselectors & media queries in inline style, since then we can manipulate over it. And for enabling that use 3rd party package - `radium`

### Using radium as pseudoselectors
Steps:
- Import radium in the file where it will be used inside inline style
- At the end call radium as a function and wrap App in it. Just like high-order component which is injecting some added functionality!
- It can be used in both funct. as well as class components.
- All psudoselectors are supported, just wrap in quotation mark. Eg - ':hover'


### Using radium as media queries

We can use media queries in css files as usual, like:
```
@media (min-width) {
    .Person {
        width: 450px;
    }
}
```

> Steps: 

However, use media queries with radium, if you want to scope to a component or for changing it dynamically.
 const style = {
        '@media (min-width: 500px)': { //a valid js property name since its a string wrapped by quotes

        }
    }


Error: For using media queries/keyframes, wrap application in StyleRoot component
- Coorection: 
 - - import Radium, { StyleRoot } from 'radium'; in the main root component, i.e app.js
 - - wrap the entire app with <StyleRoot></StyleRoot>



## Enabling & using CSS modules

How to scope css file to a particular component's js file? So that whatever style is decribed there, is only applied on a particular component.

For enabling css modules, tweak the build config of project. 
- Git commit all the changes first
- Run `npm run eject` to get the config files, to make changes in the configuration.

