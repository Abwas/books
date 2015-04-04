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

`propertyIsEnumerable()` retorna `true` apenas se a propriedade for própria do objeto e enumerável.

```js
var guitar = {
  'model' : '',
  'price' : 0
};

var musicman = Object.create( guitar );

musicman
  .strings = 7;

console.log( musicman.propertyIsEnumerable( 'model' )); // false
console.log( musicman.propertyIsEnumerable( 'strings' ));  // true
```

Podemos verificar a existência de uma propriedade consultando-a e verificando se o seu valor é igual a `undefined`.

```js
var obj = { some : 'value' };

console.log( obj.some !== undefined ); // true
console.log( obj.value !== undefined ); // false
```

O operador `in` consegue identificar se uma propriedade existe porém está com valor `undefined`.

```js
var obj = { some : undefined };

console.log( obj.some !== undefined ); // false
console.log( 'some' in obj ); // true
```

## Enumerando propriedades

Usando `for in` e os métodos da seção anterior, podemos criar novos métodos para manipularmos as propriedades nos objetos em JavaScript.

Para ter o nome das propriedades enumeráveis de um objeto em um array, você pode utilizar o método `Object.keys( nomeDoObjeto )`.

Para conseguir todas as propriedades do objeto, inclusive as não enumeráveis, use o método `Object.getOwnPropertyNames( nomeDoObjeto )`.

**Lembrete**: ver funções utilitárias de manipulação de propriedades

* `extend()`
* `merge()`
* `restrict()`
* `substract()`
* `union()`
* `intersection()`
* `keys()`

## Métodos Getter e Setter de Propriedades

As propriedades gerenciadas pelos métodos *getter* e *setter* são chamadas **propriedades de acesso**, para serem diferenciadas das **propriedades de dados**.

Ao consultar uma propriedade de acesso, o método getter é chamado sem argumentos.

Ao configurar uma propriedade de acesso, o método setter é chamado, e seu valor de retorno é ignorado.

Propriedade de acesso não é *gravável*. Se tem um método getter e setter, é de leitura e gravação. Se tem apenas um método getter, é apenas de leitura, e se tem apenas um setter, é apenas de gravação, retornando `undefined` se consultada.

```js
var guitar = {
  
  // data properties
  brand    : 'Ibanez',
  tax      : 1.8,
  dollar   : 3.23,
  cost     : 3100,
  
  
  // access properties
  get priceUS() {
    return this.cost;
  },
  set priceUS( newPrice ) {
    this.cost = newPrice;
  },
  
  get priceBR() {
    return this.priceUS * this.tax * this.dollar;
  }
  
};

console.log( guitar.priceUS ); // 3100
console.log( guitar.priceBR ); // 18023.4

guitar.priceUS = 3500;

console.log( guitar.priceUS ); // 3500
console.log( guitar.priceBR ); // 20349
```

Usamos `this` para nos referenciar as outras propriedades do mesmo objeto nos métodos getter e setter.

As propriedades de acesso também são herdadas.

```js
// inheritance of access properties
// using the guitar object above
var musicman = Object.create( guitar );

musicman.cost = 4000;

console.log( 'MusicMan' );
console.log( musicman.priceUS ); // 4000
console.log( musicman.priceBR ); // 23256

musicman.priceUS = 5500;

console.log( musicman.priceUS ); // 5500
console.log( musicman.priceBR ); // 31977
```

Números identificadores sequenciais criados utilizando as propriedades de acesso:

```js
var idGenerator = {
  
  // Private properties
  _serial : 0,

  // Access properties
  get newId() {
    return this._serial++;
  }
  
};

var id0 = idGenerator.newId;
var id1 = idGenerator.newId;
var id2 = idGenerator.newId;

console.log( id0 ); // 0
console.log( id1 ); // 1
console.log( id2 ); // 2
```

Dados para RPG!

```js
var rpgDice = {
  get d20() {
    return randomNumberGenerator( 1, 20 );
  },
  
  get d10() {
    return randomNumberGenerator( 1, 10 );
  },
  
  get d8() {
    return randomNumberGenerator( 1, 8 );
  },
  
  get d6() {
    return randomNumberGenerator( 1, 6 );
  },
  
  get d4() {
    return randomNumberGenerator( 1, 4 );
  }
};

// Methods declarations

/*
 *
 * @param {Number} min - inclusive
 * @param {Number} max - exclusive
 *
 * ps: max + 1 = max enclosed
 *
*/
function randomNumberGenerator( min, max ) {  
  
  return Math.floor( Math.random() * (( max + 1 ) - min ) + min );
  
}

console.log( rpgDice.d20 );
console.log( rpgDice.d10 );
console.log( rpgDice.d8 );
console.log( rpgDice.d6 );
console.log( rpgDice.d4 );

```

