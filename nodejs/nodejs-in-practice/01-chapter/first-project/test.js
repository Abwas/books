var assert = require( 'assert' );
var CountStream = require( './countstream' );
var countStream = new CountStream( 'var' );
var fs = require( 'fs' );
var passed = 0;

countStream.on( 'total', function( count ) {
  assert.equal( count, 6 );
  passed += 1;
});

fs.createReadStream( __filename).pipe( countStream );

process.on( 'exit', function() {
  console.log( 'Assertions passed: ', passed );
});
