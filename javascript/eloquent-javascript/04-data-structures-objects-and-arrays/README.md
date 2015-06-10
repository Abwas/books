# Chapter 4. Data Structures: Objects and Arrays

## Properties

> "Almost all JavaScript values have properties. The exceptions are null and undefined. If you try to access a property on one of these nonvalues, you get an error."

```js
null.length;
// → TypeError: Cannot read property 'length' of null
```

> "When using a dot, the part after the dot must be a valid variable name, and it directly names the property. When using square brackets, the expression between the brackets is evaluated to get the property name. Whereas value.x fetches the property of value named “x”, value[x] tries to evaluate the expression x and uses the result as the property name."

http://eloquentjavascript.net/04_data.html#p_sM+4QT8FKs