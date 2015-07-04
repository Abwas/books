var expect = require( 'chai' ).expect;
var greet  = require( '../src/method-dispatch' );

describe( 'Method dispatch', function() {

  it( 'Should return the init function', function() {
    expect( greet() ).to.equal( 'initializing...' );
  });

  it( 'Should return the hello function', function() {
    expect( greet( 'hello', 'Eric' )).to.equal( 'Hello, Eric' );
  });

  it( 'Should return the goodbye function', function() {
    expect( greet( 'goodbye', 'world' )).to.equal( 'Goodbye, cruel world' );
  });

});
