var express = require( 'express' );
var load    = require( 'express-load' );

module.exports = function() {
  var app = express();
  
  // config de ambiente
  app.set( 'port', 3000 );

  // middleware
  app.use( express.static( './public' ));
  // abaixo do middleware express.static
  app.set( 'view engine', 'ejs' );
  app.set( 'views', './app/views' );

  // middlewares definidos para rotas serão executados
  // em todos os métodos (GET, POST, PUT, DELETE, etc...)
  app.use( '/', function( req, res, next ) {
    console.log( 'middleware A na rota /' );
    next();
  });

  app.use( '/', function( req, res, next ) {
    console.log( 'middleware B na rota /' );
    next();
  });

  // abaixo da config. do último middleware
  // carrega todos os scripts dentro das pastas seguintes
  load( 'models', { cwd : 'app' })
    .then( 'controllers' )
    .then( 'routes' )
    .into( app );

  return app;
};