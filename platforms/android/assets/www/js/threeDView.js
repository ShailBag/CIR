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
	
	angular.element(document).ready(function () {
		if(screen.orientation.type=="portrait-primary"||screen.orientation.type=="portrait-secondary"||screen.orientation.type=="portrait"){
			init($scope.currentContainerNumber,viewDataFactory.windowHeight,viewDataFactory.windowWidth);//,viewDataFactory.windowHeight,viewDataFactory.windowWidth
		}
    });
	
	console.log('threeDController');
	
}]);

//will open camera to take picture of container
// function cameraTakePicture(sideOfContainer) {
	// var containerSideId=sideOfContainer.id;
	// navigator.camera.getPicture(onSuccess, onFail, {  
		// quality: 50, 
		// destinationType: Camera.DestinationType.DATA_URL 
	// });  
	
	// function onSuccess(imageData) { 
		// $(containerSideId).show();
		// var image = document.getElementById(containerSideId); 
		
		// image.src = "data:image/jpeg;base64," + imageData; 
	// }  

	// function onFail(message) { 
		// alert('Failed because: ' + message); 
	// } 
// }
var screenpct = .95;
var container, camera, scene, renderer, raycaster, mouse, cube, positionInfo, getHeight,containerSizeNumber;
var objects = [];

//20 Feet
var twentyRight = new THREE.TextureLoader().load('img/three_D_Container/3D-RIGHT.png');
var twentyLeft = new THREE.TextureLoader().load('img/three_D_Container/3D-LEFT.png');
var twentyTop = new THREE.TextureLoader().load('img/three_D_Container/3D-TOP.png');
var twentyBottom = new THREE.TextureLoader().load('img/three_D_Container/3D-BOTTOM.png');
//20 Feet
//40 Feet 
var fortyRight = new THREE.TextureLoader().load('img/three_D_Container/40FEET/4DRX.png');
var fortyLeft = new THREE.TextureLoader().load('img/three_D_Container/40FEET/4DLX.png');
var fortyTop = new THREE.TextureLoader().load('img/three_D_Container/40FEET/4DTX.png');
var fortyBottom = new THREE.TextureLoader().load('img/three_D_Container/40FEET/4DBX.png');
//40 Feet
//40 Feet 
var fortyFiveRight = new THREE.TextureLoader().load('img/three_D_Container/45FEET/5DRX.png');
var fortyFiveLeft = new THREE.TextureLoader().load('img/three_D_Container/45FEET/5DLX.png');
var fortyFiveTop = new THREE.TextureLoader().load('img/three_D_Container/45FEET/5DTX.png');
var fortyFiveBottom = new THREE.TextureLoader().load('img/three_D_Container/45FEET/5DBX.png');
//40 Feet

var doorSide = new THREE.TextureLoader().load('img/three_D_Container/3D-REAR.png');
var frontSide = new THREE.TextureLoader().load('img/three_D_Container/3D-FRONT.png');

var currentContainerGlobal;//do not remove this set container number in link to access side of containers
//init();
animate();

function init(currentContainer,_height,_width) {//,_height,_width
	//screen.orientation.lock('portrait');
	currentContainerGlobal=currentContainer;
	var geometry, materials;
	var urlStr=window.location.hash.substr(1);
	var slashPosition=urlStr.lastIndexOf('/');
	containerSizeNumber=parseInt(urlStr.substring(slashPosition+1));
	container = document.getElementById('Three_D_Container');
	var windowHeight = _height;//window.innerHeight;
	var windowWidth = _width;//window.innerWidth;
	// debugger;
	if(windowWidth > windowHeight){
			var temp = windowHeight;
			windowHeight = 	windowWidth;
			windowWidth = temp;
	}
	
    camera = new THREE.PerspectiveCamera(70, windowWidth / (windowHeight-140), 0.1, 1000);//(70, window.innerWidth / window.innerHeight, 0.1, 10000)
    //  camera.position.set(300, 220, 500);
	
    scene = new THREE.Scene();

    if (containerSizeNumber == 20) {
        geometry = new THREE.BoxGeometry(200, 200.5, 400);
		
		materials =
        [
            new THREE.MeshBasicMaterial({ map: twentyRight })
            , new THREE.MeshBasicMaterial({ map: twentyLeft })
            , new THREE.MeshBasicMaterial({ map: twentyTop })
            , new THREE.MeshBasicMaterial({ map: twentyBottom })
            , new THREE.MeshBasicMaterial({ map: doorSide })
            , new THREE.MeshBasicMaterial({ map: frontSide })
        ];
    } else if(containerSizeNumber == 40){
        geometry = new THREE.BoxGeometry(200, 200.5, 570);
		
		materials =
        [
            new THREE.MeshBasicMaterial({ map: fortyRight })
            , new THREE.MeshBasicMaterial({ map: fortyLeft })
            , new THREE.MeshBasicMaterial({ map: fortyTop })
            , new THREE.MeshBasicMaterial({ map: fortyBottom })
            , new THREE.MeshBasicMaterial({ map: doorSide })
            , new THREE.MeshBasicMaterial({ map: frontSide })
        ];
    }else{
		geometry = new THREE.BoxGeometry(200, 200.5, 600);
		
		materials =
        [
            new THREE.MeshBasicMaterial({ map: fortyFiveRight })
            , new THREE.MeshBasicMaterial({ map: fortyFiveLeft })
            , new THREE.MeshBasicMaterial({ map: fortyFiveTop })
            , new THREE.MeshBasicMaterial({ map: fortyFiveBottom })
            , new THREE.MeshBasicMaterial({ map: doorSide })
            , new THREE.MeshBasicMaterial({ map: frontSide })
        ];
	}

    cube = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
    scene.add(cube);

    //raycaster = new THREE.Raycaster();
    //mouse = new THREE.Vector2();
    renderer = new THREE.CanvasRenderer();
    renderer.setClearColor(0xf0f0f0);
    //renderer.setPixelRatio(window.devicePixelRatio);

    renderer.setSize(windowWidth, (windowHeight-140));
    container.appendChild(renderer.domElement);
    //document.onclick = onDocumentMouseDown;

    var orbit = new THREE.OrbitControls(camera, renderer.domElement);
    $("canvas").attr("id", "canvasContainer");
    //to assign width to div with id: canvasContainer
    // var widthForCanvasContainer = document.getElementsByClassName('panel-body')[0].offsetWidth - 20;
    var widthForCanvasContainer = windowWidth -30;
    document.getElementById('canvasContainer').style.width = widthForCanvasContainer + "px";

    camera.position.copy(orbit.target).add(new THREE.Vector4(300, 220, 500 + 10));
    orbit.addEventListener('change', renderChange);
    orbit.enableZoom = false;

    document.addEventListener('mousedown', onDocumentMouseDown, false);
    document.addEventListener('touchstart', onDocumentTouchStart, false);
    //window.addEventListener('resize', onWindowResize, false);
}

