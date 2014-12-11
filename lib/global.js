
/*全局变量的配置*/
define('global', function(require, exports, module){
	var angular = require('angular');
	var app = angular.module('app', ['ui.router']);
	module.exports = app;
});