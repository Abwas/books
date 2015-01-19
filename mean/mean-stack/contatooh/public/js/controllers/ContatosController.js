angular
  .module( 'contatooh' )
  .controller( 'ContatosController', function( $scope, $http ) {

    $scope.total = 0;
    $scope.incrementa = function() {
      $scope.total++;
    };
    $scope.contatos = [];
    $scope.filtro = '';
    $http.get( '/contatos' )
      .success( function( data, status, headers, config ) {
        $scope.contatos = data;
      })
      .error( function( statusText ) {
        console.log( 'Não foi possível obter a lista de contatos' );
        console.log( statusText, status, headers, config );
      });

  });