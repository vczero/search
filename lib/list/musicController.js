
/*初始化的结果*/
app.controller('musicListController', function($rootScope, musicList){
	
	if(!$rootScope.keywordsObj.music){
		$rootScope.keywordsObj.music = '刘德华';
	}
	musicList.getData($rootScope.keywordsObj.music);
});
