/*构建movieList服务*/
app.factory('movieList', ['$rootScope', '$http', 'ServiceConfig', function($rootScope, $http, ServiceConfig){
	$rootScope.isNoLoaded = true;
	var _MovieList = {		
		getData: function(keywords){
			$rootScope.isNoLoaded = true;
			$http.jsonp(ServiceConfig.movie_search + '?callback=movieSearch&count=5&q=' + keywords);
			
			window.movieSearch = function(data){
				$rootScope.isNoLoaded = false;
				if(data.subjects && data.subjects.length) {
					$rootScope.movieList = data.subjects;
				}
			};
		}
	};
	
	return _MovieList;
}]);