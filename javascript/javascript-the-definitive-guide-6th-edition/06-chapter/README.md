# Capítulo 6 - Objetos (Notas)

## Introdução

* **Dica 01**: Objetos são mutáveis e manipulados por referência

```js

var x = {
  'some'  : 13,
  'value' : 31
};

var y = x;

console.log( 'x', x ); // x Object {some: 13, value: 31}
console.log( 'y', y ); // y Object {some: 13, value: 31}

// alterando y, reflete em x
y.some += y.value;

console.log( 'x', x ); // x Object {some: 44, value: 31}
console.log( 'y', y ); // y Object {some: 44, value: 31}

```