var fail      = require( './fail' );
var isIndexed = require( './is-indexed' );
var _         = require( 'lodash' );

function nth( a, index ) {
  if ( !_.isNumber( index )) fail( 'Expected a number as the index' );
  if ( !isIndexed( a )) fail( 'Not supported on non-indexed type' );
  if (( index < 0 ) || ( index > a.length - 1 )) fail( 'Index value is out of bounds' );

  return a[ index ];
}

module.exports = nth;
