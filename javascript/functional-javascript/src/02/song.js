var _ = require( 'lodash' );

module.exports = function song( start, end, lyricGen ) {
  return _.reduce( _.range( start, end, -1 ),
    function( acc, n ) {
      return acc.concat( lyricGen( n ));
    }, []);
};
