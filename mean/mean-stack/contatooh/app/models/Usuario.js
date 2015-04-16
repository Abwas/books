var mongoose = require( 'mongoose' );

module.exports = function() {
  var schema = mongoose.Schema({
    login : { type : String, required : true, index : { unique : true }},
    nome : { type : Date, default : Date.now }
  });
  return mongoose.model( 'Usuario', schema );
};