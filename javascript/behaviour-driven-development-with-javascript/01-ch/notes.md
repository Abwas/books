# 1. A JavaScript Refresher

* JS não é uma linguagem de brinquedo. Muitas melhorias foram feitas na versão 5, e muitas outras virão na sua versão 6.
* [ECMAScript compatibility table](http://kangax.github.io/compat-table/es5/)
* Use `console.log()` para debugar seu código
* Use uma *lint tool* (JSHint ou JSLint)
* Use `"use strict";`
* Use o paradigma funcional do JavaScript, principalmente as **expressões funcionais** e **closures**
* Funções no JS são *first class citizens*, ou "cidadões de primeira classe"
* Ordenando um array de números:

```js
function numericalOrder( a, b ) {
  var output = 0;

  if ( a < b ) output = -1;
  if ( a > b ) output = 1;

  return output;
}

[ 3, 5, 94, 31, 13, 7, 6 ].sort( numericalOrder );
// [ 3, 5, 6, 7, 13, 31, 94 ]

```

* Ordenando um array de strings por uma determinada string:

```js
function memberOrder( a, b ) {
  var output = 0;
  
  if ( a == 'Chris' ) output = -1;
  if ( b == 'Chris' ) output = 1;

  return output;
}

[ 'Douglas', 'Eric', 'John', 'Chris' ].sort( memberOrder );
// [ "Chris", "Douglas", "Eric", "John" ]
```
* Maneira tradicional de fazer OOP no JS

```js
var Product = function( name ) {
  this.name = name;
};
Product.prototype.showName = function() {
  console.log( this.name );
};

var myProduct = new Product( 'MusicMan Majesty' );
myProduct.showName(); // "MusicMan Majesty"
```

* Nova maneira de fazer OOP no JS, `Object.create()`, proposta por Douglas Crockford
* Poyfill para `Object.create()`

```js
if ( !Object.create ) {
  
  Object.create = function ( o ) {
    
    if ( arguments.length > 1 ) {
      throw new Error( 'Object.create implementation only accepts the first parameter' );
    }
    
    function F() {}
    F.prototype = o;
    return new F();
    
  };
  
}
```

* Para mais polyfills da ES5: [es5-shim](https://github.com/es-shims/es5-shim)
* Experiência com projetos OOP nos ensina que devemos separar **estados internos** de **interfaces exteriores**, usando métodos *getter* e *setter*
* Para mostrar que uma propriedade é privada, podemos nomeá-la com *undescore*.
* Para retornar essa propriedade, podemos apenas declarar a função com o mesmo nome desta.
* Para modificarmos o valor da propriedade, nomeamos a função com `set` + `nomeDaPropriedade`.
* Exemplificando:

```js
var myProduct = {
  _price  : 3100,
  _name   : 'MusicMan JP13',
  
  price   : function() {
    return this._price;
 },
  
 setPrice : function( p ) {
   if ( p <= 0 )
     throw new Error( 'Price must be positive' );
   
   this._price = p; 
 }

};
```

* Há uma convensão de se iniciar novos *protótipos* com letra maiúscula, assim como as classes em linguagens mais tradicionais

* Criando novos objetos com `Object.create()`

```js
var Product = {
  
  _price   : 0,
  _name    : '',
  
  price    : function() {
    return this._price;
  },
  
  name     : function() {
    return this._name;
  },
  
  setPrice : function( p ) {
    this._price = p;
  },
  
  setName  : function( n ) {
    this._name = n;
  }
};

var product1 = Object.create( Product );
product1.setName( 'MusicMan' );
product1.setPrice( 3100 );

console.log( product1.name() + ' - $' + product1.price());
// "MusicMan - $3100"

var product2 = Object.create( Product );
product2.setName( 'Ibanez' );
product2.setPrice( 1300 );

console.log( product2.name() + ' - $' + product2.price());
// "Ibanez - $1300"
```

* Para não termos que definir todos as propriedades de um novo objeto, podemos criar um método de inicialização:

```js
var Product = {
  
  _price   : 0,
  _name    : '',
  
  price    : function() {
    return this._price;
  },
  
  name     : function() {
    return this._name;
  },
  
  setPrice : function( p ) {
    this._price = p;
  },
  
  setName  : function( n ) {
    this._name = n;
  },
  
  init     : function( name, price ) {
    this._name  = name;
    this._price = price;
    return this;
  }
};

var oneProduct = Object.create( Product ).init( 'Mayones', 3311 );
console.log( oneProduct.name()); // "Mayones"
```

* Podemos abstrair ainda mais e encapsular a criação e inicialização de novos objetos

```js
var Product = {
  
  _price   : 0,
  _name    : '',
  
  price    : function() {
    return this._price;
  },
  
  name     : function() {
    return this._name;
  },
  
  setPrice : function( p ) {
    this._price = p;
  },
  
  setName  : function( n ) {
    this._name = n;
  },
  
  init     : function( name, price ) {
    this._name  = name;
    this._price = price;
    return this;
  },
  
  create   : function( name, price ) {
    return Object.create( this ).init( name, price );
  }
};

var otherProduct = Product.create( 'Jackson', 2560 );
console.log( otherProduct.price()); // 2560
```

* Podemos usar apenas `Object.create()` para herança

```js
var Product = {

  _price   : 0,
  _name    : '',

  price    : function() {
    return this._price;
  },

  name     : function() {
    return this._name;
  },

  setPrice : function( p ) {
    this._price = p;
  },

  setName  : function( n ) {
    this._name = n;
  },

  init     : function( name, price ) {
    this._name  = name;
    this._price = price;
    return this;
  },

  create   : function( name, price ) {
    return Object.create( this ).init( name, price );
  }
};

// Book herda todos os métodos e propriedades de Product
var Book = Product.create();

// Propriedades de Book
Book._author = null;
Book._numPages = null;

// Métodos de Book
Book.setAuthor = function( author ) {
  this._author = author;
};
Book.setNumPages = function( num_pages ) {
  this._numPages = num_pages;
};
Book.author = function() {
  return this._author;
};
Book.numPages = function() {
  return this._numPages;
};

// criando um livro
var bddjs = Book.create();

bddjs.setAuthor( 'Marco Emrich' );
bddjs.setNumPages( 113 );

console.log( bddjs.author() + ' ' + bddjs.numPages());
```