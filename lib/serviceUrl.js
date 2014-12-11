

define('serviceUrl', function(require, exports, module){
	var app = require('global');
	/*服务的URL配置*/
	app.constant('ServiceConfig', {
		book_search: 'https://api.douban.com/v2/book/search',
		book_search_id: 'https://api.douban.com/v2/book/',
		
		music_search: 'https://api.douban.com/v2/music/search',
		music_search_id: 'https://api.douban.com/v2/music/',
		
		movie_search: 'https://api.douban.com/v2/movie/search',
		movie_search_id: 'https://api.douban.com/v2/movie/subject/'
	});
});
