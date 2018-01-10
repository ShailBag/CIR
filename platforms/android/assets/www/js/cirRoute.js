var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider
    .when("/viewData", {
        templateUrl : "viewData.html",
		controller: "viewDataController"
    })
	.when("/addCir", {
        templateUrl : "addCIR.html",
		controller: "addCIRController"
    })
	.when("/calculatedCIR/:Container", {
        templateUrl : "calculatedCIR.html",
		controller: "calculatedCIRController"
    })
	.when("/containerFeet/:ContainerNo/:ID",{
		templateUrl : "threeDView.html",
		controller: "threeDController"
	})
	.when("/sideContainer/:side/:containerNo",{
		templateUrl:"sideContainer.html",
		controller: "containerSideController"
	})
	.when("/doorSideContainer/:side/:containerNo",{
		templateUrl:"doorSideContainer.html",
		controller: "highlightDoorController"
	})
	.when("/frontSideContainer/:side/:containerNo",{
		templateUrl:"frontSideContainer.html",
		controller: "highlightFrontController"
	})
	//route for 20 feet container sides
	.otherwise({			
		redirectTo: '/viewData'
	});
});

app.controller("viewDataController", function($scope) {
	// if(screen.orientation.type=="landscape-primary"||screen.orientation.type=="landscape-secondary"){
		// alert("Rotate your Screen to Portrait!");
		// location.reload();
	// }
	//debugger;
	screen.orientation.lock('portrait');
	$('header').show();
	console.log('viewDataController');
});

app.controller("threeDController",["$scope","viewDataFactory", function($scope,viewDataFactory) {
	// if(screen.orientation.type=="portrait-primary"||screen.orientation.type=="portrait-secondary"){
		// alert("Rotate your Screen to Landscape!");
		// location.reload();
	// }
	//screen.orientation.lock('landscape');
	$scope.currentContainerNumber=(window.location.hash.substr(1)).split('/')[2];
	var containerListLength=viewDataFactory.cirContainerList.length;
	for(var i=0;i<containerListLength;i++){
		if(viewDataFactory.cirContainerList[i].containerNumber==$scope.currentContainerNumber){
			$scope.currentSizeType=viewDataFactory.cirContainerList[i].isoSizeType;
		}
	}
	screen.orientation.lock('portrait');
	$('header').show();
	debugger;
	if(screen.orientation.type=="portrait-primary"||screen.orientation.type=="portrait-secondary"||screen.orientation.type=="portrait"){
		init($scope.currentContainerNumber);
	}
	
	console.log('threeDController');
}]);

