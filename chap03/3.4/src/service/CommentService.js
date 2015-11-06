module.exports= function($http) {
  	 this.getComments = function(id) {
  	    return $http({
  	    	method: 'GET',
  	    	url: '/api/goods/' + id + '/comments'
  	    });
  	 };
  	 
  	 this.addComment = function(id, comment) {
  	 	return $http({
  	 		method: 'POST',
  	 		data: comment,
  	 		url: '/api/goods/' + id + '/comments'  	 	
  	 	});  	 
  	 }
  }
