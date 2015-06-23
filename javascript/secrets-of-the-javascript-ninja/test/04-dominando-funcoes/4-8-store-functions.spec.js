var expect = require( 'chai' ).expect;
var store  = require( './../../04-dominando-funcoes/4-8-store-functions.js' );

describe( 'Add properties in functions', function() {

  function ninja() {}

  it( 'should be able to add a property to a function', function() {
    expect( store.add( ninja )).to.be.true;
  });

  it( 'should NOT be able to add a property to a function', function() {
    expect( store.add( ninja )).to.not.be.ok;
  });

});
