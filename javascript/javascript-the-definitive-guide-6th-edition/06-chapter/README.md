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
console.log( guitarX.toString()); // TypeError: undefined is not a function
console.log( guitarX ); // Object {}
```

* Criando um objeto vazio com `Object.create()`:

```js
var guitar0 = Object.create( Object.prototype );
console.log( guitar0.toString()); // [object Object]
console.log( guitar0 ); // Object {}
```

## Consultando e configurando propriedades

Podemos consultar propriedades das seguintes formas:

```js
var obj = {
  'some'  : 13,
  'value' : 31
};

// Notação por ponto
obj.some; // 13

// Notação por colchete
obj[ 'value' ] // 31

```

Para atribuir novos valores as propriedades, usamos a mesma notação mostrada anteriormente, mas com uma operação de atribuição em seguida.

```js
obj.some = 39;
obj.some; // 39

obj[ 'value' ] = 93;
obj[ 'value' ] // 93
```

## Objetos como arrays associativos

Objetos em JavaScript são arrays associativos (ou hash, mapa ou dicionário).

Usamos a notação por ponto quando conhecemos qual propriedade iremos acessar, e a notação por colchetes quando descobrimos o nome da propriedade em tempo de execução do programa.

Abaixo iremos criar um programa que deve:

1. Adicionar propriedades em um objeto.
1. Passar via parâmetro na função que irá criar as propriedades, o nome do objeto, nome da propriedade e valor dessa propriedade.
1. Imprimir um objeto previamente criado. Caso não seja um objeto, informar.

```js
function addProperty( object, property, value ) {
  
  if ( typeof object === 'object' ) {
    
    object[ property ] = value;
    
  }  
  
  return;
  
}

function printObject( object ) {
  
  if ( typeof object === 'object' && !( object.constructor === Array )) {
    
    console.log( JSON.stringify( object, null, 2 ));
    
  } else {
    
    console.log( 'This is not an object!' );
    
  }
  
}

// defining properties
var obj = {};
var arr = [];

// Testing the method
addProperty( obj, 'some', 13 );
printObject( obj );

addProperty( arr, 'other', 31 );
printObject( arr );
```

## Herança

No JavaScript, temos algo chamado **herança prototípica**. Objetos, e elementos em geral, geralmente herdam propriedades e métodos de seus construtores, ou protótipos.

Quando buscamos uma propriedade em um determinado objeto, caso ele não a tenha, seu protótipo será consultado para verificar a existência de tal propriedade, e caso também não tenha a tal propriedade, o protótipo do protótipo será consultado, até chegar em um elemento com protótipo igual a `null`.

**Ex**:

```js
var one   = { 'a' : 13 };
var two   = Object.create( one );
var three = Object.create( two );

two
  .a += 13; // 26
two
  .b = 39; // 39

three
  .a += 13; // 39
three
  .b += 13; // 52
three
  .c = 65;

console.log( one );
console.log( two );
console.log( three );
```

## Erros de acesso à propriedade

Consultar uma propriedade que não existe em um objeto existente não retorna um erro, apenas será retornado `undefined`. Porém, consultar um propriedade de um objeto inexistente retornará um erro `ReferenceError`.

Se uma propriedade estiver configurada apenas como leitura, esta não pode ter seu valor alterado, mesmo que seja uma propriedade herdada.

Caso um objeto não seja extensível, e um de seus protótipos não tenha determinada propriedade, este objeto também não poderá ter uma nova propriedade configurada.

Fora do `strict mode`, erros silenciosos ocorrerão caso alguma tentativa de configurar uma propriedade não configurável aconteça.

```js
var obj = {};

obj.someValue // undefined
```

## Excluindo Propriedades

O operador `delete` deleta uma propriedade de um objeto.

É excluída apenas as propriedades **próprias**, as herdadas devem ser excluídas diretamente nos respectivos protótipos.

```js
var guitar = {
  'model' : 'MusicMan',
  'price' : 3100,
  'owner' : 'John Petrucci'
};

var ibanez = Object.create( guitar );

ibanez
  .model = 'JP100';
ibanez
  .price = 2600;

console.log( guitar ); // Object {model: "MusicMan", price: 3100, owner: "John Petrucci"}
console.log( ibanez ); // Object {model: "JP100", price: 2600, owner: "John Petrucci"}

delete ibanez.owner;

console.log( guitar ); // Object {model: "MusicMan", price: 3100, owner: "John Petrucci"}
console.log( ibanez ); // Object {model: "JP100", price: 2600, owner: "John Petrucci"}

delete guitar.owner;

console.log( guitar ); // Object {model: "MusicMan", price: 3100}
console.log( ibanez ); // Object {model: "JP100", price: 2600}
```

Retorna `true` caso a propriedade tenha sido deletada.

Não exclui propriedades com atributo configurável `false`.

No modo restrito, só deleta uma propriedade global se está estiver precedida de `this`.

**Ex**:

```js
(function() {
  
  'use strict';
  
  someValue = 13;
  
  delete someValue; // SyntaxError: Delete of an unqualified identifier in strict mode.
  delete this.someValue; // Ok
  
}());
```

## Testando Propriedades

Podemos testar se um objeto tem uma determinada propriedade de diferentes formas no JavaScript, usando:

* `in`,
* `hasOwnProperty()` e
* `propertyIsEnumerable()`

O operador `in` recebe uma string a sua direita e o objeto a sua esquerda. Caso o objeto contenha a propriedade, será retornado o valor `true`.

```js
var guitar = { strings : 6 };

console.log( 'strings' in guitar ); // true
console.log( 'price' in guitar ); // false
```

`hasOwnProperty()` testa se o objeto tem uma propriedade, retornando `true` caso tenha, porém se a propriedade for herdada `false` será retornado.

```js
var guitar = { 'strings' : 7 };

console.log( guitar.toString());

console.log( guitar.hasOwnProperty( 'strings' )); // true
console.log( guitar.hasOwnProperty( 'toString' )); // false

// Overwriting the toString() method
guitar.toString = toString;

console.log( guitar.hasOwnProperty( 'toString' )); // true

console.log( guitar.toString()); // "overwritten method"

// Methods declaration
function toString() {
  return "overwritten method";
}
```


```js

```