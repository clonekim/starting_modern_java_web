module.exports = function($http) {
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
   };
