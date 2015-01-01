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

## Object.create()

* Cria um novo objeto usando seu primeiro argumento como protótipo.

```js
var guitar = {
  "model"   : "MusicMan Majesty",
  "strings" : 7
};

var guitar2 = Object.create( guitar );
console.log( guitar2 ); // Object {model: "MusicMan Majesty", strings: 7}

var guitar3 = Object.create({ "model" : "Ibanez JP 100" });
console.log( guitar3 ); // Object {model: "Ibanez JP 100"}

console.log( guitar == guitar2 ); // false
console.log( guitar === guitar2 ); // false
```

* Para se criar um objeto sem protótipo, não herda nenhuma propriedade e nenhum método

```js
var guitarX = Object.create( null );
console.log( guitarX.toString() ); // TypeError: undefined is not a function
console.log( guitarX ); // Object {}
```

* Criando um objeto vazio com `Object.create()`:

```js
var guitar0 = Object.create( Object.prototype );
console.log( guitar0.toString() ); // [object Object]
console.log( guitar0 ); // Object {}
```
