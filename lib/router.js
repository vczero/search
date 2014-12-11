define('router', function(require, exports, module){
	var app = require('global');
	app.config(function($stateProvider, $urlRouterProvider){
		/*URL路由*/
		$urlRouterProvider.otherwise("/");
		/*状态配置*/
		$stateProvider
			//首页
	        .state('index',{
	        	url: '/',
	        	views:{
	        		header:{
	        			templateUrl: '../html/views/list_header.html',
	        			controller: 'SearchController'
	        		},
	        		container:{
	        			templateUrl: '../html/views/list_book.html',
	        			controller: 'BookListController'
	        		},
	        		footer:{
	        			templateUrl: '../html/views/list_footer.html',
	        			controller: ''
	        		}
	        	}
	        })
	        //book list
	        .state('book_list',{
	        	url: '/book',
	        	views:{
	        		header:{
	        			templateUrl: '../html/views/list_header.html',
	        			controller: 'SearchController'
	        		},
	        		container:{
	        			templateUrl: '../html/views/list_book.html',
	        			controller: 'BookListController'
	        		},
	        		footer:{
	        			templateUrl: '../html/views/list_footer.html',
	        			controller: ''
	        		}
	        	}
	        })
	        // book detail
	        .state('book_detail',{
	        	url: '/book/:id',
	        	views:{
	        		header:{
	        			templateUrl: '../html/views/list_header.html',
	        			controller: 'SearchController'
	        		},
	        		container:{
	        			templateUrl: '../html/views/detail_book.html',
	        			controller: 'BookDetailController'
	        		},
	        		footer:{
	        			templateUrl: '../html/views/list_footer.html',
	        			controller: ''
	        		}
	        	}
	        })
	        // music list
	        .state('music_lsit',{
	        	url: '/music',
	        	views:{
	        		header:{
	        			templateUrl: '../html/views/list_header.html',
	        			controller: 'SearchController'
	        		},
	        		container:{
	        			templateUrl: '../html/views/list_music.html',
	        			controller: 'musicListController'
	        		},
	        		footer:{
	        			templateUrl: '../html/views/list_footer.html',
	        			controller: ''
	        		}
	        	}
	        })      
	        // movie list
	        .state('movie_lsit',{
	        	url: '/movie',
	        	views:{
	        		header:{
	        			templateUrl: '../html/views/list_header.html',
	        			controller: 'SearchController'
	        		},
	        		container:{
	        			templateUrl: '../html/views/list_movie.html',
	        			controller: 'movieListController'
	        		},
	        		footer:{
	        			templateUrl: '../html/views/list_footer.html',
	        			controller: ''
	        		}
	        	}
	        });
	});
});