//start controller for 20 feet containers
var exterior,interior;
app.controller("highlightRightController",["$scope","viewDataFactory","damageCodesFactory", function($scope,viewDataFactory,damageCodesFactory) {
	screen.orientation.lock('landscape');
	$scope.currentContainerNumber=(window.location.hash.substr(1)).split('/')[3];
	var containerListLength=viewDataFactory.cirContainerList.length;
	for(var i=0;i<containerListLength;i++){
		if(viewDataFactory.cirContainerList[i].containerNumber==$scope.currentContainerNumber){
			$scope.currentSizeType=viewDataFactory.cirContainerList[i].isoSizeType;
		}
	}
	exterior=$('#rightSideX');
	interior=$('#rightSideI');
	$scope.damageCode=function(currentContainerNumber){
		 damageCodesFactory.currentContainerNumber=$scope.currentContainerNumber;
		 damageCodesFactory.currentSizeType=$scope.currentSizeType;
		 damageCodesFactory.damageCodes =$('#selections').html();// angular.toJson($scope.damageCodes);
		 // alert(damageCodesFactory.damageCodes);
		 window.location="#/calculatedCIR/"+currentContainerNumber+"";
	};
	highlightHelper(exterior,interior);
	$('header').hide();
}]);
app.controller("highlightLeftController",["$scope","viewDataFactory","damageCodesFactory", function($scope,viewDataFactory,damageCodesFactory) {
	screen.orientation.lock('landscape');
	$scope.currentContainerNumber=(window.location.hash.substr(1)).split('/')[3];
	var containerListLength=viewDataFactory.cirContainerList.length;
	for(var i=0;i<containerListLength;i++){
		if(viewDataFactory.cirContainerList[i].containerNumber==$scope.currentContainerNumber){
			$scope.currentSizeType=viewDataFactory.cirContainerList[i].isoSizeType;
		}
	}
	exterior=$('#leftSideX');
	interior=$('#leftSideI');
	$scope.damageCode=function(currentContainerNumber){
		 damageCodesFactory.currentContainerNumber=$scope.currentContainerNumber;
		 damageCodesFactory.currentSizeType=$scope.currentSizeType;
		 damageCodesFactory.damageCodes =$('#selections').html();// angular.toJson($scope.damageCodes);
		 // alert(damageCodesFactory.damageCodes);
		 window.location="#/calculatedCIR/"+currentContainerNumber+"";
	};
	highlightHelper(exterior,interior);
	$('header').hide();
}]);
app.controller("highlightTopController",["$scope","viewDataFactory","damageCodesFactory", function($scope,viewDataFactory,damageCodesFactory) {
	screen.orientation.lock('landscape');
	$scope.currentContainerNumber=(window.location.hash.substr(1)).split('/')[3];
	var containerListLength=viewDataFactory.cirContainerList.length;
	for(var i=0;i<containerListLength;i++){
		if(viewDataFactory.cirContainerList[i].containerNumber==$scope.currentContainerNumber){
			$scope.currentSizeType=viewDataFactory.cirContainerList[i].isoSizeType;
		}
	}
	exterior=$('#topSideX');
	interior=$('#topSideI');
	$scope.damageCode=function(currentContainerNumber){
		 damageCodesFactory.currentContainerNumber=$scope.currentContainerNumber;
		 damageCodesFactory.currentSizeType=$scope.currentSizeType;
		 damageCodesFactory.damageCodes =$('#selections').html();// angular.toJson($scope.damageCodes);
		 // alert(damageCodesFactory.damageCodes);
		 window.location="#/calculatedCIR/"+currentContainerNumber+"";
	};
	highlightHelper(exterior,interior);
	$('header').hide();
}]);
app.controller("highlightDoorController",["$scope","viewDataFactory","damageCodesFactory", function($scope,viewDataFactory,damageCodesFactory) {
	screen.orientation.lock('landscape');
	$scope.currentContainerNumber=(window.location.hash.substr(1)).split('/')[3];
	var containerListLength=viewDataFactory.cirContainerList.length;
	for(var i=0;i<containerListLength;i++){
		if(viewDataFactory.cirContainerList[i].containerNumber==$scope.currentContainerNumber){
			$scope.currentSizeType=viewDataFactory.cirContainerList[i].isoSizeType;
		}
	}
	exterior=$('#doorSideX');
	interior=$('#doorSideI');
	$scope.damageCode=function(currentContainerNumber){
		 damageCodesFactory.currentContainerNumber=$scope.currentContainerNumber;
		 damageCodesFactory.currentSizeType=$scope.currentSizeType;
		 damageCodesFactory.damageCodes =$('#selections').html();// angular.toJson($scope.damageCodes);
		 // alert(damageCodesFactory.damageCodes);
		 window.location="#/calculatedCIR/"+currentContainerNumber+"";
	};
	highlightHelper(exterior,interior);
	$('header').hide();
}]);
app.controller("highlightFrontController",["$scope","viewDataFactory","damageCodesFactory", function($scope,viewDataFactory,damageCodesFactory) {
	screen.orientation.lock('landscape');
	$scope.currentContainerNumber=(window.location.hash.substr(1)).split('/')[3];
	var containerListLength=viewDataFactory.cirContainerList.length;
	for(var i=0;i<containerListLength;i++){
		if(viewDataFactory.cirContainerList[i].containerNumber==$scope.currentContainerNumber){
			$scope.currentSizeType=viewDataFactory.cirContainerList[i].isoSizeType;
		}
	}
	exterior=$('#frontSideX');
	interior=$('#frontSideI');
	$scope.damageCode=function(currentContainerNumber){
		 damageCodesFactory.currentContainerNumber=$scope.currentContainerNumber;
		 damageCodesFactory.currentSizeType=$scope.currentSizeType;
		 damageCodesFactory.damageCodes =$('#selections').html();// angular.toJson($scope.damageCodes);
		 // alert(damageCodesFactory.damageCodes);
		 window.location="#/calculatedCIR/"+currentContainerNumber+"";
	};
	highlightHelper(exterior,interior);
	$('header').hide();
}]);
//end controller for 20 feet containers
//start controller for 40 feet containers
var exterior,interior;
app.controller("highlightFortyRightController",["$scope","viewDataFactory","damageCodesFactory", function($scope,viewDataFactory,damageCodesFactory) {
	screen.orientation.lock('landscape');
	$scope.currentContainerNumber=(window.location.hash.substr(1)).split('/')[3];
	var containerListLength=viewDataFactory.cirContainerList.length;
	for(var i=0;i<containerListLength;i++){
		if(viewDataFactory.cirContainerList[i].containerNumber==$scope.currentContainerNumber){
			$scope.currentSizeType=viewDataFactory.cirContainerList[i].isoSizeType;
		}
	}
	exterior=$('#right40SideX');
	interior=$('#right40SideI');
	$scope.damageCode=function(currentContainerNumber){
		 damageCodesFactory.currentContainerNumber=$scope.currentContainerNumber;
		 damageCodesFactory.currentSizeType=$scope.currentSizeType;
		 damageCodesFactory.damageCodes =$('#selections').html();// angular.toJson($scope.damageCodes);
		 // alert(damageCodesFactory.damageCodes);
		 window.location="#/calculatedCIR/"+currentContainerNumber+"";
	};
	highlightHelper(exterior,interior);
	$('header').hide();
}]);
app.controller("highlightFortyLeftController",["$scope","viewDataFactory","damageCodesFactory", function($scope,viewDataFactory,damageCodesFactory) {
	screen.orientation.lock('landscape');
	$scope.currentContainerNumber=(window.location.hash.substr(1)).split('/')[3];
	var containerListLength=viewDataFactory.cirContainerList.length;
	for(var i=0;i<containerListLength;i++){
		if(viewDataFactory.cirContainerList[i].containerNumber==$scope.currentContainerNumber){
			$scope.currentSizeType=viewDataFactory.cirContainerList[i].isoSizeType;
		}
	}
	exterior=$('#left40SideX');
	interior=$('#left40SideI');
	$scope.damageCode=function(currentContainerNumber){
		 damageCodesFactory.currentContainerNumber=$scope.currentContainerNumber;
		 damageCodesFactory.currentSizeType=$scope.currentSizeType;
		 damageCodesFactory.damageCodes =$('#selections').html();// angular.toJson($scope.damageCodes);
		 // alert(damageCodesFactory.damageCodes);
		 window.location="#/calculatedCIR/"+currentContainerNumber+"";
	};
	highlightHelper(exterior,interior);
	$('header').hide();
}]);
app.controller("highlightFortyTopController",["$scope","viewDataFactory","damageCodesFactory", function($scope,viewDataFactory,damageCodesFactory) {
	screen.orientation.lock('landscape');
	$scope.currentContainerNumber=(window.location.hash.substr(1)).split('/')[3];
	var containerListLength=viewDataFactory.cirContainerList.length;
	for(var i=0;i<containerListLength;i++){
		if(viewDataFactory.cirContainerList[i].containerNumber==$scope.currentContainerNumber){
			$scope.currentSizeType=viewDataFactory.cirContainerList[i].isoSizeType;
		}
	}
	exterior=$('#top40SideX');
	interior=$('#top40SideI');
	$scope.damageCode=function(currentContainerNumber){
		 damageCodesFactory.currentContainerNumber=$scope.currentContainerNumber;
		 damageCodesFactory.currentSizeType=$scope.currentSizeType;
		 damageCodesFactory.damageCodes =$('#selections').html();// angular.toJson($scope.damageCodes);
		 // alert(damageCodesFactory.damageCodes);
		 window.location="#/calculatedCIR/"+currentContainerNumber+"";
	};
	highlightHelper(exterior,interior);
	$('header').hide();
}]);
app.controller("highlightFortyBottomController",["$scope","viewDataFactory","damageCodesFactory", function($scope,viewDataFactory,damageCodesFactory) {
	screen.orientation.lock('landscape');
	$scope.currentContainerNumber=(window.location.hash.substr(1)).split('/')[3];
	var containerListLength=viewDataFactory.cirContainerList.length;
	for(var i=0;i<containerListLength;i++){
		if(viewDataFactory.cirContainerList[i].containerNumber==$scope.currentContainerNumber){
			$scope.currentSizeType=viewDataFactory.cirContainerList[i].isoSizeType;
		}
	}
	exterior=$('#bottom40SideX');
	interior=$('#bottom40SideI');
	$scope.damageCode=function(currentContainerNumber){
		 damageCodesFactory.currentContainerNumber=$scope.currentContainerNumber;
		 damageCodesFactory.currentSizeType=$scope.currentSizeType;
		 damageCodesFactory.damageCodes =$('#selections').html();// angular.toJson($scope.damageCodes);
		 // alert(damageCodesFactory.damageCodes);
		 window.location="#/calculatedCIR/"+currentContainerNumber+"";
	};
	highlightHelper(exterior,interior);
	$('header').hide();
}]);
//end controller for 40 feet containers

