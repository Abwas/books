# 10. Abstração

* Mantenha o arquivo `app.js` ou `server.js` o menor possível
* A melhor forma de reutilizar código é usar *middlewares* e *routes*.
* Declarações de configuração também podem (devem) ser abstraídas

## Middleware

* Usar funções nomeadas permite que se reaproveite o middleware para outras rotas
* A melhor prática é abstrair funções nomeadas para módulos externos baseados em sua funcionalidade. Ex: `auth`, `database`, etc.

## Routes

* Para melhor suporte entre plataformas, é bom utilizar `path.join( 'algumaPasta', 'algumArquivo' )`, pois assim será gerado o caminho relativo ao da plataforma que o código está sendo utilizado.
* Exportando módulos com `index.js`

```js
module.exports = {
  stories : require( '/stories' ),
  users   : require( './users' )
};
```

`/stories/index.js` ficaria assim:

```js
exports.findStories = function(req, res, next) {
  // ...
};
exports.createStory = function(req, res, next) {
  // ...
};
// ...
```

* Para organizar de forma ainda melhor, podemos usar a classe `Router`, vista no cap.6
* Podemos também separar cada funcionalidade para seu arquivo próprio, ficando assim:

`routes-exports/find-stories.js`

```js
exports.findStories = function( ops ) {
  ops = ops || '';
  console.log( 'findStories module logic' + ops );
};
```

## Combining Middleware and Routes

* Podemos abstrair um middleware para ser utilizada em diferentes casos, como uma função que retorna uma função ([state monad from functional programming](http://en.wikipedia.org/wiki/Monad_(functional_programming)#State_monads))

```js
var requiredParam = function( param ) {
  var paramName = '';
  if ( param === '_token' )
    paramname = 'token';
  else if ( param === 'api_key' )
    paramName = 'API key'
  return function( req, res, next ) {
    if ( !re.query[ params ])
      return next( new Error( 'No ' + paramName + ' was provided' ));
    next();
  }
};

app.get( '/admin', requiredParam( '_token' ), function( req, res, next ) {
  res.render( 'admin' );
});

// Middleware that applied to all /api/* calls
app.use( '/api/*', requiredParam( 'api_key' ));
```