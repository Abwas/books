var express = require( 'express' );
var app     = express();
var port    = 3000;

app
  .get( '*', function( request, response ) {
    response.end( 'Hello World' );
  });

app
  .listen( port, function() {
    console.log( 'Running at http://localhost:%s', port );
  });

