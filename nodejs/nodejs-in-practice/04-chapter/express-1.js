var express = require( 'express' );
var app = express();

app.on( 'hello-alert', function() {
  console.warn( 'Warning!' );
});

app.get( '/', function( req, res ) {
  res.app.emit( 'hello-alert' );
  res.send( 'hello node' );
});

app.listen( 3000 );
