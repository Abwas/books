# [Programming JavaScript Applications]()

## [Chapter 2. Functions](http://chimera.labs.oreilly.com/books/1234000000262/ch02.html)

**Guidelines to write better functions**:

- Don't Repeat Yourself (DRY)
- Do One Thing (DOT)
- Keep it Simple Stupid (KISS)
- Less is More

### Minimize Side Effects

- Classes of bugs: syntax errors and unintentional side effects
- Avoid side effects in functions - return a copy instead of the original
- pure function has no side effects - returns the same value given the same inputs
- make sure that your functions do not change anything outside itself
- write functions that way can help to separate concerns and reduce code duplications
- to manipulate DOM, you should have functions dedicated to it, such as view's `.render()` or DOM plug-in.

### Named function expressions

- Get benefits of code organization and conditional function definition without littering stack traces with anonymous functions

```js
var lightbulbAPI = {
  toggle: function toggle() {},
  getState: function getState() {},
  off: function off() {},
  on: function on() {},
  blink: function blink() {}
};
```

### Lambdas

- Lambda is a function that is used as data (as a parameter, a return value, like any other literal value)
- Are commonly used to:
 - perform operations on arguments
 - attach event handlers for DOM
 - pass in a callback function
 - wrap exisgint functions with additional functionality (function decorator)
 - take a function that requires multiple parameters, and return a function that requires fewer parameters (partial application and currying)
 - return a function from another function
- important point: lambdas are treated like data that can be passed around as inputs and outputs between functions, regardless of wheter or not they are named
- **first-class functions**: a function that can be used anywhere you would use a value
- **high-order functions**: a function that consume or return functions as data.
- lambdas get passed to and/or returned from high order functions
- a function might be both a lambda and a higher order function

```js
var sum = function sum() {
  var result = 0;

  [5, 5, 5].forEach(function addTo(number) { result += number; });

  return result;
};

test('Lambdas.', function () {
  equal(sum(), 15,
    'result should be 15.');
});
```

### Immediately Invoked Function Expressions

- used to create a new scope to encapsulate modules
- giver more flexibility and hability to hide state inside the function closure

```js
(function () {
  var isOn = false,
    toggle = function toggle() {
      isOn = !isOn;
      return isOn;
    },
    getState = function getState() {
      // Implementation...
    },
    off = function off() {
      // Implementation...
    },
    on = function on() {
      // Implementation...
    },
    blink = function blink() {
      // Implementation...
    },

    lightbulb = {
      toggle: toggle,
      getState: getState,
      off: off,
      on: on,
      blink: blink
    };

  test('Prototypes with IIFE.', function () {
    equal(lightbulb.toggle(), true,
      'Lightbulb turns on.');
    equal(lightbulb.toggle(), false,
      'Lightbulb turns off.');
  });
}());
```

### Method Context

ps: see more explanation [here](http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/)

### Function Scope

#### Hoisting

- JS builds its execution environment in two passes
  1. **Runtime environment**: first scans all variables and functions
    - function (declaration) avaiable
    - variables `undefined`
    - function expression behaves like variables
  2. **Execution pass**

#### Closure

