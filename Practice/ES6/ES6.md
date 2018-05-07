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
They are new next-generation javascript syntax for creating javascript functions.

> Normal javascript function syntax

```
function myFunc() {
    ...
}
```

> ES6 arrow funcion syntax

```
const myFunc = () => {
    ...
}
```

ES6 arrow functions can shorten the javscript function syntax, since it omits `function` keyword and it also solves a lot of issue of `this` keyword in javascript.
When you use `this` inside the arrow function, it will always keep its context and not change in runtime.

`this` keyword is important when we add function to objects.


## Practice time!
```
function printMyName(name) {
    console.log(name);
}
printMyName("Meggie"); //"Meggie"
```

> Rewritten as:
```
const printMyName = (name) => {
    console.log(name);
}
printMyName("Meggie"); //"Meggie"
```

Note: If we're passing only one argument, we can omit the parenthesis too to shorten the syntax. Isn't it wonderful?
```
const printMyName = name => {
  console.log(name);
}
printMyName("Meggie");
```


Similary, make another function -
```
const multiplyNum = num => {
    return num*2
}
console.log(multiplyNum(5)); //10
```

Extra notes: How to do condense the code more?
If there's only one line of code returning something, we can omit the curly braces{} and `return` keyword too, and bring the whole code in one line!

```
const multiplyNum = num => num*2;
console.log(multiplyNum(5)); //10
```


### Understanding `this`

At this point, with React we are dealing with methods, not normal functions. A method is a normal function that is inside (related to) a class or an object (object literal). 

A normal function doesn't have a `this`. For the most part, we won't be dealing with normal functions. Instead of normal functions, we will replace them with arrow functions. 

- When you click a button (a DOM event),  you want the class's `this` to continuously be retained by that class. 
- If the button (event) invokes a method, that method will capture the `this` from that class. You can use bind(),  but that's a different topic. 
- But, if instead of a method, you use an arrow function, the class's `this` will not be captured by that arrow function. This is because arrow functions don't understand what a this is. Arrow functions are a simplified function. 

EXTRA  NOTE: 

The special relationship between a method and a class (or an object), is their `this` relationship. 

Reminder: A normal function & an arrow function don't understand what a this is. 
`this` is like an electrical wire that connects a battery to an electrical device. You can remove the connection from one electrical device and connect that same battery & same wire to a different electrical device. 


### Exports/Imports
- Export default means you're exporting something from a given file.
- While making import statement in another file, it imports the default and only export of the file. Name is upto you!

Example:

> person.js
```
export default person;
```
> app.js
```import Person from person; 
or
import prs from person;
```

- If we write direct export statement/ named exports
> utility.js
```
export const ...
export const ...
```
>app.js

we're importing from 2 different constants so we use curly braces {} to explictely target specific things from the file. Here we have to write the correct name of the constant defined. Name is defined by export.
```
import {base} from utility.js
or import {base as myObject} from utility.js
or import {* as bundled} from utility.js //access with bundled.base etc.
```


### Classes
Classes are blueprints for objects, here javascript objects. A class is created with the `class` keyword and it can have properties and methods.
```
class Person {
    name = "meg", //property
    call = () => {} //method
}
```

- Methods are simply functions attached to classes. Properties are variables attached to class.

- A class is instantiated with a `new` keyword
```
const myPerson = new Person()
```

Called by constructor functions:
```
myPerson.call()
console.log(myPerson.name)
```

- Classes are covenient way of creating constructor functions, so we create js objects with classes as blueprints.

- Classes also support `inheritance` which means you have another class which you inherit from taking all its properties and methods and potentially adding new properties and methods. You might notice them from prototypes.

```
class Person extends Master
```

##### Practice time

In simplest form properties added by adding a constructor which is a default function/method you can add to any class which will be executed whenever you instantiate the class.
Inside the constructor funct., set propeties by `this.___` keyword

Also, add a method in the class to print the name referring to the name property created.

