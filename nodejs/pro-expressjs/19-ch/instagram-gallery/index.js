// requiring the dependencies
var express     = require( 'express' );
var superagent  = require( 'superagent' );
var consolidate = require( 'consolidate' );

var app = express();

// configuing the template engine
app.engine( 'html', consolidate.handlebars );
app.set( 'view engine', 'html' );
app.set( 'views', __dirname + '/views' );

// set up a static folder
app.use( express.static( __dirname + '/public' ));
