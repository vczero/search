app.controller('MenuController', ['$scope', '$location',function($scope, $location){
	$scope.bookSearch = function(){
		$location.path('/book');
	};
	
	$scope.musicSearch = function(){
		$location.path('/music');
	};
	
	$scope.movieSearch = function(){
		$location.path('/movie');
	};
	
}]);