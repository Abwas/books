var ID_CONTATO_INC = 3;

module.exports = function( app ) {

  var Contato = app.models.contato;
  var controller = {};

  controller.listaContatos = function( req, res ) {
    Contato
      .find()
      .exec()
      then( function( contatos ) {
        res
          .json( contatos );
      }, function( erro ) {
        console
          .error( erro );
        res
          .status( 500 )
          .json( erro );
      });
  }

  controller.obtemContato = function( req, res ) {

    var idContato = req.params.id;
    
    var contato   = contatos.filter( function( contato ) {
      return contato._id === parseInt( idContato, 10 );
    })[ 0 ];

    contato ? 
      res.json( contato ) :
      res.status( 404 ).send( 'Contato não encontrado' );

  };

  controller.removeContato = function( req, res ) {

    var idContato = req.params.id;
    
    contatos = contatos.filter( function( contato ) {
      return contato._id != idContato;
    });

    res.send( 204 ).end();

  };

  controller.salvaContato = function( req, res ) {

    var contato = req.body;
    contato = contato._id ?
      atualiza( contato ) :
      adiciona( contato );

    res.json( contato );
    
  };

  function adiciona( contatoNovo ) {

    contatoNovo._id = ++ID_CONTATO_INC;
    contatos.push( contatoNovo );
    return contatoNovo;

  }

  function atualiza( contatoAlterar ) {

    contatos = contatos.map( function( contato ) {

      if ( contato._id === contatoAlterar._id ) {
        contato = contatoAlterar;
      }

      return contato;

    });

    return contatoAlterar;

  }

  return controller;

};
