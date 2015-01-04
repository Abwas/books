var Seminar = {
  create : function( name ) {
    return Object.create( Seminar ).init( name );
  },

  name : function() {
    return this._name;
  },

  init : function( name ) {
    this._name = name;
    return this;
  }
};