## Atributos de propriedade

As propriedades na ECMAScript 5 podem ser graváveis, enumeráveis ou consultáveis, em ECMAScript 3 elas têm todas estas propriedades.

Caso você queira criar uma biblioteca ou framework, isso se torna importante pois lhe permite:

* adicionar métodos não enumeráveis em objetos (como os métodos nativos)
* impedir que propriedades possam ser excluídas ou alteradas

Uma propriedade pode ter 5 atributos:

1. `get`
1. `set`
1. `enumerable` (enumerável)
1. `configurable` (configurável)
1. `writable` (gravável)

Use `Object.getOwnPropertyDescriptor( obj, property )` para conhecer o descritor de uma variável.

```js
var obj = { some : 'value' };

console.log( Object.getOwnPropertyDescriptor( obj, 'some' ));
//  Object {value: "value", writable: true, enumerable: true, configurable: true}
```

```js
var guitar = {
  
  // Data properties
  price  : 3100,
  tax    : 1.6,
  dollar : 3.13,
  
  // Access properties
  get brPrice() {
    return this.price * this.tax * this.dollar;
  }
  
};

console.log( Object.getOwnPropertyDescriptor( guitar, 'brPrice' ));
// Object {get: function, set: undefined, enumerable: true, configurable: true}
```

```js
var guitar = { model : 'MusicMan' };

console.log( Object.getOwnPropertyDescriptor( guitar, 'price' )); // undefined
console.log( Object.getOwnPropertyDescriptor( guitar, 'toString' )); // undefined
```

**ps**: para consultar propriedades herdadas, devemos usar o método `Object.getPrototypeOf()`, e verificar se o protótipo tem o método buscado. Caso não tenha, usamos novamente esse método para encontrar o prótotipo do protótipo.

**Criando e configurando propriedades**

Use o método `Object.defineProperty()` para criar e configurar uma propriedade. Este método recebe 3 parâmetros:

- Referência do objeto que contém/irá conter a propriedade
- Nome da propriedade
- Objeto descritor da propriedade

O objeto descritor pode ter as seguintes propriedades/métodos:

```js
{
  value        : 31,
  writable     : true,
  enumerable   : true,
  configurable : true,
  get          : function() { return someValue; }, // get ou set
  set          : function( newValue ) { someValue = newValue; }
}
```

**ps**: Uma propriedade pode ter o atributo `get` **OU** `set`.

**Exercício**: 

1. Crie uma propriedade de dados chamada `totalPrice` no objeto `guitar`, que seja gravável, configurável e não enumerável
1. Torne-a não gravável e tente gravar algum valor posteriormente (no modo restrito)
1. Torne-a uma propriedade de acesso de leitura, lendo a propriedade `price * taxes`
1. Torne-a uma propriedade não configurável e tente reconfigurá-la posteriormente

```js
(function() {
  
  'use strict';

  var guitar = {
    price : 3100,
    taxes : 2
  };

  // task 1
  Object
    .defineProperty( guitar, 'totalPrice', {
      value        : 6200,
      writable     : true,
      enumerable   : true,
      configurable : true
    });

  console
    .log( guitar.totalPrice ); // 6200
  
  // task 2
  Object
    .defineProperty( guitar, 'totalPrice', {
      writable : false
    });
  
  /* 
  guitar
    .totalPrice = 9300; // TypeError: Cannot assign to read only property 'totalPrice' of #<Object>
  */
  
  // task 3
  Object
    .defineProperty( guitar, 'totalPrice', {
      get : function() { return this.price * this.taxes; }
    });
  
  console
    .log( guitar.totalPrice ); // 6200
  
  // task 4
  Object
    .defineProperty( guitar, 'totalPrice', {
      configurable : false
    });
  
  Object
    .defineProperty( guitar, 'totalPrice', {
      configurable : true
    });
  // TypeError: Cannot redefine property: totalPrice

})();
```
