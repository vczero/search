
app.directive('tip', function(){
	var str = '<div id="loading" ng-show="isNoLoaded"><img src="../imgs/loading.gif" /></div>';
	return {
        restrict: 'AE',
        template: str,
        replace: true
    };
	
});
