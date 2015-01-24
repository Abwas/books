angular
  .module( 'contatooh' )
  .controller( 'ContatoController', function( $scope, $routeParams, $resource ) {

    // Aqui continua no plural, é a rota no lado do servidor
    var Contato = $resource( '/contatos/:id' );

    if ( $routeParams.contatoId ) {

      Contato
        .get({ id : $routeParams.contatoId }, function( contato ) {
          $scope.contato = contato;
        }, function( erro  ) {
          $scope.mensagem = {
            texto : 'Não foi possível obter o contato.'
          };
          console.log( erro );
        });

    } else {

      $scope.contato = {};

    }

  });