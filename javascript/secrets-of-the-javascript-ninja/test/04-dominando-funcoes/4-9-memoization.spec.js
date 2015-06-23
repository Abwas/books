var expect  = require( 'chai' ).expect;
var isPrime = require( './../../04-dominando-funcoes/4-9-memoization.js' ); 

describe( 'Memoization', function() {

  console.log( '===============', isPrime(5) );

  it( 'should verify that 5 is prime', function() {
    expect( isPrime( 5 )).to.be.true;
  });

  it( 'should verify that 8 is NOT prime', function() {
    expect( isPrime( 8 )).to.be.false;
  });

  it( 'should verify that 5 and 8 were cached', function() {
    expect( isPrime.answers[ 5 ]).to.be.true;
    expect( isPrime.answers[ 8 ]).to.be.false;
  });

});
