/*构建musicList服务*/
app.factory('musicList', ['$rootScope', '$http', 'ServiceConfig', function($rootScope, $http, ServiceConfig){
	$rootScope.isNoLoaded = true;
	var _MusicList = {		
		getData: function(keywords){
			$rootScope.isNoLoaded = true;
			$http.jsonp(ServiceConfig.music_search + '?callback=musicSearch&count=10&q=' + keywords);
			
			window.musicSearch = function(data){
				$rootScope.isNoLoaded = false;
				if(data.musics && data.musics.length){
					$rootScope.musicList = data.musics;	
				}
			};
		}
	};
	
	return _MusicList;
}]);