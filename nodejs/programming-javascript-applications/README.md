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

