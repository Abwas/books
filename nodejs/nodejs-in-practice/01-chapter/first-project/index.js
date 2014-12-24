var CountStream = require( './countstream' );
var countStream = new CountStream( 'Border' );
var http        = require( 'http' );

http.get( 'http://caniuse.com/', function( res ) {
  res.pipe( countStream );
});

countStream.on( 'total', function( count ) {
  console.log( 'Total matches: ', count );
});
