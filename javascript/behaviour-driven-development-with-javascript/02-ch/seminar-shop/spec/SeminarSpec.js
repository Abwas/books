describe( 'Seminar', function() {
  it( 'should have a name', function() {
    var seminar = Seminar.create( 'JavaScript-Basics' );
    seminar.name();
  });
});