```
class Person {
  constructor() {
    this.name = "Meg"
  }
  
  printMyName() {
    console.log(this.name);
  }
}
```

Use this class to store an instance in a constant, and execute it.
```
const person = new Person();
person.printMyName();
```

##### Practice time - Inheritance

```
class Human {
  constructor() {
    this.gender = "female"
  }
  
  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    super();
    this.name = "Meg";
    this.gender = "male";
  }
  
  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGender();

```

Here, even though we're calling printGender(), it prints male, because it's extended by Persons. That means by inheritance we can access parent class' porperties and methods, and apply further changes on them.

 - Must call super constructor in derived class. If you're extending another class, and implementing constuctor method, then you have to add `super method` in the constructor. Its a keyword and it executes the parent constructor to initialize the parent class.
- When you extend a class, calling super within the subclass constructor calls the the constructor of the parent class to make sure it gets initialized and then can be referenced in the subclass.
- Classes are used by react to create components.
- Classes are blueprints of javascript obejcts and are very comparable to constructor fucntions, while inheritance is comparable to prototypes


### Classes, Properties & Methods
Next-gen javascript offers different syntax of initializing properties and methods
- Properties are like varibales attached to classes/objects
- Methods are like functions attached to classes/objects

> ES6 syntax for assigning properties in a class
- Setup properties inside constructor function
```
constructor() {
 this.myProperty: 'value'
}
```

More modern syntax which spares us from using constructor function, assign a property directly in class

> ES7 syntax for assigning properties in a class

```
myProperty: 'value'
```

Behind the scenes this will still be tranformed to use constructor functions


> ES6 syntax for creating methods in a class
```
myMethod() {...}
```

> ES7 syntax for creating methods in a class
```
myMethod = () => {...}

The great advantage of this syntax is since we're using arrow function as a property value here, there's no problem with `this` keyword
```

So rewritten the old example:

```
lass Human {
  gender = "female";

  printGender = () => {
    console.log(this.gender); //still using `this` keyword here when reaching out to property
  }
}

class Person extends Human {
     name = "Meg";
     gender = "male";
  }
  
  printMyName = () => {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGender();
```


### Spread and Rest Operators

Denoted by - ...

Depending upon its usage, they are called spread or rest operators

##### Spread Operator - used to split up array elements or object properties

Using spread operator on arrays:
```
Example:
const newArray = [...oldArray, 1, 2] 
//pulls out all the elements from the oldArray and add it to newArray[], and add more elements to it.
```

Better understanding - 

```
const numbers = [1,2,3,4];
const newNumbers = [...numbers, 5];

console.log(newNumbers); // [1, 2, 3, 4, 5]
```
```
// If we omit ...
const numbers = [1,2,3,4];
const newNumbers = [numbers, 5]; 
//without dots numbers will be included as one element inside the new element

console.log(newNumbers); //[[1, 2, 3, 4], 5]

```


Using spread operator on objects:

```
const newObject = {...oldObject, newProp: 5}
//created new object {} with newProp:5
//Pull out old object and their properties:values and add them to newObject{} 
```

Better understanding -

```
const person = {
  name: "Meg"
};

const newPerson = {...person, age:28};

console.log(newPerson); //[object Object] {age: 28, name: "Meg"}
```

##### Rest Operator
Same operator used differently.
Used to merge a list of funct arguments into an array, so that we can apply Array methods on it. We use it in a function argument list. They are used less often.

```
Example:
function sortArgs(...args) {
    return args.sort()
}
```

Better understanding -

```
const filter = (...args) => {
  return args.filter(el => el === 1) //array.filter() executes the func on every el of array 
}

console.log(filter(1,2,3)) //[1]
```


### Destructuring

Easily extract array elements or object properties and store them in variables. When you firt hear it, it may sound similar to what spread operator does.

Spread operator takes out all elements, all properties and distributes them to a new array or object

Destructuring allows to pull out single elements or properties and store them in variables for arrays and objects.

##### Array Destructuring

