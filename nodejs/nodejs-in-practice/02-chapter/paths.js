var path = require( 'path' );

console.log( '__dirname: ', __dirname );
console.log( '__filename: ', __filename );

console.log( 'path.join()', path.join( __dirname, 'some', 'folder' ));