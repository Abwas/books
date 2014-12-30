var book = {
  name      : 'Pro ExpressJS',
  publisher : 'Apress',
  keywords  : 'nodejs expressjs',
  discount  : 'AZAT14'
};

var express = require('express');
var path = require('path');

var app = express();
console.log( app.get( 'env' ));

// view engine setup
app.set( 'view cache', true );
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set( 'port', process.env.PORT || 3000 );

app.set( 'trust proxy', true );
app.set( 'jsonp callback name', 'cb' );
app.set( 'json replacer', function( key, value ) {
  if ( key === 'discount' ) {
    return undefined;
  } else {
    return value;
  }
});
app.set( 'json spaces', 4 );

app.set( 'case sensitive routing', true );
app.set( 'strict routing', true );
app.set( 'x-powered-by', false );
app.set( 'subdomain offset', 3 );
// app.disable( 'etag' );

app.get( '/jsonp', function( req, res ) {
  res.jsonp( book );
});

app.get( '/json', function( req, res ) {
  res.send( book );
});

app.get( '/users', function( req, res ) {
  res.send( 'users' );
});

app.get( '/users/', function( req, res) {
  res.send( 'users/' );
});

app.get( '*', function( req, res ) {
  res.send( 'Pro Express Configs' );
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

module.exports = app;
