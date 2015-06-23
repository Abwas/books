var expect = require( 'chai' ).expect;
var smallest = require( './../../04-dominando-funcoes/4-11-min-max-functions.js' ).smallest;
var largest  = require( './../../04-dominando-funcoes/4-11-min-max-functions.js' ).largest;

describe( 'Math.min() and Math.max()', function() {

  var nums = [ 0, 1, 3, 2, 6 ];

  it( 'should find the smallest value', function() {
    expect( smallest( nums )).to.equal( 0 );
  });

});
