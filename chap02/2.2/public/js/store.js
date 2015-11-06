angular.module('store', [])
  .controller('GoodsController', function($scope) {
  
  		$scope.goods = [
  			{ id: 1, name: "커피", price: 3000,  img: 'coffee.jpg'},
			{ id: 2, name: "PS4", price: 400000, img: 'ps4.jpg' },
			{ id: 3, name: "자전거", price: 200000, img: 'bicycle.jpg' }  		
  		]  
  });
