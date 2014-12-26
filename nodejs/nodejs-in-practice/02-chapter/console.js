var name = 'Eric';
var user = {
  name : 'Eric'
};

console.log( 'Hello' );
console.log( 'Hello %s', name );
console.log( 'Hello:', name );
console.log( 'Hello:', user );

console.error( 'Error, bad user:', user );

// to save errors messages:
// node console.js 2> error-file.log
// 1> standard output
// 2> error output
