angular.module('store', [ 'ngRoute', 'ngSanitize', 'ngCookies'])
  .config(function($routeProvider) {
    
      $routeProvider
      .when('/cart', {
      	templateUrl: 'views/cart.html',
      	controller: 'CartController'
      })
      .when('/:id', {
        templateUrl: 'views/detail.html',
        controller: 'DetailController'  
      })
      .otherwise({
        templateUrl: 'views/index.html',
        controller: 'GoodsController'
      });
      
   })
  .directive('cartCount', function($rootScope, CartService) {     
     
      return {
        restrict: "E",
        templateUrl: 'views/cartCount.html',
        link: function(scope, elem, attrs) {      
			$rootScope.count = CartService.count();
        }      
      }
  })   
  .service('GoodService', function($http) {
     this.getData = function() {
     	return $http({
     		method: 'GET',
     		url: '/api/goods'
     	});
     };
     
     this.getDetail = function(id) {
        return $http({
          method: 'GET',
          url: '/api/goods/' + id
        });
     }
   })
  .service('CartService', function($rootScope, $cookies){
  
  		  		  	
  	    this.addToCart = function(good) {
  	   	  var find = false;
  	   	  var carts = this.getCart();
  	   	  
  	   	  carts.forEach(function(val) {
  	   	  	  if(val.id == good.id) {
  	   	  	  	val.qty += good.qty
  	   	  	  	find  = true
  	   	  	  }  	   	    	   	  	
  	   	  });
  	   	  
  	   	  if(!find) {
  	   	     carts.push(good);  	   	    
  	   	  }
   	     
   	     $cookies.putObject('carts', carts);   	     
   	     $rootScope.count = this.count();
  	   };
  	   
  	   this.getCart = function() {
  	   	  return $cookies.getObject('carts') || [];
  	   };
  	   
  	   this.count = function() {
  	   	  var cnt = 0;
  	   	  var carts = this.getCart();
  		  carts.forEach(function(val) {  cnt += val.qty ; });
  		  return cnt;
  	   };
  	   
  	   
  	   this.remove = function(good) {
  	       var carts = this.getCart();
  	       if(carts.length == 1) {
  	          carts = [];
  	       }else {
  	       	 carts.forEach(function(val, index) {
  	       	 	if(val.id == good.id) {
  	       			carts.splice(index, 1);
  	       		}
  	          });  	       
  	       }  	       
  	       
     	  $cookies.putObject('carts', carts);
 	      $rootScope.count = this.count();
  	      return carts;
  	   }
  	   
  })  
  .controller('GoodsController', function($scope, GoodService) {
  
  		$scope.goods = [];  		
  	
		GoodService.getData().success(function(response, status, config, headers) {
			
			console.log('Response from server: ', response);
			$scope.goods = response;
		}).error(function(response, status, config, headers){
			alert("Error");
		});  	
			  		
  })
  .controller('DetailController', function($scope, GoodService, CartService,  $routeParams) {
      
      $scope.good = {};
      
      GoodService.getDetail($routeParams.id).success(function(response, status, config, headers) {
          console.log('Detail from server: ', response);         
          $scope.good = response;
      }).error(function(response, status, config, headers){
		  alert("Error");
      });
      
      $scope.addToCart = function(good, qty) {
      	good.qty = qty;
      	CartService.addToCart(good);
      };

      
  })
  .controller('CartController', function($scope, CartService) {
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
        	 	
  })
  .filter("newLine", function() {
      return function(text){
      	 return text?  text.replace(/\n/g, '<br/>'): "";
	 }  
  })  
  ;
