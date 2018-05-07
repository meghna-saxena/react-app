On codepen editor, I tested how React simplifies the code. Instead of repeating the same code in nomral JS file, we can use
reusable components and build a react app. 

Example: 

> HTML file
```
<div class="person">
    <h1>Meggie</h1>
    <p>Your Age: 28</p>
</div>

<div class="person">
    <h1>Raj</h1>
    <p>Your Age: 29</p>
</div>
```

> CSS file
```
.person {
    border: 1px solid #eee;
    box-shadow: 0 2px 2px #ccc;
    width: 200px;
    padding: 20px;
    display: inline-block;
    margin: 10px;
  }
```

> Ouput - 2 persons card displaying side-by-side

Now I incorporated React logic, instead of repeating the code: 

> JS file
Here, I used React so configure the settings first!

 - Add Javascript preprocessor - babel
 - Add react and reactDOM scripts, so that I can write react code which can be transpiled to JS by babel


> HTML file
```
<div id="App"></div>
```


> CSS file 
```
.person {
    border: 1px solid #eee;
    box-shadow: 0 2px 2px #ccc;
    width: 200px;
    padding: 20px;
    display: inline-block;
    margin: 10px;
  }
```


>JS file
```
function Person(props) {
    return (
      <div className="person">
        <h1>{props.name}</h1>
        <p>Your Age: {props.age}</p>
      </div> 
    );
  }
  
  var app = (
    <div>
      <Person name="Meggie" age="28" />
      <Person name="Raj" age="29" />
    </div>
  );
  
  ReactDOM.render(app, document.querySelector("#App"));
```  

> Ouput - 2 persons card displaying side-by-side
