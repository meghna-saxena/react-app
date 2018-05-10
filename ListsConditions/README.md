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

