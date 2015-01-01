# Capítulo 6 - Objetos (Notas)

## Introdução

* Objetos são mutáveis e manipulados por referência

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

## Objeto Literal

* Um objeto literal cria e inicia um novo objeto cada vez que é avaliado.

```js

var a = { "name" : "Eric" };
var b = { "name" : "Eric" };

console.log( a == b ); // false
console.log( a === b ); // false

// cria por referência
var c = a;

console.log( a == c ); // true
console.log( a === c ); // true

```