var express = require( 'express' );
var path = require( 'path' );
var favicon = require( 'serve-favicon' );
var logger = require( 'morgan' );
var cookieParser = require( 'cookie-parser' );
var bodyParser = require( 'body-parser' );

var routes = require( './routes/index' );

var app = express();

// View engine setup
app.set( 'views', path.join( __dirname, 'views' ));
app.set( 'view engine', 'jade' );

app.use( logger( 'combined' ));
app.use( favicon( path.join( __dirname, 'public', 'favicon.ico' )));
app.use( bodyParser.json());
app.use( bodyParser.urlencoded({ extended : true }));
app.use( cookieParser( 'abc' ));
app.use( express.static( path.join( __dirname, 'public' )));

app.use( '/', routes );

app.get( '/search', function( req, res ) {
  console.log( req.query );
  res.end( JSON.stringify( req.query ) + '\r\n' );
});

app.get( '/params/:role/:name/:status', function( req, res ) {
  console.log( 'req.params', req.params );
  console.log( 'req.route', req.route );
  res.end();
});

app.post( '/body', function( req, res ) {
  console.log( req.body );
  res.end( JSON.stringify( req.body ) + '\r\n' );
});

app.get( '/cookies', function( req, res ) {
  if ( !req.cookies.counter )
    res.cookie( 'counter' , 0 );
  else
    res.cookie( 'counter', parseInt( req.cookies.counter, 10 ) + 1 );
  res.status( 200 ).send( 'cookies are: ', req.cookies );
});

app.set( 'port', process.env.PORT || 3000 );

var server = app.listen( app.get( 'port' ), function() {
  console.log( 'Express server on port ', server.address().port );
});