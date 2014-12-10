/*初始化图书列表页*/
app.controller('BookListController', function($scope, bookList){
	bookList.getData('C语言');
});


/*图书详情页*/
app.controller('BookDetailController', function($rootScope, $http, $scope, $location, ServiceConfig){
	var bookId = $location.path().split('/book/')[1] || '';
	$rootScope.isNoLoaded = true;
	$http.jsonp(ServiceConfig.book_search_id + '' + bookId + '?callback=showBookDeatil');
	window.showBookDeatil = function(data){
		$rootScope.isNoLoaded = false;
		$scope.data = data;
	};
});