var _ = require( 'lodash' );

module.exports = function( n ) {
  return _.chain([])
    .push( n + " bottles of beer on the wall" )
    .push( n + " bottles of beer" )
    .push( "Take one down, pass it aroung" )
    .tap( function( lyrics ) {
      if ( n > 1 ) {
        lyrics.push(( n - 1 ) + " bottles of beer on the wall." );
      } else {
        lyrics.push( "No more bottles of beer on the wall!" );
      }
    })
    .value();
};
