var store = {
  nextId : 1,
  cache : {},
  add : function( fn ) {
    if ( !fn.id ) {
      fn.id = store.nextId++;
      return !!( store.cache[ fn.id ] = fn );
    }
  }
};

module.exports = store;