function renderChange() {
    cube.updateMatrix();
}

function animate() {
    requestAnimationFrame(animate);
    render();
}

function render() {
    // camera.lookAt(scene.position);
    // renderer.render(scene, camera);
	if(camera==undefined){
		return;
	}else{
		camera.lookAt(scene.position);
		renderer.render(scene, camera);	
	}
}

function onDocumentTouchStart(event) {
    event.clientX = event.touches[0].clientX;
    event.clientY = event.touches[0].clientY;
    onDocumentMouseDown(event);
}

mouse = new THREE.Vector2();
var sideOfContainerFirstChar;
function onDocumentMouseDown(event) {
    if (!$('canvas').is(':visible')) {
        return;
    }

    var contGet1 = document.getElementById("canvasContainer");
    var getpos;
	if(contGet1==undefined){
		return;
	}else{
		getpos = contGet1.getBoundingClientRect();
	}
    mouse.x = ((event.clientX - getpos.left) / contGet1.clientWidth) * 2 - 1;
    mouse.y = -((event.clientY - getpos.top) / contGet1.clientHeight) * 2 + 1;
    var raycaster = new THREE.Raycaster();

    var vector = new THREE.Vector3(mouse.x, mouse.y, 1);
    cube.position.x = vector.x;
    cube.position.y = vector.y;
    cube.position.z = vector.z;
    vector.unproject(camera);

    raycaster.set(camera.position, vector.sub(camera.position).normalize());

    var intersects = raycaster.intersectObject(cube);

    if (intersects.length > 0) {
        var index = Math.floor(intersects[0].faceIndex);
		var sidePage="#/sideContainer/";
        switch (index) {
            case 0:
            case 1://right
				screen.orientation.lock('landscape');
                if ($("#Three_D_Container").is(':visible')) {
                    var side = 'RIGHT';//to set side while accessing side page
					// screen.orientation.lock('landscape');
					window.location=sidePage+side+"/"+currentContainerGlobal+"";
				}
				break;
            case 2:
            case 3:
                //window.location.href = "#";//leftSideContainer
				screen.orientation.lock('landscape');
                if ($("#Three_D_Container").is(':visible')) {
                    var side = 'LEFT';//to set side while accessing side page
					// screen.orientation.lock('landscape');
					window.location=sidePage+side+"/"+currentContainerGlobal+"";
                }
                break;
            case 4:
            case 5:
                //window.location.href = "#";//top
				screen.orientation.lock('landscape');
                if ($("#Three_D_Container").is(':visible')) {
                    var side = 'TOP';//to set side while accessing side page
					// screen.orientation.lock('landscape');
					window.location=sidePage+side+"/"+currentContainerGlobal+"";
                }
                break;
            case 6:
            case 7:
                //window.location.href = "#";//bottom
				screen.orientation.lock('landscape');
                if ($("#Three_D_Container").is(':visible')) {
                    var side = 'BOTTOM';//to set side while accessing side page
					// screen.orientation.lock('landscape');
					window.location=sidePage+side+"/"+currentContainerGlobal+"";
                }
                break;
            case 8:
            case 9:
                //window.location.href = "#";//door
				screen.orientation.lock('landscape');
                if ($("#Three_D_Container").is(':visible')) {
                    var side = 'DOOR';//to set side while accessing side page
					
                    var firstChar = side.charAt(0);
                    sideOfContainerFirstChar = firstChar;
					window.location=sidePage+side+"/"+currentContainerGlobal+"";
                }
                break;
            case 10:
            case 11:
                //window.location.href = "#";//front
				screen.orientation.lock('landscape');
                if ($("#Three_D_Container").is(':visible')) {
                    var side = 'FRONT';//to set side while accessing side page
					
                    var firstChar = side.charAt(0);
                    sideOfContainerFirstChar = firstChar;
					window.location=sidePage+side+"/"+currentContainerGlobal+"";
                }
                break;
        }
    }
}
