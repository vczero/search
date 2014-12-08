var app = angular.module('app', ['ngRoute']);

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

/*构建BookList服务*/
app.factory('bookList', function($rootScope, $http, ServiceConfig){
	$rootScope.isNoLoaded = true;
	var _BookList = {		
		getData: function(keywords){
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
				$rootScope.rootList = list;
			};
		}
	};
	
	return _BookList;
});



/*图书列表页*/
app.controller('BookListController', function($scope, bookList){
	bookList.getData('C语言');
});
/*图书详情页*/
app.controller('BookDetailController', function($rootScope, $http, $scope, $location, ServiceConfig){
	$rootScope.isNoLoaded = true;
	var bookId = $location.path().split('/book/')[1] || '';
	$http.jsonp(ServiceConfig.book_search_id + '' + bookId + '?callback=showBookDeatil');
	window.showBookDeatil = function(data){
		$rootScope.isNoLoaded = false;
		$scope.data = data;
	};
});


/*搜索*/
app.controller('SearchController', function($scope, $location, bookList){
	var path = $location.path();
	$scope.search = function(){
		var keywords = $scope.keywords;
		if(path.indexOf('/list/book') !== -1 || path === '/'){
			bookList.getData(keywords);
		}else if(path.indexOf('/list/music') !== -1 || path === '/music'){
			
		}
	};
});

app.controller('MenuController', function($scope, $location){
	$scope.bookSearch = function(){
		$location.path('/list/book');
	};
	
	$scope.musicSearch = function(){
		$location.path('/list/music');
	};
	
	$scope.movieSearch = function(){
		$location.path('/list/movie');
	};
	
});


//
//app.directive('nprLink', function() {
//return {
//  restrict: 'EA',
//  require: ['^ngModel'],
//  replace: true,
//  scope: {
//    ngModel: '=',
//    play: '&'
//  },
//  templateUrl: '/views/nprListItem.html',
//  link: function(scope, ele, attr) {
//    scope.duration = scope.ngModel.audio[0].duration.$text;
//  }
//}
//});

// simple directive
//app.directive('helloWorld',function(){
//  return {
//      restrict: 'AE',
//      replace: true,
//      template: '<h3>Hello World!</h3>'
//  }
//}); 


//app.directive('helloWorld',function(){
//  return {
//      restrict: 'AE',   
//      replace: true,
//      template: '<p style="background-color:{{color}}"></p>',   
//      link: function(scope,elem,attr){
//          elem.bind('click',function(){
//              elem.css('background-color','white');
//          scope.$apply(function(){
//              scope.color = "white";
//          });
//          });
//          elem.bind('mouseover',function(){
//              elem.css('cursor','pointer');
//          });
//      }
//  }
//});   


//注意到link函数被用在了指令中。它接收三个参数：
//
//scope - 它代表指令被使用的作用域。在上面的例子中它等同于符控制器的作用域。
//elem - 它代表绑定指令的元素的jQlite（jQuery的一个自己）包裹元素。如果你在AngularJS被包含之前就包括了jQuery，
//那么它将变成jQuery包裹元素。由于该元素已经被jQuery/jQlite包裹，我们没有必要将它包含在$()中来进行DOM操作。
//attars - 它代表绑定指令的元素上的属性。例如，如果你在HTML元素上有一些指令形式为：<hello-world some-attribute>
//</hello-world>，你可以在link函数内用attrs.someAttribute来引用这些属性。

//
//app.directive('test',function(){
//  return {
//      compile: function(tElem,attrs){
//          //在这里原则性的做一些DOM转换   
//          return function(scope,elem,attrs){
//           //这里编写link函数
//          }
//      }
//  }
//});   


//改变作用域
//app.directive('helloWorld',function(){
//  return {
//      scope: true, //使用一个继承父作用域的自作用域   ，如果需要隔离的话，值为{}即可
//      restrict: 'AE',
//      replace: true,
//      template: '<h3>Hello World!</h3>'
//  }
//});   

//var editor = elem.find('#editor');  
//
//scope.restore(); //初始化我们的应用控制   
//scope.notes = notesFactory.getAll();//载入笔记  
//
//editor.bind('keyup keydown',function(){
//  scope.noetText = editor.text().trim();
//});  









