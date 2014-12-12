/*构建BookList服务*/
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
}]);