# 1. A JavaScript Refresher

* JS não é uma linguagem de brinquedo. Muitas melhorias foram feitas na versão e 5, e muitas outras virão na sua versão 6.
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
