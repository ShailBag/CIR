//back up file
// function redirectTo(){
		// //window.open("viewData.html","_self");
		// window.location="viewData.html";
// }
document.getElementById("defaultUser").value="admin";
document.getElementById("defaultPassword").value="admin";
//window.open("viewData.html","_self");
var _defaultUser = document.getElementById("defaultUser").value.toLowerCase();
var _defaultPassword = document.getElementById("defaultPassword").value.toLowerCase();
	function redirectTo(){
		// if (_defaultUser == null || $scope.Password == null) {
		// var db = window.sqlitePlugin.openDatabase({ name: "CIRDB.db", location: 'default' });
			// alert("UserID & Password Should not be Blank.");
		// }
		if(_defaultUser=='admin' && _defaultPassword=='admin'){
			window.location="layout.html";
		}else{
			alert("Invalid User or Password!");
		}		
	}