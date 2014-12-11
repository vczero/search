
/*requirejs配置*/
requirejs.config({
	baseUrl: './../lib/',
  	paths: {
    	angular: '../js/angular.min',
    	angular_router: '../js/angular-ui-router'
  	},
  	shim: {
  		angular : { exports : 'angular'},
  		angular_router:{ exports: 'angular_router'}
  	}
});


require(['global', 'rootScope', 'router', 'serviceUrl' ], function(global, rootScope, router, serviceUrl){
	console.log(global);
});
