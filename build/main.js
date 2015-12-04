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
;

app.directive('loading', function(){
	
	var str = '<div id="loading" ng-show="isNoLoaded"><img src="../imgs/loading.gif" /></div>';
	return {
        restrict: 'AE',
        template: str,
        replace: true
    };
	
});
;
app.directive('tip', function(){
	var str = '<div id="loading" ng-show="isNoLoaded"><img src="../imgs/loading.gif" /></div>';
	return {
        restrict: 'AE',
        template: str,
        replace: true
    };
	
});
;/*构建BookList服务*/
app.factory('bookList', ['$rootScope', '$http', 'ServiceConfig', function($rootScope, $http, ServiceConfig){
	$rootScope.isNoLoaded = true;
	var _BookList = {		
		getData: function(keywords){
			$rootScope.isNoLoaded = true;
			$http.jsonp(ServiceConfig.book_search + '?callback=searchBookList&count=10&q=' + keywords);
			window.searchBookList = function(data){
				if(data.books.length){
					$rootScope.isNoLoaded = false;
				}
				var list = [];
				for(var i = 0; i < data.books.length; i++){
					var book = data.books[i];
					var item = {
						id: book.id,
						image: book.image,
						origin_title: book.title || '书名未共享',
						author: book.author[0] || '作者未知',
						publisher: book.publisher || '出版社未知',
						price: book.price.split('.')[0] || '未知',
						pages: book.pages
					};
					list.push(item);
				}
				$rootScope.bookList = list;
			};
		}
	};
	
	return _BookList;
}]);;/*构建movieList服务*/
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
}]);;/*构建musicList服务*/
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
}]);;/*初始化图书列表页*/
app.controller('BookListController', ['$rootScope', 'bookList',function($rootScope, bookList){
	if(!$rootScope.keywordsObj.book){
		$rootScope.keywordsObj.book = 'C语言';
	}
	bookList.getData($rootScope.keywordsObj.book);
}]);


/*图书详情页*/
app.controller('BookDetailController', ['$rootScope', '$http', '$scope', '$location', 'ServiceConfig',function($rootScope, $http, $scope, $location, ServiceConfig){
	var bookId = $location.path().split('/book/')[1] || '';
	$rootScope.isNoLoaded = true;
	$http.jsonp(ServiceConfig.book_search_id + '' + bookId + '?callback=showBookDeatil');
	window.showBookDeatil = function(data){
		$rootScope.isNoLoaded = false;
		$scope.data = data;
	};
}]);;app.controller('MenuController', ['$scope', '$location',function($scope, $location){
	$scope.bookSearch = function(){
		$location.path('/book');
	};
	
	$scope.musicSearch = function(){
		$location.path('/music');
	};
	
	$scope.movieSearch = function(){
		$location.path('/movie');
	};
	
}]);;/*初始化的结果*/
app.controller('movieListController', ['$rootScope', 'movieList',function($rootScope, movieList){
	if(!$rootScope.keywordsObj.movie){
		$rootScope.keywordsObj.movie = '幸福';
	}
	movieList.getData($rootScope.keywordsObj.movie);
}]);;
/*初始化的结果*/
app.controller('musicListController', ['$rootScope', 'musicList',function($rootScope, musicList){
	
	if(!$rootScope.keywordsObj.music){
		$rootScope.keywordsObj.music = '刘德华';
	}
	musicList.getData($rootScope.keywordsObj.music);
}]);
;/*负责搜索结果的导向*/
var Search = function($scope, $rootScope, $location, bookList, musicList, movieList){
	var path = $location.path();
	$rootScope.isNoLoaded = false;
//	document.getElementById('search_input').focus();
	//跳回列表页
	$scope.search = function(){
		var keywords = $scope.keywords;
		if(path.indexOf('/book') !== -1){
			if(keywords){
				$rootScope.keywordsObj.book = keywords;
			}
			$location.path('/book');
			
		}else if(path.indexOf('/music') !== -1){	
			if(keywords){
				$rootScope.keywordsObj.music = keywords;
			}
			$location.path('/music');
			
		}else if(path.indexOf('/movie') !== -1){
			if(keywords){
				$rootScope.keywordsObj.movie = keywords;
			}
			$location.path('/movie');
		}
	};
};
Search.$inject = ['$scope', '$rootScope', '$location', 'bookList', 'musicList', 'movieList'];
app.controller('Search', Search);;/*仅负责搜索页面的打开*/
var SearchController = function($scope, $rootScope, $location){
	var path = $location.path();	
	$scope.goToSearch = function(){
		if(path.indexOf('/book') !== -1 || path === '/'){
			$location.path('/search/book');
			
		}else if(path.indexOf('/music') !== -1 || path === '/music'){
			$location.path('/search/music');
			
			
		}else if(path.indexOf('/movie') !== -1 || path === '/movie'){
			$location.path('/search/movie');
		}
	};
	
};

SearchController.$inject = ['$scope', '$rootScope', '$location'];
app.controller('SearchController', SearchController);
