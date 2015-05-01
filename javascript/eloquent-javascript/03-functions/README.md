# 3. Functions

## Defining a function

A function definition is just a regular variable definition, where the value given to the variable, happens to be a function.

## Declaration notation

The `function` keyword can also be used at the start of a statement.

```js
function square(x) {
  return x * x;
}
```

**This is a function declaration**!

A subtlety about function declaration:

```js
console.log("The future says:", future());

function future() {
  return "We STILL have no flying cars.";
}
```
> "This code works, even though the function is defined below the code that uses it. This is because function declarations are not part of the regular top-to-bottom flow of control. They are conceptually moved to the top of their scope and can be used by all the code in that scope. This is sometimes useful because it gives us the freedom to order code in a way that seems meaningful, without worrying about having to define all functions above their first use."

**Tip**: Do not declare functions inside conditional loops!

## Closure

> The ability to treat functions as values, combined with the fact that local variables are “re-created” every time a function is called.
>
> This feature—being able to reference a specific instance of local variables in an enclosing function—is called closure. A function that “closes over” some local variables is called a closure.

```js
// Closure
function multiplier( factor ) {
  return function( number ) {
    return factor * number;
  }
}

var twice = multiplier( 2 );
console.log( twice );
console.log( twice( 6.5 )); // 13
```

## Recursion

> A function that calls itself is called **recursive**. Recursion allows some functions to be written in a different style.

```js
// Recursion - power
function power( base, exponent ) {
  
  if ( exponent === 0 ) {
    return 1;
  }
  
  return base * power( base, exponent - 1 );
  
}

console.log( power( 5, 3 )); //125
```

```js
// Recursion - Factorial
function factorial( number ) {
  
  if ( number === 1 ) {
    return 1;
  }
  
  return number * factorial( number - 1 );
  
}

console.log( factorial( 5 )); // 120
```

Awesome example:

```js
function findSolution(target) {
  function find(start, history) {
    if (start == target)
      return history;
    else if (start > target)
      return null;
    else
      return find(start + 5, "(" + history + " + 5)") ||
             find(start * 3, "(" + history + " * 3)");
  }
  return find(1, "1");
}

console.log(findSolution(13)); // "(((1 * 3) + 5) + 5)"
```