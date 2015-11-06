module.exports = function($scope, CommentService, $routeParams) {
     $scope.comments = [];
     $scope.comment = {};
     
     CommentService.getComments($routeParams.id).success(function(response, status, config, headers){
     	$scope.comments = response;     
     });
     
     $scope.addComment = function() {
     	var comment = $scope.comment;
     	console.log(comment);
     	
     	comment.errors = {
	     	writer: comment.writer ? false: true,
	     	desc: comment.desc ? false: true     	
     	}
     	
     	
     	if(!comment.errors.writer && !comment.errors.desc) {
     		delete comment.errors;
     	   
		 	CommentService.addComment($routeParams.id, comment).success(function(response, status, config, headers){
		 		$scope.comments.push(response);
		 		$scope.comment= {};
		 	}).error(function(response, status, config, headers){
		 		alert("Error");     	
		 	});
     	}
     }
 
 }
