var _ = require( 'lodash' );

function isIndexed( data ) {
  return _.isArray( data ) || _.isString( data );
}

module.exports = isIndexed;
