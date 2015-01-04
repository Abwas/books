describe( 'Seminar', function() {
  it( 'should have a name', function() {
    var seminar = Seminar.create( 'JavaScript-Basics' );
    expect( seminar.name()).toEqual( 'JavaScript-Basics' );
  });
});