/*仅负责搜索页面的打开*/
var SearchController = function($scope, $rootScope, $location){
	var path = $location.path();	
	$scope.goToSearch = function(){
		if(path.indexOf('/book') !== -1 || path === '/'){
			$location.path('/search/book');
			
		}else if(path.indexOf('/music') !== -1 || path === '/music'){
			$location.path('/search/music');
			
			
		}else if(path.indexOf('/movie') !== -1 || path === '/movie'){
			$location.path('/search/movie');
		}
	};
	
};

SearchController.$inject = ['$scope', '$rootScope', '$location'];
app.controller('SearchController', SearchController);
