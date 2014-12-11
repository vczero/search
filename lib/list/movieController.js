
define('list/movieController', function(require, exports, module){
	var app = require('global');
	/*初始化的结果*/
	app.controller('movieListController', function($rootScope, movieList){
		if(!$rootScope.keywordsObj.movie){
			$rootScope.keywordsObj.movie = '笑傲江湖';
		}
		movieList.getData($rootScope.keywordsObj.movie);
	});
});



