module.exports = function($scope, GoodService, CartService,  $routeParams) {
      
      $scope.good = {};
      
      GoodService.getDetail($routeParams.id).success(function(response, status, config, headers) {
         // console.log('Detail from server: ', response);         
          $scope.good = response;
      }).error(function(response, status, config, headers){
		  alert("Error");
      });
      
      $scope.addToCart = function(good, qty) {
      	good.qty = qty;
      	CartService.addToCart(good);
      };

      
  }
