
/*构建movieList服务*/
define('movieList', function(require, exports, module){
	var app = require('global');
	app.factory('movieList', function($rootScope, $http, ServiceConfig){
		$rootScope.isNoLoaded = true;
		var _MovieList = {		
			getData: function(keywords){
				$rootScope.isNoLoaded = true;
				$http.jsonp(ServiceConfig.movie_search + '?callback=movieSearch&count=10&q=' + keywords);
				
				window.movieSearch = function(data){
					$rootScope.isNoLoaded = false;
					if(data.subjects && data.subjects.length){
						$rootScope.movieList = data.subjects;	
					}
					console.log(data.subjects)
				};
			}
		};
		
		return _MovieList;
	});
});
