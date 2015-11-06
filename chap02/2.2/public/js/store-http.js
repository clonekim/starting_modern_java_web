angular.module('store', [])
  .service('GoodService', function($http) {
     this.getData = function() {
     	return $http({
     		method: 'GET',
     		url: '/api/goods'
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
  		
  });
