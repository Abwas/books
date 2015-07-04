var methods = {
  init : function( args ) {
    return 'initializing...';
  },
  hello : function( args ) {
    return 'Hello, ' + args;
  },
  goodbye : function( args ) {
    'Goodbye, cruel ' + args;
  }
};

var greet = function greet( options ) {
  var args = [].slice.call( arguments, 0 );
  var initialized = false;
  var action = 'init'; // init will run by default

  if ( typeof options === 'string' &&
       typeof methods[ options ] === 'function' ) {
    
    action = options;
    args.shift();
  }

  return methods[ action ]( args );
};

module.exports = greet;
