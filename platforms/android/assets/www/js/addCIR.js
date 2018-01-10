app.controller("addCIRController",["$scope","viewDataFactory", function($scope,viewDataFactory){
	$scope.model = {};
	//provide isoSizeType value in page
	$scope.isoSizeType=[
		'20GP'
		,'42G0'
		,'45G0'
	];
	//provide cirType value in page
	$scope.cirType=[
		'Box'
		,'Unit'
		,'Both'
	];
	$scope.cirOperator=[
		 'MSK/Mearsk'	
		,'CMA/CMA'		
		,'3AL/3AL'		
		,'SEA/SEACO'	
		,'TE1/TESTREPAIR'
	];
	//to save cir data manually in database
	$scope.save=function(){
		var containerSize=parseInt($scope.isoSizeTypeData.substr(0,2));
		if(containerSize=>20 || containerSize<40){
			$scope.model.sizeInFeet=$scope.isoSizeTypeData.substr(0,2);
		}else if(containerSize=>40 || containerSize<=45){
			$scope.model.sizeInFeet=$scope.isoSizeTypeData.substr(0,2);
		}else{
			$scope.model.sizeInFeet=$scope.isoSizeTypeData.substr(0,2);
		}
		$scope.model.cirDate=$scope.cirDateData;
		$scope.model.containerNumber=$scope.containerNumberData;
		$scope.model.operator=$scope.operator;
		$scope.model.isoSizeType=$scope.isoSizeTypeData;
		$scope.model.cirType=$scope.cirTypeData;
		viewDataFactory.cirContainerList.push($scope.model);
		console.log(viewDataFactory.cirContainerList);
		window.location="#/viewData";
		screen.orientation.lock('portrait');
	}
}]);