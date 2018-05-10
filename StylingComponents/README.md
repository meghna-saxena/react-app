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



