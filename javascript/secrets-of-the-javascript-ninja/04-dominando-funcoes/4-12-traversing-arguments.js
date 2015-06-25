function merge( root ) {
  var len = arguments.length;
  for ( var i = 1; i < len; i += 1 ) {
    for ( var key in arguments[ i ]) {
      root[ key ] = arguments[ i ][ key ];
    }
  }

  return root;
}

module.exports = merge;
