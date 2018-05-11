# Rendering Lists & Conditional Content
Creating truly dynamic apps

## How to output dynamic list

Note: if/else cant be used inside JSX. Only simple statements can be written, no block statements. So use ternary expressions.

- - For outputting any dynamic content, wrap it in curly braces, even if thats a div containing list of components. Javascript expressions can be injected inside jsx with {}.


## Handling dynamic content - The javascript way!
- Use if/else statements inside render method.
- declare a let variable to null
- when render will be called it will check the condition and execute the variable respectively.
- make if statement that if condition is true - return the content <div> - assign this if condition to the variable created before.


## Outputting Lists
- Array of objects have to be converted so that react can understand it. So we use map() function to convert arrays.
- Map simply maps every element in a given array into something else. It does this by executing a method on every el in a given array. You pass the method to map function, it takes el of array as input.
- Map can also return an object which holds a single el of the array. 

```
 {this.state.persons.map(person => {
    return <Person name={person.name} age={person.age} />
})}
```

- - In this code, we're mapping an array into an array with jsx elements. Acommon pattern for outputting lists in react.


## List & state
How to manipulate the array - for deleting one item from the array, add 2nd argument in the map() - the index/id of the item.

make delete event handler and pass the id to it. Use splice method to remove 1 item from the given index/id of the array.



## Updating state immutably
Object and arrays are ref types.
so if you do `const persons = this.state.persons;`
you're getting a pointer to the original persons object, and thereby you mutate the original state when you slice or make modifications to it.

A good practise is to make a copy of original array/object before manipulating it. 

2 ways of doing it: 

1. Simple way of doing it is slice() method without args. It copies the array and returns a new one which is then stored in the constant variable

const persons = this.state.persons(slice);

2. Another alternative, es6 spread operator. Spreads out/pulls out/strips the old object elements and wrap it with new object/array

const persons = [...this.state.persons]; 


## Lists & keys

- Key property is imp when rendering a list.
- When mapping thru an array, the key helps react to update the list efficiently. Otherwise it will re-render the whole list instead of a particular list item.
- Key should be unique.


## Flexible Lists
Use event handler on input onChange and pass the event, person.id of the item, so that name change takes place only on that item.

Inside event handler method, assign the value of that passed person id to a new variable
`const person = this.state.persons.find()`

and use find() javascript method. The find() method returns the value of the first element in the array that satisfies the provided testing function. We can also use findIndex() to find the el in an array, `findIndex()` method returns the index of the first element in the array that satisfies the provided testing function.

Unlike map(), with these func we dont map this el into something new, instead we return true/false if that's the el satisfying the given conditons


const person = {...this.state.persons[personIndex]}; //since person is a object, update immutably

Another way: 
// const person = Object.assign({}, this.state.persons[personIndex]);

After changing the single person item, again copy the entire array of persons. Access the particular id of this new persons array and assign the changed person to it.

```
nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }
  ```

