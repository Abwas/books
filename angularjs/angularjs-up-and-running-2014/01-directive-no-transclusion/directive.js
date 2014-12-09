(function() {

  'use strict';

  angular
    .module( 'stockMarketApp' )
    .directive( 'stockWidget', stockWidget );

  stockWidget.$inject = [];

  function stockWidget() {
    return {
      templateUrl : 'stock.html',
      restrict : 'A',
      scope : {
        stockData : '='
      },
      link : function( $scope, $element, $attrs ) {
        $scope.getChange = function( stock ) {
          return Math.ceil((( stock.price - stock.previous ) / stock.previous ) * 100 );
        };
      }
    };  
  }
}());
