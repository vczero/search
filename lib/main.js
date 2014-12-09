
var app = angular.module('app', ['ngRoute']);
window.scrollTo(0, 0);

app.run(function($rootScope){
    $rootScope.version = '0.1';
    $rootScope.author = 'vczero';
    $rootScope.author_alias = '鬼谣';
    $rootScope.isNoLoaded = true;
    $rootScope.rootList = []; //当然这是个不好的做法，只因为APP太simple
});

/*服务的URL配置*/
app.constant('ServiceConfig', {
	book_search: 'https://api.douban.com/v2/book/search',
	book_search_id: 'https://api.douban.com/v2/book/'
});

/*路由控制*/
app.config(['$routeProvider', function ($routeProvider) { 
    $routeProvider
    	/*图书搜索*/
        .when('/list/book', {
            templateUrl: 'view/book_list.html',
            controller: 'BookListController'
        })
        .when('/list/book/:id', {
            templateUrl: 'view/book_detail.html',
            controller: 'BookDetailController'
        })
        /*音乐搜索*/
        .when('/list/music', {
            templateUrl: 'view/book_list.html',
            controller: 'BookListController'
        })
        /*电影搜索*/
        .when('/list/movie', {
            templateUrl: 'view/book_list.html',
            controller: 'BookListController'
        })
        /*定向到首页*/
        .otherwise({
            redirectTo: '/',
            templateUrl: 'view/book_list.html',
            controller: 'BookListController'
        });
}]);





