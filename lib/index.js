var app = angular.module('app', ['ngRoute']);


app.config(['$routeProvider', function ($routeProvider) {
//	$locationProvider.html5Mode(true); 
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
	};
});

app.controller('BookDetailController', function($http, $scope, $location){
	var id = $location.path().split('/book/')[1] || '';
	$http.jsonp(window.CONFIG_SERVER.book_search_id + '' + id + '?callback=showBookDeatil');
	window.showBookDeatil = function(data){
		$scope.data = data;
	};
});


app.controller('SearchController', function($http, $scope, $location){
	var path = $location.path();
	$scope.search = function(){
		var value = document.getElementById('search_input').value;
		console.log(value);
		console.log(path);
		//图书搜索
		if(path.indexOf('/list/book') !== -1 || path === '/'){
			console.log(window.CONFIG_SERVER.book_search + '?callback=searchBookList&count=10&q=' + value);
			$http.jsonp(window.CONFIG_SERVER.book_search + '?callback=searchBookList&count=10&q=' + value);
			window.searchBookList = function(data){
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
			};
		}
	};
});




