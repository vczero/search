var app = angular.module('app', ['ngRoute']);


app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/list/book', {
            templateUrl: 'view/book_list.html',
            controller: 'BookListController'
        })
        .when('/list/book/:id', {
            templateUrl: 'view/book_detail.html',
            controller: 'BookDetailController'
        })
        .otherwise({
            redirectTo: '/',
            templateUrl: 'view/book_list.html',
            controller: 'BookListController'
        });
}]);

app.controller('BookListController', function($http, $scope){
	$http.jsonp(window.CONFIG_SERVER.book_search + '?callback=showBookList&count=10&q=C%E8%AF%AD%E8%A8%80');
	window.showBookList = function(data){
		if(data.books){
			document.getElementById('loading').style.visibility = 'hidden';
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
		$scope.list = list;
	}
});

app.controller('BookDetailController', function($http, $scope, $location){
	var id = $location.path().split('/book/')[1] || '';
	$http.jsonp(window.CONFIG_SERVER.book_search_id + '' + id + '?callback=showBookDeatil');
	window.showBookDeatil = function(data){
		$scope.data = data;
	};
});
