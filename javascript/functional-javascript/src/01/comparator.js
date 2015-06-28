var truthy = require( './truthy' );

function comparator( pred ) {
  return function( x, y ) {
    if ( truthy( pred( x, y ))) 
      return -1;
    else if ( truthy( pred( y, x ))) 
      return 1;
    else 
      return 0;
  }
}

module.exports = comparator;
