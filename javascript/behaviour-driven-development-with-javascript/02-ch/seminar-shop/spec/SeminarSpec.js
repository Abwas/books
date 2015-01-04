describe( 'Seminar', function() {
  it( 'should have a name', function() {
    var seminar = Seminar.create( 'JavaScript-Basics' );
    expect( seminar.name()).toEqual( 'JavaScript-Basics' );
  });

  it( 'shoud have a price', function() {
    var seminar = Seminar.create( 'JavaScript-Basics', 499.99 );
    expect( seminar.netPrice()).toEqual( 499.99 );
  })
});