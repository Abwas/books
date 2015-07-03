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
