// Modules
var _ = require( 'lodash' );
////////////// Public Functions
var parseAge = module.exports = parseAge;

////////////// Private Functions
var fail = fail;
var warn = warn;
var note = note;

////////////// Functions Declaration
function parseAge( age ) {
  if ( !_.isString( age )) fail( 'Expecting a string' );
  var a;

  note( 'Attempting to parse an age' );
  a = parseInt( age, 10 );

  if (_.isNaN( a )) {
    warn([ 'Could not parse age:', age ].join( ' ' ));
    a = 0;
  }

  return a;
}

function fail( thing ) {
  throw new Error( thing );
}

function warn( thing ) {
  console.log([ 'WARNING:', thing ].join( ' ' ));
}

function note( thing ) {
  console.log([ 'NOTE:', thing ].join( ' ' ));
}
