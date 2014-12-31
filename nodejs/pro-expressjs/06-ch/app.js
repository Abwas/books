var express      = require( 'express' );
var path         = require( 'path' );
var logger       = require( 'morgan' );
var favicon      = require( 'serve-favicon' );
var errorhandler = require( 'errorhandler' );

var app = express();
var router = express.Router();

app.set( 'view engine', 'jade' );
app.set( 'port', process.env.PORT || 3000 );

app.use( logger( 'combined' ));
app.use( favicon( path.join( __dirname, 'public', 'favicon.ico' )));
app.use( express.static( 'public' ));

var users = {
  'eric' : {
    email : 'eric@email.com',
    website : 'github.com/ericdouglas',
    blog : 'ericdouglas.github.io'
  }
};

var findUserByUsername = function( username, callback ) {
  // perform database query that calls callback when it’s done
  // this is our fake database
  if ( !users[ username ]) {
    return callback( new Error(
      'No user matching ' + username
    ));
  }

  return callback( null, users[ username ]);
};

app.get( '/v1/users/:username', function( req, res, next ) {
  var username = req.params.username;
  findUserByUsername( username, function( error, user ) {
    if ( error ) return next( error );
    return res.render( 'user', user );
  });
});



app.use( errorhandler());

var server = app.listen( app.get( 'port' ), function() {
  console.log( 'Express server listening on port ' + server.address().port );
});