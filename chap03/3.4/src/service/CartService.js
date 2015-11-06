module.exports = function($rootScope, $cookies){
    		  		  	
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
  	   
}
