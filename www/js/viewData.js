//BackUp File
// function addCIR(){
		// window.location="addCIR.html";
// }

app.controller("viewDataController",["$scope","viewDataFactory", function($scope,viewDataFactory) {
	screen.orientation.lock('portrait');
	$('header').show();
	$scope.cirContainerList=viewDataFactory.cirContainerList;
}]);

app.factory("viewDataFactory",["$rootScope", "$http", "$q",function($rootScope, $http, $q){
	//here list of container will be displayed when user is connected
	this.cirContainerList=[
		 { containerNumber:'ABC1234567',isoSizeType:'20G0',signal:'GREEN', 	operator:'MSK/Mearsk'		, 	cirType:'Box', 	sizeInFeet:20}
		,{ containerNumber:'DEF1234567',isoSizeType:'40G0',signal:'RED',	operator:'CMA/CMA'			,	cirType:'Unit', sizeInFeet:40}
		,{ containerNumber:'GHI1234567',isoSizeType:'45G0',signal:'GREEN',	operator:'3AL/3AL'			,	cirType:'Both', sizeInFeet:45}
		,{ containerNumber:'LKJ1234567',isoSizeType:'20G0',signal:'RED',	operator:'SEA/SEACO'		,	cirType:'Unit', sizeInFeet:20}
		,{ containerNumber:'UIO1234567',isoSizeType:'45G0',signal:'GREEN',	operator:'TE1/TESTREPAIR'	,	cirType:'Both', sizeInFeet:45}
	];
	return this;
}]);