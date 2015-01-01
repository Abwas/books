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
app.use( bodyParser.urlencoded({ extended : true }));