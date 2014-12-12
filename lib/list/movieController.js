/*初始化的结果*/
app.controller('movieListController', ['$rootScope', 'movieList',function($rootScope, movieList){
	if(!$rootScope.keywordsObj.movie){
		$rootScope.keywordsObj.movie = '幸福';
	}
	movieList.getData($rootScope.keywordsObj.movie);
}]);