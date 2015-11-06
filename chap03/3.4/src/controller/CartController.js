module.exports = function($scope, CartService) {
  	 	$scope.carts = CartService.getCart();
  	 	
  	 	$scope.sum = function() {  	 		
  	 		var sum =0;  	 		
  	 		$scope.carts.forEach(function(val){
  	 			sum += val.price * val.qty  	 		
  	 		});
  	 		return sum;
  	 	};
      
      $scope.removeFromCart = function(good) {
         $scope.carts = CartService.remove(good);      	 
      }
        	 	
  }
