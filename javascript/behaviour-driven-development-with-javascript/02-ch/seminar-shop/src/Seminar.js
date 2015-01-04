var VAT_RATE = 1.2;

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

  grossPrice : function() {
    return this.netPrice() * VAT_RATE;
  },

  init : function( name, price ) {
    this._name = name;
    this._price = price;
    return this;
  }
};