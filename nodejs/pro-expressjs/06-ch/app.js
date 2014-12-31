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

// ///////////// v1 API
// app.get( '/v1/users/:username', function( req, res, next ) {
//   var username = req.params.username;
//   findUserByUsername( username, function( error, user ) {
//     if ( error ) return next( error );
//     return res.render( 'user', user );
//   });
// });

// app.get( '/v1/admin/:username', function( req, res, next ) {
//   var username = req.params.username;
//   findUserByUsername( username, function( err, user ) {
//     if ( err ) return next( err );
//     return res.render( 'admin', user );
//   });
// });

// ///////////// end of v1 API

// ///////////// v2 API
// var findUserByUsernameMiddleware = function( req, res, next ) {
//   var username = req.params.username;

//   if ( username ) {
//     console.log( 'Username was detected:', username );
//     findUserByUsername( username, function( err, user ) {
//       if ( err ) return next( err );
//       req.user = user;
//       return next();
//     });
//   } else {
//     return next();
//   }

// };

// app.get( '/v2/users/:username',
//   findUserByUsernameMiddleware,
//   function( req, res, next ) {
//     return res.render( 'user', req.user );
// });

// app.get( '/v2/admin/:username',
//   findUserByUsernameMiddleware,
//   function( req, res, next ) {
//     return res.render( 'admin', req.user );
// });

// ///////////// end of v2 API

///////////// v3 API
app.param( 'v3Username', function( req, res, next, username ) {
  console.log( 'Username was detected:', username );
  findUserByUsername( username, function( err, user ) {
    if ( err ) return next( err );
    req.user = user;
    return next();
  });
});

app.get( '/v3/users/:v3Username', function( req, res, next ) {
  return res.render( 'user', req.user );
});

///////////// end of v3 API

///////////// v4 API
///////////// end of v4 API

app.use( errorhandler());

var server = app.listen( app.get( 'port' ), function() {
  console.log( 'Express server listening on port ' + server.address().port );
});