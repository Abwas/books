// var h = require( './../header.js' );
var expect = require( 'chai' ).expect;
var chirp = require( './../../04-dominando-funcoes/4-2-chilros.js' );

describe( 'Chirp named function', function() {

  it( 'should make chirp noise', function() {
    expect( chirp( 3 )).to.equal( 'chirp-chirp-chirp' );
  });

});
