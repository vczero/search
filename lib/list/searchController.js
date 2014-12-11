/*搜索*/
app.controller('SearchController', function($scope, $rootScope, $location, bookList, musicList, movieList){
	var path = $location.path();
	$scope.search = function(){
		var keywords = $scope.keywords;
		if(path.indexOf('/book') !== -1 || path === '/'){
			if(keywords){
				$rootScope.keywordsObj.book = keywords;
			}
			bookList.getData($rootScope.keywordsObj.book);
			
		}else if(path.indexOf('/music') !== -1 || path === '/music'){
			if(keywords){
				$rootScope.keywordsObj.music = keywords;
			}
			musicList.getData($rootScope.keywordsObj.music);
			
		}else if(path.indexOf('/movie') !== -1 || path === '/movie'){
			if(keywords){
				$rootScope.keywordsObj.movie = keywords;
			}
			movieList.getData($rootScope.keywordsObj.movie);
		}
	};
});