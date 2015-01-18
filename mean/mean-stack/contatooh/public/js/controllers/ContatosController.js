angular
  .module( 'contatooh' )
  .controller( 'ContatosController', function( $scope ) {

    $scope.total = 0;
    $scope.incrementa = function() {
      $scope.total++;
    };
    $scope.contatos = [
      {
        _id   : 1,
        nome  : 'Contato Exemplo 1',
        email : 'cont1@empresa.com.br'
      },
      {
        _id   : 2,
        nome  : 'Contato Exemplo 2',
        email : 'cont2@empresa.com.br'
      },
      {
        _id   : 3,
        nome  : 'Contato Exemplo 3',
        email : 'cont3@empresa.com.br'
      }
    ];
    $scope.filtro = '';

  });