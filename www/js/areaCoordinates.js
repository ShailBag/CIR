app.controller("highlightFortyFiveRightController",["$scope","viewDataFactory", function($scope,viewDataFactory) {
	$scope.right45Exterior=[
		//Right Exterior High Start
		 {shape:'rect',cedexCode:'5RXH1',coords:'0,0,72,44' 		,_href:'#ppg',title:'High 1',alt:'A1'}
		,{shape:'rect',cedexCode:'5RXH1',coords:'72,0,184,44' 		,_href:'#ppg',title:'High 1',alt:'B1'}
		,{shape:'rect',cedexCode:'5RXH2',coords:'184,0,296,44' 		,_href:'#ppg',title:'High 2',alt:'C1'}
		,{shape:'rect',cedexCode:'5RXH3',coords:'296,0,408,44' 		,_href:'#ppg',title:'High 3',alt:'D1'}
		,{shape:'rect',cedexCode:'5RXH4',coords:'408,0,520,44' 		,_href:'#ppg',title:'High 4',alt:'E1'}
		,{shape:'rect',cedexCode:'5RXH5',coords:'520,0,632,44' 		,_href:'#ppg',title:'High 5',alt:'F1'}
		,{shape:'rect',cedexCode:'5RXH6',coords:'632,0,744,44' 		,_href:'#ppg',title:'High 6',alt:'G1'}
		,{shape:'rect',cedexCode:'5RXH7',coords:'744,0,857,44' 		,_href:'#ppg',title:'High 7',alt:'H1'}
		,{shape:'rect',cedexCode:'5RXH8',coords:'857,0,969,44' 		,_href:'#ppg',title:'High 8',alt:'I1'}
		,{shape:'rect',cedexCode:'5RXH9',coords:'969,0,1081,44' 	,_href:'#ppg',title:'High 9',alt:'J1'}
		,{shape:'rect',cedexCode:'5RXH0',coords:'1081,0,1193,44'	,_href:'#ppg',title:'High 0',alt:'K1'}
		,{shape:'rect',cedexCode:'5RXH0',coords:'1193,0,1264,44'	,_href:'#ppg',title:'High 0',alt:'L1'}
		//Right Exterior High End
		//Right Exterior Top Start
		,{shape:'rect',cedexCode:'5RXT1',coords:'0,44,72,128' 		,_href:'#ppg',title:'Top 1',alt:'A2'}
		,{shape:'rect',cedexCode:'5RXT1',coords:'72,44,184,128' 	,_href:'#ppg',title:'Top 1',alt:'B2'}
		,{shape:'rect',cedexCode:'5RXT2',coords:'184,44,296,128' 	,_href:'#ppg',title:'Top 2',alt:'C2'}
		,{shape:'rect',cedexCode:'5RXT3',coords:'296,44,408,128' 	,_href:'#ppg',title:'Top 3',alt:'D2'}
		,{shape:'rect',cedexCode:'5RXT4',coords:'408,44,520,128' 	,_href:'#ppg',title:'Top 4',alt:'E2'}
		,{shape:'rect',cedexCode:'5RXT5',coords:'520,44,632,128' 	,_href:'#ppg',title:'Top 5',alt:'F2'}
		,{shape:'rect',cedexCode:'5RXT6',coords:'632,44,744,128' 	,_href:'#ppg',title:'Top 6',alt:'G2'}
		,{shape:'rect',cedexCode:'5RXT7',coords:'744,44,857,128' 	,_href:'#ppg',title:'Top 7',alt:'H2'}
		,{shape:'rect',cedexCode:'5RXT8',coords:'857,44,969,128' 	,_href:'#ppg',title:'Top 8',alt:'I2'}
		,{shape:'rect',cedexCode:'5RXT9',coords:'969,44,1081,128' 	,_href:'#ppg',title:'Top 9',alt:'J2'}
		,{shape:'rect',cedexCode:'5RXT0',coords:'1081,44,1193,128'	,_href:'#ppg',title:'Top 0',alt:'K2'}
		,{shape:'rect',cedexCode:'5RXT0',coords:'1193,44,1264,128'	,_href:'#ppg',title:'Top 0',alt:'L2'}
		//Right Exterior Top End
		//Right Exterior Bottom Start
		,{shape:'rect',cedexCode:'5RXB1',coords:'0,129,72,212' 		,_href:'#ppg',title:'Bottom 1',alt:'A3'}
		,{shape:'rect',cedexCode:'5RXB1',coords:'72,129,184,212' 	,_href:'#ppg',title:'Bottom 1',alt:'B3'}
		,{shape:'rect',cedexCode:'5RXB2',coords:'184,129,296,212' 	,_href:'#ppg',title:'Bottom 2',alt:'C3'}
		,{shape:'rect',cedexCode:'5RXB3',coords:'296,129,408,212' 	,_href:'#ppg',title:'Bottom 3',alt:'D3'}
		,{shape:'rect',cedexCode:'5RXB4',coords:'408,129,520,212' 	,_href:'#ppg',title:'Bottom 4',alt:'E3'}
		,{shape:'rect',cedexCode:'5RXB5',coords:'520,129,632,212' 	,_href:'#ppg',title:'Bottom 5',alt:'F3'}
		,{shape:'rect',cedexCode:'5RXB6',coords:'632,129,744,212' 	,_href:'#ppg',title:'Bottom 6',alt:'G3'}
		,{shape:'rect',cedexCode:'5RXB7',coords:'744,129,857,212' 	,_href:'#ppg',title:'Bottom 7',alt:'H3'}
		,{shape:'rect',cedexCode:'5RXB8',coords:'857,129,969,212' 	,_href:'#ppg',title:'Bottom 8',alt:'I3'}
		,{shape:'rect',cedexCode:'5RXB9',coords:'969,129,1081,212' 	,_href:'#ppg',title:'Bottom 9',alt:'J3'}
		,{shape:'rect',cedexCode:'5RXB0',coords:'1081,129,1193,212'	,_href:'#ppg',title:'Bottom 0',alt:'K3'}
		,{shape:'rect',cedexCode:'5RXB0',coords:'1193,129,1264,212'	,_href:'#ppg',title:'Bottom 0',alt:'L3'}
		//Right Exterior Bottom End                                                                   
		//Right Exterior Ground Start                                                                 
		,{shape:'rect',cedexCode:'5RXG1',coords:'0,213,72,254' 		,_href:'#ppg',title:'Ground 1',alt:'A4'}
		,{shape:'rect',cedexCode:'5RXG1',coords:'72,213,184,254' 	,_href:'#ppg',title:'Ground 1',alt:'B4'}
		,{shape:'rect',cedexCode:'5RXG2',coords:'184,213,296,254' 	,_href:'#ppg',title:'Ground 2',alt:'C4'}
		,{shape:'rect',cedexCode:'5RXG3',coords:'296,213,408,254' 	,_href:'#ppg',title:'Ground 3',alt:'D4'}
		,{shape:'rect',cedexCode:'5RXG4',coords:'408,213,520,254' 	,_href:'#ppg',title:'Ground 4',alt:'E4'}
		,{shape:'rect',cedexCode:'5RXG5',coords:'520,213,632,254' 	,_href:'#ppg',title:'Ground 5',alt:'F4'}
		,{shape:'rect',cedexCode:'5RXG6',coords:'632,213,744,254' 	,_href:'#ppg',title:'Ground 6',alt:'G4'}
		,{shape:'rect',cedexCode:'5RXG7',coords:'744,213,857,254' 	,_href:'#ppg',title:'Ground 7',alt:'H4'}
		,{shape:'rect',cedexCode:'5RXG8',coords:'857,213,969,254' 	,_href:'#ppg',title:'Ground 8',alt:'I4'}
		,{shape:'rect',cedexCode:'5RXG9',coords:'969,213,1081,254' 	,_href:'#ppg',title:'Ground 9',alt:'J4'}
		,{shape:'rect',cedexCode:'5RXG9',coords:'1081,213,1193,254'	,_href:'#ppg',title:'Ground 0',alt:'K4'}
		,{shape:'rect',cedexCode:'5RXG0',coords:'1193,213,1264,254'	,_href:'#ppg',title:'Ground 0',alt:'L4'}
		//Right Exterior Ground End
	];
	screen.orientation.lock('landscape');
	$scope.currentContainerNumber=(window.location.hash.substr(1)).split('/')[2];
	var containerListLength=viewDataFactory.cirContainerList.length;
	for(var i=0;i<containerListLength;i++){
		if(viewDataFactory.cirContainerList[i].containerNumber==$scope.currentContainerNumber){
			$scope.currentSizeType=viewDataFactory.cirContainerList[i].isoSizeType;
		}
	}
	debugger;
	
	
	var exterior=$('#right45SideX');
	var interior=$('#right45SideI');
	highlightHelper(exterior,interior);
	$('header').hide();
}]);