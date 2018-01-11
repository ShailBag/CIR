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
	//route for 20 feet container sides
	.otherwise({			
		redirectTo: '/viewData'
	});
});

app.factory("damageCodesFactory",["$http", "$q",function($http, $q){
	this.currentContainerNumber="";
	this.currentSizeType="";
	this.damageCodes=$('#selections').html();
	
	// var data =$('#selections').html();
	return this;
}]);