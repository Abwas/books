// chilros utilizando uma função nomeada
function chirp( n ) {
  return n > 1 ? chirp( n- 1 ) + '-chirp' : 'chirp';
}
