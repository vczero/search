
/*初始化的结果*/
app.controller('musicListController', function($http, $scope, $rootScope, ServiceConfig){
	$http.jsonp(ServiceConfig.music_search + '?callback=musicSearch&count=10&q=刘德华');
	$rootScope.isNoLoaded = true;
	window.musicSearch = function(data){
		$rootScope.isNoLoaded = false;
		console.log(data);
		if(data.musics && data.musics.length){
			$scope.musicList = data.musics;	
		}
	};
});
