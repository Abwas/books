var user       = 'johnny';
var pass       = 'c-bad';
var authstring = user + ':' + pass;

var buf = new Buffer( authstring );
console.log( buf.toString());

var encoded = buf.toString( 'base64' );
console.log( encoded );
