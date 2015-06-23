///////////// Functions Declaration
function smallest( array ) {
  return Math.min.apply( Math, array );
}

function largest( array ) {
  return Math.max.apply( Math, array );
}

module.exports = {
  smallest : smallest,
  largest  : largest
}
