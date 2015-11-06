var angular = require('angular');
var GoodService = require('./service/GoodService');
var CartService = require('./service/CartService');
var CommentService = require('./service/CommentService');
var GoodsController = require('./controller/GoodController');
var DetailController = require('./controller/DetailController');
var CartController = require('./controller/CartController');
var CommentController = require('./controller/CommentController');
var newLine = require('./filter/newline');
var CartCount = require('./directive/CartCount');

angular.module('store', [ require('angular-route'), require('angular-sanitize'), require('angular-cookies')])
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
  .directive('cartCount', CartCount)   
  .service('GoodService', GoodService)
  .service('CartService', CartService)  
  .service('CommentService', CommentService)
  .controller('GoodsController', GoodsController)
  .controller('DetailController', DetailController)
  .controller('CartController', CartController)
  .controller('CommentController', CommentController)
  .filter("newLine", newLine);
