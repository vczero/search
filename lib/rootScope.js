define('rootScope', function(require, exports, module){
	var app = require('global');
	/*$rootScope的相关配置*/
	app.run(function($rootScope){
	    $rootScope.version = '0.1';
	    $rootScope.author = 'vczero';
	    $rootScope.author_alias = '鬼谣';
	    $rootScope.isNoLoaded = true;
	    $rootScope.bookList = []; //当然这是个不好的做法，只因为APP太simple
	    $rootScope.musicList = [];
	    $rootScope.movieList = [];
	    $rootScope.keywordsObj = {
	    	book: '',
	    	music: '',
	    	movie: ''
	    };
	});
});