/*搜索*/
app.controller('SearchController', function($scope, $location, bookList){
	var path = $location.path();
	$scope.search = function(){
		var keywords = $scope.keywords;
		if(path.indexOf('/book') !== -1 || path === '/'){
			bookList.getData(keywords);
		}else if(path.indexOf('/music') !== -1 || path === '/music'){
			
		}
	};
});