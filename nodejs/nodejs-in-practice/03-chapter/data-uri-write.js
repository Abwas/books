// read
var fs = require( 'fs' );
var mime = 'image/png';
var encoding = 'base64';
var data = fs.readFileSync( './monkey.png').toString( encoding );
var uri = 'data:' + mime + ';' + encoding + ',' + data;

// write
var dataToWrite = uri.split( ',' )[1];
var buf = Buffer( dataToWrite, encoding );

fs.writeFileSync( 'new-monkey.png', buf );
