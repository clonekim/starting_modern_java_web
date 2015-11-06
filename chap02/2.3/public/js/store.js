angular.module('store', [ 'ngRoute'])
  .config(function($routeProvider) {
    
      $routeProvider
      .when('/:id', {
        templateUrl: 'views/detail.html',
        controller: 'DetailController'  
      })
      .otherwise({
        templateUrl: 'views/index.html',
        controller: 'GoodsController'
      });
      
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
  .controller('GoodsController', function($scope, GoodService) {
  
  		$scope.goods = [];  		
  	
  			GoodService.getData().success(function(response, status, config, headers) {
  				
  				console.log('Response from server: ', response);
  				$scope.goods = response;
  			}).error(function(response, status, config, headers){
  				alert("Error");
  			});  		  		
  })
  .controller('DetailController', function($scope, GoodService, $routeParams) {
      $scope.good = {};
      
      GoodService.getDetail($routeParams.id).success(function(response, status, config, headers) {
          console.log('Detail from server: ', response);         
          $scope.good = response;
      }).error(function(response, status, config, headers){
		alert("Error");
      });
      
  })
  .filter("newLine", function() {
      return function(text){
      	 return text?  text.replace(/\n/g, '<br/>'): "";
	 }  
  })  
  ;
