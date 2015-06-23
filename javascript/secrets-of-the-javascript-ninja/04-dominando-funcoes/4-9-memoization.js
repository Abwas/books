function isPrime( value ) {
  if ( !isPrime.answers ) {
    isPrime.answers = {};
  }

  if ( isPrime.answers[ value ] != null ) {
    return isPrime.answers[ value ];
  }

  var prime = value !== 1; // 1 can never be prime

  for ( var i = 2; i < value; i += 1 ) {
    if ( value % i === 0 ) {
      prime = false;
      break;
    }
  }

  return isPrime.answers[ value ] = prime;
}

module.exports = isPrime;
