var existy = require( './existy' );

module.exports = function( x ) {
  return ( x !== false ) && existy( x );
};