ps: see more explanation [here](http://javascriptissexy.com/understand-javascript-closures-with-ease/)

### Method Design

#### Named parameters

```js
var newUser = createUser({
  name: 'Mike',
  showInSearch: false
});

function createUser(options) {
  return $.extend({}, userProto, options);
}
```

#### Function Polymorphism

- Is something that behaves differently based on context
- Polymorphic functions (PF) behave differently based on parameters you pass into them
- Parameters are stores in `arguments`
- `arguments` to array: **`[].slice.call( arguments, 0 )`**
- PF frequently need to examine the first argument in order to decide how to respond

```js
function morph(options) {
  var args = [].slice.call(arguments, 0),
    animals = 'turtles'; // Set a default

  if (typeof options === 'string') {
    animals = options;
    args.shift();
  }

  return('The pet store has ' + args + ' ' + animals + '.');
}
```

##### Method dispatch

- mechanism that determines what to do when an object receives a message
- *Dynamic dispatch* enables polymorphism, selection the appropiate method to run based on the parameters passed at runtime

```js
var methods = {
    init: function (args) {
      return 'initializing...';
    },
    hello: function (args) {
      return 'Hello, ' + args;
    },
    goodbye: function (args) {
      return 'Goodbye, cruel ' + args;
    }
  },
  greet = function greet(options) {
    var args = [].slice.call(arguments, 0),
      initialized = false,
      action = 'init'; // init will run by default

    if (typeof options === 'string' &&
        typeof methods[options] === 'function') {

      action = options;
      args.shift();
    }

    return methods[action](args);
  };

test('Dynamic dispatch', function () {
  var test1 = greet(),
    test2 = greet('hello', 'world!'),
    test3 = greet('goodbye', 'world!');
  
  equal(test2, 'Hello, world!',
    'Dispatched to hello method.');

  equal(test3, 'Goodbye, cruel world!',
    'Dispatched to goodbye method.');
});
```

#### Generics and Collection Polymorphism

- Generic programming style that attempts to express algorithms and data structures in a way that is type agnostic
- Generics do not require conditional logic branching
- employ parametric polymorphism, uses single branch of logic applied to generic type parameters
-  ad-hoc polymorphism relies on conditional branching
- Generic programming is particularly relevant to functional programming FP works best when a simple function vocabulary can express a wide range of functionality, regardless of type
- JavaScript supports two types of collections: objects and arrays. 
- Difference between an object and an array is that one is keyed with names and the other sequentially with numbers

```js
var toArray = function toArray(obj) {
  var arr = [],
    prop;

  for (prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      arr.push(prop);
    }
  }
  return arr;
};
```

```js
var randomItem = function randomItem(collection) {
  var arr = ({}.toString.call(collection) !== 
    '[object Array]')
      ? toArray(collection)
      : collection;
  return arr[Math.floor(arr.length * Math.random())];
};

test('randomItem()', function () {
  var obj = {
      a: 'a',
      b: 'b',
      c: 'c'
    },
    arr = ['a', 'b', 'c'];

  ok(obj.hasOwnProperty(randomItem(obj)),
    'randomItem works on Objects.');

  ok(obj.hasOwnProperty(randomItem(arr)),
    'randomItem works on Arrays.');
});
```

#### Method Chaining and Fluent APIs

- use the output of one method call as the context of the next method call
- fluent API is one that reads like natural language
- has its disadvantages
  - encourage to do too much in a single LOC (line of code)
  - encourage too much procedural code
  - can be difficulty to debug
  - can lead to unnecessary verbosity

### Functional Programming

- uses higher-order functions
- higher order function treats functions as data, either taking a function as an argument or returning a function as a result

#### Stateless Functions (aka Pure Functions)

- pure functions do not use or modify variables, objects, or arrays that were defined outside the function
- given the same inputs, return the same output
- stateless functions can often be run in parallel
- much easier to scale horizontally
- can be abstracted and shared as context-agnostic modules
- To maximize code reuse, try to make as many functions as possible both stateless and generic

```js
var safeRotate = function safeRotate(arr) {
  var newArray = arr.slice(0);
  newArray.push(newArray.shift());
  return newArray;
}

test('safeRotate', function () {
  var original = [1, 2, 3];

  deepEqual(safeRotate(original), [2,3,1],
    'safeRotate() should rotate array elements.');

  // Passes.
  deepEqual(original, [1,2,3],
    'Should not mutate external data.');
});
```

#### Partial Application and Currying

- **Partial application** wraps a function that takes multiple arguments and returns a function that takes fewer arguments
- If your function uses this, you shouldn't use .bind()
- **Currying** is the process of transforming a function that takes multiple arguments into a chain of functions, each of which takes no more than one argument

