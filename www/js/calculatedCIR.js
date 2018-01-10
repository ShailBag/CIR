app.controller("calculatedCIRController",["$scope","viewDataFactory","damageCodesFactory", function($scope,viewDataFactory,damageCodesFactory) {
	 //screen.orientation.lock('portrait');
	// document.addEventListener("backbutton", onBackKeyDown, false);
		// function onBackKeyDown() {
			// // alert("Calculated CIR Back Press");
			// if(screen.orientation.type=='landscape-primary'||screen.orientation.type=='landscape-secondary'){
				// screen.orientation.lock('portrait');
			// }else{
				// screen.orientation.lock('landscape');
			// }
			// window.history.back();	
			// // screen.orientation.unlock();
			// //window.history.back();
		// // Handle the back button
	// }
	
	var containerListLength=viewDataFactory.cirContainerList.length;
	for(var i=0;i<containerListLength;i++){
		if(viewDataFactory.cirContainerList[i].containerNumber==damageCodesFactory.currentContainerNumber){
			$scope.currentSizeType=viewDataFactory.cirContainerList[i].isoSizeType;
			$scope.cirOperatorData =viewDataFactory.cirContainerList[i].operator;
		}else{
			continue;
		}
	}
	//$scope.damageCodes=damageCodesFactory.damageCodes;
	
	//create textbox dynamicaly
	var damageCodesForText=damageCodesFactory.damageCodes.split(",");
	var i, target = document.getElementById('createDamageTextBox');
    target.innerHTML = '';

    for (i = 0; i < damageCodesForText.length; i += 1) {
        target.innerHTML += '<input type="text" value="'+damageCodesForText[i]+'"ng-model="damageCodes'+damageCodesForText[i]+'" class="form-control">';
    }
	//create textbox dynamicaly
	
	// function imageCapture() {
	$scope.imageCapture=function(){
		var options = {
			limit: 3
		};
		navigator.device.capture.captureImage(onSuccess, onError, options);

		function onSuccess(mediaFiles) {
			//$(containerSideId).show();
			
			var i, path, len;
			for (i = 0, len = mediaFiles.length; i < len; i += 1) {
				path = mediaFiles[i].fullPath;
				// image.src= mediaFiles[i].localURL;
				debugger;
				// new Date(mediaFiles[i].lastModifiedDate);
				console.log(mediaFiles);
				$('#damageImage').append('<figure><img class="imgContainerSides"  src="'+mediaFiles[i].localURL+'"> <figcaption>'+mediaFiles[i].name+'<br>'+new Date(mediaFiles[i].lastModifiedDate)+'</figcaption></figure>');
				// $('#damageImage').append('<img class="imgContainerSides" src="'+mediaFiles[i].localURL+'" class="image" name="'+mediaFiles[i].name+'" date="'+mediaFiles[i].lastModifiedDate+'">');
				// $('#damageImage').append('<div class="content"><img class="imgContainerSides" src="'+mediaFiles[i].localURL+'" class="image"/><div>Name: '+mediaFiles[i].name+'<br> Date: '+mediaFiles[i].lastModifiedDate+'</div></div>');
			}
			
		}

		function onError(error) {
			navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
		}
	}
	
	
	$('header').show();
	document.getElementById("CIRDate").valueAsDate = new Date();
	// $scope.CIRDate = new Date();
	// var urlStr=window.location.hash.substr(1);
	// var slashPosition=urlStr.lastIndexOf('/');
	// $scope.containerNumber=urlStr.substring(slashPosition+1);
	$scope.containerNumber=damageCodesFactory.currentContainerNumber;
}]);

