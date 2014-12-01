

var app = angular.module('app', []);

app.controller('BookListController', function($http, $scope){
	$http.jsonp('https://api.douban.com/v2/book/search?callback=TEST&q=C%E8%AF%AD%E8%A8%80');
	
	window.TEST = function(data){
		var list = [];
		for(var i = 0; i < data.books.length; i++){
			var book = data.books[i];
			var item = {
				image: book.image,
				origin_title: book.origin_title || '书名未共享',
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
