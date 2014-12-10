app.controller('MenuController', function($scope, $location){
	$scope.bookSearch = function(){
		$location.path('/list/book');
	};
	
	$scope.musicSearch = function(){
		$location.path('/list/music');
	};
	
	$scope.movieSearch = function(){
		$location.path('/list/movie');
	};
	
});