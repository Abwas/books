var Seminar = {
  create : function( name, price ) {
    return Object.create( Seminar ).init( name, price );
  },

  name : function() {
    return this._name;
  },

  netPrice : function() {
    return this._price;
  },

  init : function( name, price ) {
    this._name = name;
    this._price = price;
    return this;
  }
};