//start controller for 45 feet containers
var exterior,interior;
app.controller("highlightFortyFiveRightController",["$scope","viewDataFactory","damageCodesFactory", function($scope,viewDataFactory,damageCodesFactory) {
	screen.orientation.lock('landscape');
	$scope.currentContainerNumber=(window.location.hash.substr(1)).split('/')[3];
	var containerListLength=viewDataFactory.cirContainerList.length;
	for(var i=0;i<containerListLength;i++){
		if(viewDataFactory.cirContainerList[i].containerNumber==$scope.currentContainerNumber){
			$scope.currentSizeType=viewDataFactory.cirContainerList[i].isoSizeType;
		}
	}
	exterior=$('#right45SideX');
	interior=$('#right45SideI');
	$scope.damageCode=function(currentContainerNumber){
		 damageCodesFactory.currentContainerNumber=$scope.currentContainerNumber;
		 damageCodesFactory.currentSizeType=$scope.currentSizeType;
		 damageCodesFactory.damageCodes =$('#selections').html();// angular.toJson($scope.damageCodes);
		 // alert(damageCodesFactory.damageCodes);
		 window.location="#/calculatedCIR/"+currentContainerNumber+"";
	};
	highlightHelper(exterior,interior);
	$('header').hide();
}]);
app.controller("highlightFortyFiveLeftController",["$scope","viewDataFactory","damageCodesFactory", function($scope,viewDataFactory,damageCodesFactory) {
	screen.orientation.lock('landscape');
	$scope.currentContainerNumber=(window.location.hash.substr(1)).split('/')[3];
	var containerListLength=viewDataFactory.cirContainerList.length;
	for(var i=0;i<containerListLength;i++){
		if(viewDataFactory.cirContainerList[i].containerNumber==$scope.currentContainerNumber){
			$scope.currentSizeType=viewDataFactory.cirContainerList[i].isoSizeType;
		}
	}
	exterior=$('#left45SideX');
	interior=$('#left45SideI');
	$scope.damageCode=function(currentContainerNumber){
		 damageCodesFactory.currentContainerNumber=$scope.currentContainerNumber;
		 damageCodesFactory.currentSizeType=$scope.currentSizeType;
		 damageCodesFactory.damageCodes =$('#selections').html();// angular.toJson($scope.damageCodes);
		 // alert(damageCodesFactory.damageCodes);
		 window.location="#/calculatedCIR/"+currentContainerNumber+"";
	};
	highlightHelper(exterior,interior);
	$('header').hide();
}]);
app.controller("highlightFortyFiveTopController",["$scope","viewDataFactory","damageCodesFactory", function($scope,viewDataFactory,damageCodesFactory) {
	screen.orientation.lock('landscape');
	$scope.currentContainerNumber=(window.location.hash.substr(1)).split('/')[3];
	var containerListLength=viewDataFactory.cirContainerList.length;
	for(var i=0;i<containerListLength;i++){
		if(viewDataFactory.cirContainerList[i].containerNumber==$scope.currentContainerNumber){
			$scope.currentSizeType=viewDataFactory.cirContainerList[i].isoSizeType;
		}else{
			continue;
		}
	}
	exterior=$('#top45SideX');
	interior=$('#top45SideI');
	$scope.damageCode=function(currentContainerNumber){
		 damageCodesFactory.currentContainerNumber=$scope.currentContainerNumber;
		 damageCodesFactory.currentSizeType=$scope.currentSizeType;
		 damageCodesFactory.damageCodes =$('#selections').html();// angular.toJson($scope.damageCodes);
		 // alert(damageCodesFactory.damageCodes);
		 window.location="#/calculatedCIR/"+currentContainerNumber+"";
	};
	highlightHelper(exterior,interior);
	$('header').hide();
}]);
app.controller("highlightFortyFiveBottomController",["$scope","viewDataFactory","damageCodesFactory", function($scope,viewDataFactory,damageCodesFactory) {
	screen.orientation.lock('landscape');
	$scope.currentContainerNumber=(window.location.hash.substr(1)).split('/')[3];
	var containerListLength=viewDataFactory.cirContainerList.length;
	for(var i=0;i<containerListLength;i++){
		if(viewDataFactory.cirContainerList[i].containerNumber==$scope.currentContainerNumber){
			$scope.currentSizeType=viewDataFactory.cirContainerList[i].isoSizeType;
		}
	}
	exterior=$('#bottom45SideX');
	interior=$('#bottom45SideI');
	$scope.damageCode=function(currentContainerNumber){
		 damageCodesFactory.currentContainerNumber=$scope.currentContainerNumber;
		 damageCodesFactory.currentSizeType=$scope.currentSizeType;
		 damageCodesFactory.damageCodes =$('#selections').html();// angular.toJson($scope.damageCodes);
		 // alert(damageCodesFactory.damageCodes);
		 window.location="#/calculatedCIR/"+currentContainerNumber+"";
	};
	highlightHelper(exterior,interior);
	$('header').hide();
}]);
//end controller for 45 feet containers

app.factory("damageCodesFactory",["$http", "$q",function($http, $q){
	this.currentContainerNumber="";
	this.currentSizeType="";
	this.damageCodes=$('#selections').html();
	
	// var data =$('#selections').html();
	return this;
}]);