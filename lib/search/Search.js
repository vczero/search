/*负责搜索结果的导向*/
var Search = function($scope, $rootScope, $location, bookList, musicList, movieList){
	var path = $location.path();
	$rootScope.isNoLoaded = false;
//	document.getElementById('search_input').focus();
	//跳回列表页
	$scope.search = function(){
		var keywords = $scope.keywords;
		if(path.indexOf('/book') !== -1){
			if(keywords){
				$rootScope.keywordsObj.book = keywords;
			}
			$location.path('/book');
			
		}else if(path.indexOf('/music') !== -1){	
			if(keywords){
				$rootScope.keywordsObj.music = keywords;
			}
			$location.path('/music');
			
		}else if(path.indexOf('/movie') !== -1){
			if(keywords){
				$rootScope.keywordsObj.movie = keywords;
			}
			$location.path('/movie');
		}
	};
};
Search.$inject = ['$scope', '$rootScope', '$location', 'bookList', 'musicList', 'movieList'];
app.controller('Search', Search);