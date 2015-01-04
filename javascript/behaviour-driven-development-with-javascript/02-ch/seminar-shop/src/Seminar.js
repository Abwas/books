var Seminar = {
  create : function( name ) {
    return Object.create( Seminar ).init( name );
  },

  name : function() {},

  init : function( name ) {
    return this;
  }
};