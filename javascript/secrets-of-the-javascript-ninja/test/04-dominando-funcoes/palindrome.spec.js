var expect = require( 'chai' ).expect;
var isPalindrome = require( './../../04-dominando-funcoes/palindrome.js' );

describe( 'Palindrome', function() {

  it( 'should verify if a word is a palindrome', function() {
    expect( isPalindrome( 'reviver' )).to.be.true;
    expect( isPalindrome( 'reter' )).to.be.true;
    expect( isPalindrome( 'rever' )).to.be.true;
    expect( isPalindrome( 'eric' )).to.be.false;
  });

});
