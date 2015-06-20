function isPalindrome( text ) {
  var length = text.length;
  
  if ( length <= 1 ) {
    return true;
  }

  if ( text.charAt( 0 ) !== text.charAt( length - 1 )) {
    return false;
  }

  return isPalindrome( text.substr( 1, length - 2 ));
}

console.log( isPalindrome( 'reviver' ));
console.log( isPalindrome( 'reter' ));
console.log( isPalindrome( 'rever' ));
console.log( isPalindrome( 'eric' ));

// ps:
// substr() second  parameter represents the length of the string
// starting from the first parameter (index)
//
// substring() second parameter represents an index
