module.exports = function($rootScope, CartService) {     
     
      return {
        restrict: "E",
        templateUrl: 'views/cartCount.html',
        link: function(scope, elem, attrs) {      
			$rootScope.count = CartService.count();
        }      
      }
 }
