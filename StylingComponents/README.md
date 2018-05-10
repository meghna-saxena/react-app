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



## Enabling & using CSS modules for scoped styling

How to scope css file to a particular component's js file? So that whatever style is decribed there, is only applied on a particular component.

For enabling css modules, tweak the build config of project. 
- Git commit all the changes first
- Run `npm run eject` to get the config files, to make changes in the configuration.
- We get config and scripts folder. All under-the-hood features can be seen now.
- webpack is a bundling tool which applies transfromation & optimization on all files to bundle them together. So since webpack parse css code, we have to make changes there.


- - webpack.config.dev
        - Go to module -> scroll down till you see test: `/\.css$/` extension
        - Tweak the options under css loader
         - modules: true,
         - localIdentname: '[name]__[local]__[hash:base64:5]'
       
//this is imp for classes to get unique names per component, so that they dont override each other. Name stands for className, local stand for local component and hash... gives the unique hash code.

- Copy/paste the same changes in `webpack.config.prod` as well.

- Css modules converts css code to js object which can be used in the js file by importing them.

- Restart the development server whenever some changes are made in config files.


CSS Modules are a relatively new concept (you can dive super-deep into them here: https://github.com/css-modules/css-modules). With CSS modules, you can write normal CSS code and make sure, that it only applies to a given component.

It's not using magic for that, instead it'll simply automatically generate unique CSS class names for you. And by importing a JS object and assigning classes from there, you use these dynamically generated, unique names. So the imported JS object simply exposes some properties which hold the generated CSS class names as values.

Example:

> In Post.css File

```
.Post {
    color: red;
}
```

> In Post Component File
```
import classes from './Post.css';
 
const post = () => (
    <div className={classes.Post}>...</div>
);
```

Here, `classes.Post` refers to an automatically generated Post  property on the imported classes  object. That property will in the end simply hold a value like `Post__Post__ah5_1` .

So your .Post  class was automatically transformed to a different class (Post__Post__ah5_1 ) which is unique across the application. You also can't use it accidentally in other components because you don't know the generated string! You can only access it through the classes  object. And if you import the CSS file (in the same way) in another component, the classes  object there will hold a Post property which yields a different (!) CSS class name. Hence it's scoped to a given component.

By the way, if you somehow also want to define a global (i.e. un-transformed) CSS class in such a .css  file, you can prefix the selector with :global .

Example:

`:global .Post { ... } `

Now you can use className="Post"  anywhere in your app and receive that styling.