var
  express        = require( 'express' ),
  path           = require( 'path' ),
  fs             = require( 'fs' ),
  compression    = require( 'compression' ),
  logger         = require( 'morgan' ),
  timeout        = require( 'connect-timeout' ),
  methodOverride = require( 'method-override' ),
  responseTime   = require( 'response-time' ),
  favicon        = require( 'serve-favicon' ),
  serveIndex     = require( 'serve-index' ),
  vhost          = require( 'vhost' ),
  busboy         = require( 'connect-busboy' ),
  errorhandler   = require( 'errorhandler' )
  ;

var app = express();

// Configure settings
app
  .set( 'view cache', true )
  .set( 'views', path.join( __dirname, 'views' ))
  .set( 'view engine', 'jade' )
  .set( 'port', process.env.PORT || 3000 )
  .use( compression({ threshold : 1 }))
  .use( logger( 'combined' ))
  .use( methodOverride( '_method' ))
  .use( responseTime( 4 ))
  .use( favicon( path.join( 'public', 'favicon.ico' )))
  
  // apply middleware
  .use( '/shared', serveIndex(
    path.join( 'public', 'shared' ),
    { 'icons' : true }
  ))
  .use( express.static( 'public' ))
  
  // Define routes
  .use( '/upload', busboy({ immediate : true }))
  .use( '/upload', function( req, res) {
    req.busboy.on( 'file', function( fieldname, file, filename, encoding, mimetype ) {
      file.on( 'data', function( data ) {
        fs.writeFile( 'upload' + fieldname + filename, data );
      });
      file.on( 'end', function() {
        console.log( 'File ' + filename + ' is ended' );
      });
    });

    req.busboy.on( 'finish', function() {
      console.log( 'Busboy is finished' );
      res.status( 201 ).end();
    });
  })
  .get(
    '/slow-request',
    timeout( '1s' ),
    function( req, res, next) {
      setTimeout( function() {
        if ( req.timedout) return false;
        return next();
      }, 999 + Math.round( Math.random()));
    }, function( req, res, next) {
      res.send( 'ok' );
    }
  )
  .delete( '/purchase-orders', function( req, res ) {
    console.log( 'the DELETE route has been triggered' );
    res.status( 204 ).end();
  })
  .get( '/response-time', function( req, res ) {
    setTimeout( function() {
      res.status( 200 ).end();
    }, 913);
  })
  .get( '/', function( req, res ) {
    res.end( 'Pro Expressjs Middleware' );
  })
  .get( '/compression', function( req, res ) {
    res.render( 'index' );
  })

  // Apply error handlers
  .use( errorhandler())

  // Boot the server
  .listen( app.get( 'port' ), function() {
    console.log( 'Running at port 3000' );
  });
