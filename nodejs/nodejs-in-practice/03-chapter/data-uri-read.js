var fs = require( 'fs' );
var mime = 'image/png';
var encoding = 'base64';
var data = fs.readFileSync( './monkey.png').toString( encoding );
var uri = 'data:' + mime + ';' + encoding + ',' + data;

console.log( uri );
