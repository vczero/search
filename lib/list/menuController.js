
define('list/MenuController', function(require, exports, module){
	var app = require('global');
	app.controller('MenuController', function($scope, $location){
		$scope.bookSearch = function(){
			$location.path('/book');
		};
		
		$scope.musicSearch = function(){
			$location.path('/music');
		};
		
		$scope.movieSearch = function(){
			$location.path('/movie');
		};
		
	});
	
});
