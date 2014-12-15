var app = angular.module('app', ['ui.router']);

/*$rootScope的相关配置*/
app.run(['$rootScope', function($rootScope){
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
}]);

/*服务的URL配置*/
app.constant('ServiceConfig', {
	book_search: 'https://api.douban.com/v2/book/search',
	book_search_id: 'https://api.douban.com/v2/book/',
	
	music_search: 'https://api.douban.com/v2/music/search',
	music_search_id: 'https://api.douban.com/v2/music/',
	
	movie_search: 'https://api.douban.com/v2/movie/search',
	movie_search_id: 'https://api.douban.com/v2/movie/subject/'
});

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
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
        })
        
        .state('search',{
        	url: '/search/:type',
        	views:{
        		header:{
        			templateUrl: '../html/views/search.html',
        			controller: 'Search'
        		},
        		container:{
        			templateUrl: '',
        			controller: ''
        		},
        		footer:{
        			templateUrl: '',
        			controller: ''
        		}
        	}
        });
}]);
