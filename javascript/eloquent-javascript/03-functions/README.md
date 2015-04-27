# 3. Functions

## Defining a function

A function definition is just a regular variable definition, where the value given to the variable, happens to be a function.

## Declaration notation

The function keyword can also be used at the start of a statement.

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

**Tip**:

Do not declare functions inside conditional loops!