```
[a, b] = ['Raj', 'Meggie']
console.log(a) //Raj
conole.log(b) //Meggie

We are assigning the array on the right side to the variable a and b on left side.

```

Example:

```
const numbers = [1,2,3];
[num1, num2] = numbers;

console.log(num1, num2); // 1, 2
```

```
const numbers = [1,2,3];
[num1, ,num3] = numbers; //leave out one space

console.log(num1, num3); // 1, 3
```


##### Object Destructuring

```
{name} = {name:'Raj', age:28} 
console.log(name) //Raj
```


> FAQS: Why it makes sense to use array destructuring instead of array[0], array[1], array[2] ?

Short: It makes your code read and understand easier.

Let me make up an example in plain javascript:
Let's say you have an input field in a form, where you ask the user for a date represented as a string in the lets say German date format.

```
var input = "03.04.2018"
var splittedDate = input.split("."); // this gets you an array like [03,04,2018]
```
 now you have code where you want to do some stuff with the different parts of the date.

```
console.log("Date in some other time format: "+splittedDate[3]+"-"+splittedDate[2]+"-"+splittedDate[1])
```

- - If you use array destructuring, you get it much nicer since you don't have to remember the index anymore:

```
var [day,month,year] = input.split(".");
console.log("Date in some other time format: "+year+"-"+month+"-"+day)
```


Destructuring allows you to pull out all elements in one step - you can essentially turn an array into a list.

There are two use cases where this is especially useful:

1) You have a function that accepts a list of argument but not an array. You want to pass an array though.

Example: `Math.max(n1, n2, ...)` 

If you have an array (e.g. `myNumbers = [1, 2, 3] `), you can't pass it to max() like this: 

`Math.max(myNumbers) // this will fail `

Sure, you could do

`Math.max(myNumbers[0], myNumbers[1], myNumbers[2]) `

But that's extremely inflexible.

##### Spread to the rescue:

`Math.max(...myNumbers) `// yields 3 

2) You want to really clone an array.

In JavaScript, arrays and objects are reference types.

So moreNumbers = myNumbers  will NOT create a copy of the values but only of the pointer to the values.

So if you then do moreNumbers.push(4) , myNumbers  will also contain that new element.

There are a couple of "fixes" to copy an array by value ("immutably"). One is `slice()`.

`moreNumbers = myNumbers.slice()` // this creates a real copy, pushing to moreNumbers won't affect myNumbers 

But here again, spread can be used to quickly create a copy:

`moreNumbers = [...myNumbers]`



### Reference and Primitive Types

- Numbers, strings, booleans are primitive types. Whenever you reassign or store a variable in another variable, it will copy the value.

Numbers are primitive types. They create real copy of the values.

```
const num1 = 1;
const num2 = num1 //copy

console.log(num2); //1 (but its the copied value)
```


- Objects and arrays are reference types

```
//this object is stored in memory, and in the constant person
//we store a pointer referring to that place in memory
const person = {
  name: "Meggie"
};

const secondPerson = person; //and when we assign person to secondPerson, pointer gets copied

//we can check this case by changing person name after being copied
person.name = "Meg"

console.log(secondPerson); // Meg

//we copied the pointer(not the value) which is referring to same object in memory

```

### How to copy immutably? 
> By spread operator

```
const person = {
  name: "Meggie"
};

//creating real copy
const secondPerson = {
  ...person 
}; 

//we can check this case by changing person name after being copied
person.name = "Meg"

console.log(secondPerson); //Meggie

```


##### Why are the 'const' values able to be modified? 

Because arrays and objects are reference types in JavaScript. So the actual value stored in the constant is just a pointer, pointing to some place in memory where the array/ object value is stored.

That pointer is never changed and therefore stays constant. The value in memory is changed but since that's NOT the value the constant holds, this is not an issue.




### Refreshing Array functions

```
const numbers = [1,2,3];


const newNumbers = numbers.map((num) => {
  return num*2
})

console.log(numbers);
console.log(newNumbers);
```

> map() func gets executed on each el of an array and returns a new array