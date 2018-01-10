document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
 
function onDeviceReady() {
	//this.immersiveMode();
	document.addEventListener('backbutton', ShowExitDialog, false);
	//receivedEvent('deviceready');
	window.location="login.html";
}
function ShowExitDialog() {
	debugger;
	navigator.notification.confirm(
		"Do you want to Exit?", // message
		function(){
				if(buttonIndex == "1"){
					navigator.app.exitApp(); 
				}
			}, // callback
		'CIR', // title
		['YES','NO'] // buttonName
	);
}
	
function alertexit(buttonIndex){
	//alert("hi"+buttonIndex);
       // if(buttonindex==1)
        //{
			alert(buttonindex);
            navigator.app.exitapp();
        //}
		//else if(buttonindex==2)
		//{
			//alert(buttonindex);
			//navigator.app.exitapp();
		//}
}

// Update DOM on a Received Event
function receivedEvent(id) {       
	var parentElement = document.getElementById(id);
	var listeningElement = parentElement.querySelector('.listening');
	var receivedElement = parentElement.querySelector('.received');
	listeningElement.setAttribute('style', 'display:none;');
	receivedElement.setAttribute('style', 'display:block;');
	console.log('Received Event: ' + id);
}