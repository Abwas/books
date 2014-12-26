var args = {
  '-h' : displayHelp,
  '-r' : readFile
};

function displayHelp() {
  console.log( 'Argument processor:', args );
}

function readFile( file ) {
  console.log( 'Reading:', file );
  require( 'fs' ).createReadStream( file ).pipe( process.stdout );
}

var argv = process.argv;

argv
  .forEach( function( arg ) {
    if ( arg === '-r') {
      args[ arg ]( 'list.txt' );
    } else if ( args[ arg ] ) {
      args[ arg ]();
    }
  });
