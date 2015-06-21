var expect = require( 'chai' ).expect;
var ninja  = require( './../../04-dominando-funcoes/4-5-embedded-function.js' );

describe( 'Use a embedded function recursively', function() {

  var samurai = { chirp : ninja.chirp };
  
  it( 'should verify if ninja\'s chirp method works', function() {
    expect( ninja.chirp( 2 )).to.equal( 'chirp-chirp' );
  });

  it( 'should verify if samurai has the chirp method', function() {
    expect( samurai.chirp( 2 )).to.equal( 'chirp-chirp' );
  });

  it( 'shoudl verify if samurai still have chirp method after clean the ninja object', function() {
    ninja = {};

    expect( samurai.chirp( 2 )).to.equal( 'chirp-chirp' );
  });

});
