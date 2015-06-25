var expect = require( 'chai' ).expect;
var merge = require( './../../04-dominando-funcoes/4-12-traversing-arguments' );

describe( 'Traversing arguments', function() {
  it( 'should merge properties from passed objects to the first one', function() {
    var merged = merge(
      { name : 'Batou' },
      { city : 'Nihama' }
    );

    expect( merged.name ).to.equal( 'Batou' );
    expect( merged.city ).to.equal( 'Nihama' );
  });
});
