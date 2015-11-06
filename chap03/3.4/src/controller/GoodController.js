module.exports =function($scope, GoodService) {
  
	$scope.goods = [];  		

	GoodService.getData().success(function(response, status, config, headers) {			
		//console.log('Response from server: ', response);
		$scope.goods = response;
	}).error(function(response, status, config, headers){
		alert("Error");
	});  	
		  		
  }
