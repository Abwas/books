var express = require( 'express' );
// rotas
var home = require( './app/routes/home' );

module.exports = function() {
  var app = express();
  
  // config de ambiente
  app.set( 'port', 3000 );

  // middleware
  app.use( express.static( './public' ));
  // abaixo do middleware express.static
  app.set( 'view engine', 'ejs' );
  app.set( 'views', './app/views' );

  // abaixo da config. do último middleware
  home( app );

  return app;
};