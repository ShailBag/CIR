app.controller("containerSideController",["$scope","viewDataFactory","damageCodesFactory", function($scope,viewDataFactory,damageCodesFactory) {
	screen.orientation.lock('landscape');
	// document.addEventListener("backbutton", onBackKeyDown, false);
		// function onBackKeyDown() {
			// // screen.orientation.unlock();
			// screen.orientation.lock('portrait');
			 // //window.history.back();
		// // Handle the back button
	// }
	
	// $("#forTwentyRightExterior").kendoTouch({ enableSwipe: true, swipe: function (e) { console.log(e); } });
	$("#forTwentyRightExteriorTwo").kendoTouch({ enableSwipe: true, swipe: function (e) { console.log(e); } });
	$("#forTwentyRightExteriorThree").kendoTouch({ enableSwipe: true, swipe: function (e) { console.log(e); } });
	$("#forTwentyRightExteriorTwo").kendoTouch({ touchstart: function (e) { console.log(e); } });
	
	$scope.sideOfContainer=(window.location.hash.substr(1)).split('/')[2];
	$scope.currentContainerNumber=(window.location.hash.substr(1)).split('/')[3];
	var containerListLength=viewDataFactory.cirContainerList.length;
	for(var i=0;i<containerListLength;i++){
		if(viewDataFactory.cirContainerList[i].containerNumber==$scope.currentContainerNumber){
			$scope.currentSizeType=viewDataFactory.cirContainerList[i].isoSizeType;
		}
	}
	
	//start:	function for CEDEX Code
	var surfaceAndContainerSample=[
		 {containerType: "FX",containerTypeID:"2" ,index:0}
		,{containerType: "FI",containerTypeID:"3" ,index:1}
		,{containerType: "DX",containerTypeID:"4" ,index:2}
		,{containerType: "DI",containerTypeID:"5" ,index:3}
		,{containerType:"2LX",containerTypeID:"6" ,index:4}
		,{containerType:"2LI",containerTypeID:"7" ,index:5}
		,{containerType:"2RX",containerTypeID:"8" ,index:6}
		,{containerType:"2RI",containerTypeID:"9" ,index:7}
		,{containerType:"2TX",containerTypeID:"10",index:8}
		,{containerType:"2TI",containerTypeID:"11",index:9}
		,{containerType:"2BX",containerTypeID:"12",index:10}
		,{containerType:"2BI",containerTypeID:"13",index:11}
		,{containerType:"4LX",containerTypeID:"14",index:12}
		,{containerType:"4LI",containerTypeID:"15",index:13}
		,{containerType:"4RX",containerTypeID:"16",index:14}
		,{containerType:"4RI",containerTypeID:"17",index:15}
		,{containerType:"4TX",containerTypeID:"18",index:16}
		,{containerType:"4TI",containerTypeID:"19",index:17}
		,{containerType:"4BX",containerTypeID:"20",index:18}
		,{containerType:"4BI",containerTypeID:"21",index:19}
		,{containerType:"5LX",containerTypeID:"22",index:20}
		,{containerType:"5LI",containerTypeID:"23",index:21}
		,{containerType:"5RX",containerTypeID:"24",index:22}
		,{containerType:"5RI",containerTypeID:"25",index:23}
		,{containerType:"5TX",containerTypeID:"26",index:24}
		,{containerType:"5TI",containerTypeID:"27",index:25}
		,{containerType:"5BX",containerTypeID:"28",index:26}
		,{containerType:"5BI",containerTypeID:"29",index:27}
	];
	
	var typeChosenSample=[
		 {typeChosen:"D",typeChosenID:"3",index:0}
		,{typeChosen:"F",typeChosenID:"6",index:1}
		,{typeChosen:"O",typeChosenID:"5",index:2}
		,{typeChosen:"R",typeChosenID:"4",index:3}
		,{typeChosen:"T",typeChosenID:"7",index:4}
	];
	
	var startPoint=[
		 {gridLocation:"A1",index:0 }
		,{gridLocation:"A2",index:1 }
		,{gridLocation:"A3",index:2 }
		,{gridLocation:"A4",index:3 }
		,{gridLocation:"B1",index:4 }
		,{gridLocation:"B2",index:5 }
		,{gridLocation:"B3",index:6 }
		,{gridLocation:"B4",index:7 }
		,{gridLocation:"C1",index:8 }
		,{gridLocation:"C2",index:9 }
		,{gridLocation:"C3",index:10}
		,{gridLocation:"C4",index:11}
		,{gridLocation:"D1",index:12}
		,{gridLocation:"D2",index:13}
		,{gridLocation:"D3",index:14}
		,{gridLocation:"D4",index:15}
		,{gridLocation:"E1",index:16}
		,{gridLocation:"E2",index:17}
		,{gridLocation:"E3",index:18}
		,{gridLocation:"E4",index:19}
		,{gridLocation:"F1",index:20}
		,{gridLocation:"F2",index:21}
		,{gridLocation:"F3",index:22}
		,{gridLocation:"F4",index:23}
		,{gridLocation:"G1",index:24}
		,{gridLocation:"G2",index:25}
		,{gridLocation:"G3",index:26}
		,{gridLocation:"G4",index:27}
		,{gridLocation:"H1",index:28}
		,{gridLocation:"H2",index:29}
		,{gridLocation:"H3",index:30}
		,{gridLocation:"H4",index:31}
		,{gridLocation:"I1",index:32}
		,{gridLocation:"I2",index:33}
		,{gridLocation:"I3",index:34}
		,{gridLocation:"I4",index:35}
		,{gridLocation:"J1",index:36}
		,{gridLocation:"J2",index:37}
		,{gridLocation:"J3",index:38}
		,{gridLocation:"J4",index:39}
		,{gridLocation:"K1",index:40}
		,{gridLocation:"K2",index:41}
		,{gridLocation:"K3",index:42}
		,{gridLocation:"K4",index:43}
		,{gridLocation:"L1",index:44}
		,{gridLocation:"L2",index:45}
		,{gridLocation:"L3",index:46}
		,{gridLocation:"L4",index:47}
	];
	
	var endPoint=[
		 {gridLocation:"A1",index:0 }
		,{gridLocation:"A2",index:1 }
		,{gridLocation:"A3",index:2 }
		,{gridLocation:"A4",index:3 }
		,{gridLocation:"B1",index:4 }
		,{gridLocation:"B2",index:5 }
		,{gridLocation:"B3",index:6 }
		,{gridLocation:"B4",index:7 }
		,{gridLocation:"C1",index:8 }
		,{gridLocation:"C2",index:9 }
		,{gridLocation:"C3",index:10}
		,{gridLocation:"C4",index:11}
		,{gridLocation:"D1",index:12}
		,{gridLocation:"D2",index:13}
		,{gridLocation:"D3",index:14}
		,{gridLocation:"D4",index:15}
		,{gridLocation:"E1",index:16}
		,{gridLocation:"E2",index:17}
		,{gridLocation:"E3",index:18}
		,{gridLocation:"E4",index:19}
		,{gridLocation:"F1",index:20}
		,{gridLocation:"F2",index:21}
		,{gridLocation:"F3",index:22}
		,{gridLocation:"F4",index:23}
		,{gridLocation:"G1",index:24}
		,{gridLocation:"G2",index:25}
		,{gridLocation:"G3",index:26}
		,{gridLocation:"G4",index:27}
		,{gridLocation:"H1",index:28}
		,{gridLocation:"H2",index:29}
		,{gridLocation:"H3",index:30}
		,{gridLocation:"H4",index:31}
		,{gridLocation:"I1",index:32}
		,{gridLocation:"I2",index:33}
		,{gridLocation:"I3",index:34}
		,{gridLocation:"I4",index:35}
		,{gridLocation:"J1",index:36}
		,{gridLocation:"J2",index:37}
		,{gridLocation:"J3",index:38}
		,{gridLocation:"J4",index:39}
		,{gridLocation:"K1",index:40}
		,{gridLocation:"K2",index:41}
		,{gridLocation:"K3",index:42}
		,{gridLocation:"K4",index:43}
		,{gridLocation:"L1",index:44}
		,{gridLocation:"L2",index:45}
		,{gridLocation:"L3",index:46}
		,{gridLocation:"L4",index:47}
	];
	
	var g20Value=[
		 ["SID","SID","SID","SID","SID","SID","SID","SID","B&T","B&T","B&T","B&T","SID","SID","SID","SID","B&T","B&T","B&T","B&T","SID","SID","SID","SID","B&T","B&T","B&T","B&T"]
		,["SID","SID","SID","SID","SID","SID","SID","SID","B&T","B&T","B&T","B&T","SID","SID","SID","SID","B&T","B&T","B&T","B&T","SID","SID","SID","SID","B&T","B&T","B&T","B&T"]
		,["SID","SID","SID","SID","SID","SID","SID","SID","B&T","#"  ,"B&T","B&T","SID","SID","SID","SID","B&T","#"  ,"B&T","B&T","SID","SID","SID","SID","B&T","#"  ,"B&T","B&T"]
		,["SID","SID","SID","SID","SID","#"  ,"SID","#"  ,"#"  ,"#"  ,"B&T","B&T","SID","#"  ,"SID","#"  ,"#"  ,"#"  ,"B&T","B&T","SID","#"  ,"SID","#"  ,"#"  ,"#"  ,"B&T","B&T"]
		,["SID","#"  ,"SID","#"  ,"SID","#"  ,"SID","#"  ,"SID","#"  ,"B&T","#"  ,"SID","#"  ,"SID","#"  ,"B&T","#"  ,"B&T","#"  ,"SID","#"  ,"SID","#"  ,"B&T","#"  ,"B&T","#"  ]
	];
	
	//this value will be arrived from table
	var codeTable=[
		 ["H1","H4","H4","H1","#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"H0","H1","H1","H0","R0","L0","L0","R0"]
		,["T1","T4","T4","T1","#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"T0","T1","T1","T0","R0","L0","L0","R0"]
		,["B1","B4","B4","B1","#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"B0","B1","B1","B0","L0","R0","R0","L0"]
		,["G1","G4","G4","G1","#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"G0","G1","G1","G0","L0","R0","R0","L0"]
		,["H2","H3","H3","H2","#" ,"H1","H1","#" ,"#" ,"#" ,"#" ,"#" ,"H0","H1","H1","H0","R0","L0","L0","R0","H0","H1","H1","H0","R0","L0","L0","R0"]
		,["T2","T3","T3","T2","#" ,"T1","T1","#" ,"#" ,"#" ,"#" ,"#" ,"T0","T1","T1","T0","R0","L0","L0","R0","T0","T1","T1","T0","R0","L0","L0","R0"]
		,["B2","B3","B3","B2","#" ,"B1","B1","#" ,"#" ,"#" ,"#" ,"#" ,"B0","B1","B1","B0","L0","R0","R0","L0","B0","B1","B1","B0","L0","R0","R0","L0"]
		,["G2","G3","G3","G2","#" ,"G1","G1","#" ,"#" ,"#" ,"#" ,"#" ,"G0","G1","G1","G0","L0","R0","R0","L0","G0","G1","G1","G0","L0","R0","R0","L0"]
		,["H3","H2","H2","H3","#" ,"H2","H2","#" ,"#" ,"#" ,"#" ,"#" ,"H9","H2","H2","H9","R9","L9","L9","R9","H9","H2","H2","H9","R9","L9","L9","R9"]
		,["T3","T2","T2","T3","#" ,"T2","T2","#" ,"#" ,"#" ,"#" ,"#" ,"T9","T2","T2","T9","R9","L9","L9","R9","T9","T2","T2","T9","R9","L9","L9","R9"]
		,["B3","B2","B2","B3","#" ,"B2","B2","#" ,"#" ,"#" ,"#" ,"#" ,"B9","B2","B2","B9","L9","R9","R9","L9","B9","B2","B2","B9","L9","R9","R9","L9"]
		,["G3","G2","G2","G3","#" ,"G2","G2","#" ,"#" ,"#" ,"#" ,"#" ,"G9","G2","G2","G9","L9","R9","R9","L9","G9","G2","G2","G9","L9","R9","R9","L9"]
		,["H4","H1","H1","H4","#" ,"H3","H3","#" ,"#" ,"#" ,"#" ,"#" ,"H8","H3","H3","H8","R8","L8","L8","R8","H8","H3","H3","H8","R8","L8","L8","R8"]
		,["T4","T1","T1","T4","#" ,"T3","T3","#" ,"#" ,"#" ,"#" ,"#" ,"T8","T3","T3","T8","R8","L8","L8","R8","T8","T3","T3","T8","R8","L8","L8","R8"]
		,["B4","B1","B1","B4","#" ,"B3","B3","#" ,"#" ,"#" ,"#" ,"#" ,"B8","B3","B3","B8","L8","R8","R8","L8","B8","B3","B3","B8","L8","R8","R8","L8"]
		,["G4","G1","G1","G4","#" ,"G3","G3","#" ,"#" ,"#" ,"#" ,"#" ,"G8","G3","G3","G8","L8","R8","R8","L8","G8","G3","G3","G8","L8","R8","R8","L8"]
		,["#" ,"#" ,"#" ,"#" ,"#" ,"H4","H4","#" ,"#" ,"#" ,"#" ,"#" ,"H7","H4","H4","H7","R7","L7","L7","R7","H7","H4","H4","H7","R7","L7","L7","R7"]
		,["#" ,"#" ,"#" ,"#" ,"#" ,"T4","T4","#" ,"#" ,"#" ,"#" ,"#" ,"T7","T4","T4","T7","R7","L7","L7","R7","T7","T4","T4","T7","R7","L7","L7","R7"]
		,["#" ,"#" ,"#" ,"#" ,"#" ,"B4","B4","#" ,"#" ,"#" ,"#" ,"#" ,"B7","B4","B4","B7","L7","R7","R7","L7","B7","B4","B4","B7","L7","R7","R7","L7"]
		,["#" ,"#" ,"#" ,"#" ,"#" ,"G4","G4","#" ,"#" ,"#" ,"#" ,"#" ,"G7","G4","G4","G7","L7","R7","R7","L7","G7","G4","G4","G7","L7","R7","R7","L7"]
		,["#" ,"#" ,"#" ,"#" ,"#" ,"H5","H5","#" ,"#" ,"#" ,"#" ,"#" ,"H6","H5","H5","H6","R6","L6","L6","R6","H6","H5","H5","H6","R6","L6","L6","R6"]
		,["#" ,"#" ,"#" ,"#" ,"#" ,"T5","T5","#" ,"#" ,"#" ,"#" ,"#" ,"T6","T5","T5","T6","R6","L6","L6","R6","T6","T5","T5","T6","R6","L6","L6","R6"]
		,["#" ,"#" ,"#" ,"#" ,"#" ,"B5","B5","#" ,"#" ,"#" ,"#" ,"#" ,"B6","B5","B5","B6","L6","R6","R6","L6","B6","B5","B5","B6","L6","R6","R6","L6"]
		,["#" ,"#" ,"#" ,"#" ,"#" ,"G5","G5","#" ,"#" ,"#" ,"#" ,"#" ,"G6","G5","G5","G6","L6","R6","R6","L6","G6","G5","G5","G6","L6","R6","R6","L6"]
		,["#" ,"#" ,"#" ,"#" ,"H5","#" ,"#" ,"H5","R5","L5","L5","R5","H5","H6","H6","H5","R5","L5","L5","R5","H5","H6","H6","H5","R5","L5","L5","R5"]
		,["#" ,"#" ,"#" ,"#" ,"T5","#" ,"#" ,"T5","R5","L5","L5","R5","T5","T6","T6","T5","R5","L5","L5","R5","T5","T6","T6","T5","R5","L5","L5","R5"]
		,["#" ,"#" ,"#" ,"#" ,"B5","#" ,"#" ,"B5","L5","R5","R5","L5","B5","B6","B6","B5","L5","R5","R5","L5","B5","B6","B6","B5","L5","R5","R5","L5"]
		,["#" ,"#" ,"#" ,"#" ,"G5","#" ,"#" ,"G5","L5","R5","R5","L5","G5","G6","G6","G5","L5","R5","R5","L5","G5","G6","G6","G5","L5","R5","R5","L5"]
		,["#" ,"#" ,"#" ,"#" ,"H4","#" ,"#" ,"H4","R4","L4","L4","R4","H4","H7","H7","H4","R4","L4","L4","R4","H4","H7","H7","H4","R4","L4","L4","R4"]
		,["#" ,"#" ,"#" ,"#" ,"T4","#" ,"#" ,"T4","R4","L4","L4","R4","T4","T7","T7","T4","R4","L4","L4","R4","T4","T7","T7","T4","R4","L4","L4","R4"]
		,["#" ,"#" ,"#" ,"#" ,"B4","#" ,"#" ,"B4","L4","R4","R4","L4","B4","B7","B7","B4","L4","R4","R4","L4","B4","B7","B7","B4","L4","R4","R4","L4"]
		,["#" ,"#" ,"#" ,"#" ,"G4","#" ,"#" ,"G4","L4","R4","R4","L4","G4","G7","G7","G4","L4","R4","R4","L4","G4","G7","G7","G4","L4","R4","R4","L4"]
		,["#" ,"#" ,"#" ,"#" ,"H3","#" ,"#" ,"H3","R3","L3","L3","R3","H3","H8","H8","H3","R3","L3","L3","R3","H3","H8","H8","H3","R3","L3","L3","R3"]
		,["#" ,"#" ,"#" ,"#" ,"T3","#" ,"#" ,"T3","R3","L3","L3","R3","T3","T8","T8","T3","R3","L3","L3","R3","T3","T8","T8","T3","R3","L3","L3","R3"]
		,["#" ,"#" ,"#" ,"#" ,"B3","#" ,"#" ,"B3","L3","R3","R3","L3","B3","B8","B8","B3","L3","R3","R3","L3","B3","B8","B8","B3","L3","R3","R3","L3"]
		,["#" ,"#" ,"#" ,"#" ,"G3","#" ,"#" ,"G3","L3","R3","R3","L3","G3","G8","G8","G3","L3","R3","R3","L3","G3","G8","G8","G3","L3","R3","R3","L3"]
		,["#" ,"#" ,"#" ,"#" ,"H2","#" ,"#" ,"H2","R2","L2","L2","R2","H2","H9","H9","H2","R2","L2","L2","R2","H2","H9","H9","H2","R2","L2","L2","R2"]
		,["#" ,"#" ,"#" ,"#" ,"T2","#" ,"#" ,"T2","R2","L2","L2","R2","T2","T9","T9","T2","R2","L2","L2","R2","T2","T9","T9","T2","R2","L2","L2","R2"]
		,["#" ,"#" ,"#" ,"#" ,"B2","#" ,"#" ,"B2","L2","R2","R2","L2","B2","B9","B9","B2","L2","R2","R2","L2","B2","B9","B9","B2","L2","R2","R2","L2"]
		,["#" ,"#" ,"#" ,"#" ,"G2","#" ,"#" ,"G2","L2","R2","R2","L2","G2","G9","G9","G2","L2","R2","R2","L2","G2","G9","G9","G2","L2","R2","R2","L2"]
		,["#" ,"#" ,"#" ,"#" ,"H1","#" ,"#" ,"H1","R1","L1","L1","R1","H1","H0","H0","H1","R1","L1","L1","R1","H1","H0","H0","H1","R1","L1","L1","R1"]
		,["#" ,"#" ,"#" ,"#" ,"T1","#" ,"#" ,"T1","R1","L1","L1","R1","T1","T0","T0","T1","R1","L1","L1","R1","T1","T0","T0","T1","R1","L1","L1","R1"]
		,["#" ,"#" ,"#" ,"#" ,"B1","#" ,"#" ,"B1","L1","R1","R1","L1","B1","B0","B0","B1","L1","R1","R1","L1","B1","B0","B0","B1","L1","R1","R1","L1"]
		,["#" ,"#" ,"#" ,"#" ,"G1","#" ,"#" ,"G1","L1","R1","R1","L1","G1","G0","G0","G1","L1","R1","R1","L1","G1","G0","G0","G1","L1","R1","R1","L1"]
		,["#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"H1","H0","H0","H1","R1","L1","L1","R1"]
		,["#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"T1","T0","T0","T1","R1","L1","L1","R1"]
		,["#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"B1","B0","B0","B1","L1","R1","R1","L1"]
		,["#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"#" ,"G1","G0","G0","G1","L1","R1","R1","L1"]                                                                                     
	];
	
	//twentyFeetCode
	var twentyFeetLast2DigitCode=[
		 ["#" ,"#" ,"#" ,"#" ,"#" ,"#","#","#","#","#"]
		,["1N","12","13","14","15","#","#","#","#","#"]
		,["12","2N","23","24","25","#","#","#","#","#"]
		,["13","23","3N","34","35","#","#","#","#","#"]
		,["14","24","34","4N","45","#","#","#","#","#"]
		,["15","25","35","45","5N","#","#","#","#","#"]
		,["#" ,"#" ,"#" ,"#" ,"#" ,"#","#","#","#","#"]
		,["#" ,"#" ,"#" ,"#" ,"#" ,"#","#","#","#","#"]
		,["#" ,"#" ,"#" ,"#" ,"#" ,"#","#","#","#","#"]
		,["#" ,"#" ,"#" ,"#" ,"#" ,"#","#","#","#","#"]
	];
	
	//fortOrFortyFiceCode
	var fortyOrFortyFiveLast2DigitCode=[
		 ["10","20","30","40","50","60","70","80","90","ON"]
		,["1N","12","13","14","15","16","17","18","19","XX"]
		,["12","2N","23","24","25","26","27","28","29","20"]
		,["13","23","3N","34","35","36","37","38","39","30"]
		,["14","24","34","4N","45","46","47","48","49","40"]
		,["15","25","35","45","5N","56","57","58","59","50"]
		,["16","26","36","46","56","6N","67","68","69","60"]
		,["17","27","37","47","57","67","7N","78","79","70"]
		,["18","28","38","48","58","68","78","8N","89","80"]
		,["19","29","39","49","59","69","79","89","9N","90"]
	];
	
	var codeTableSide=[
		 ["X","X","B","B"]
		,["X","X","B","G"]
		,["H","T","X","X"]
		,["T","T","X","X"]
	];
	
	var codeTableTopBottom=[
		 ["L","X"]
		,["X","R"]
	];
	
	//side example left right door front
	var sideWiseSection=[
		 {side:"B",sideID:5,index:0}
		,{side:"G",sideID:6,index:1}
		,{side:"H",sideID:3,index:2}
		,{side:"T",sideID:4,index:3}
	];
	
	var sideWiseSectionColumn=[
		 {side:"H",sideID:3,index:0}
		,{side:"T",sideID:4,index:1}
		,{side:"B",sideID:5,index:2}
		,{side:"G",sideID:6,index:3}
		
	];
	
	//side exmple for bottom or top
	var sideBottomTop=[
		 {side:"L",sideID:3,index:0}
		,{side:"R",sideID:4,index:1}
	];
	
	var sideBottomTopColumn=[
		 {side:"L",sideID:3,index:0}
		,{side:"R",sideID:4,index:1}
	];
	
	var section40and45=[
		 {section:"0",sectionID:12,index:0}
		,{section:"1",sectionID:3 ,index:1}
		,{section:"2",sectionID:4 ,index:2}
		,{section:"3",sectionID:5 ,index:3}
		,{section:"4",sectionID:6 ,index:4}
		,{section:"5",sectionID:7 ,index:5}
		,{section:"6",sectionID:8 ,index:6}
		,{section:"7",sectionID:9 ,index:7}
		,{section:"8",sectionID:10,index:8}
		,{section:"9",sectionID:11,index:9}	
	];
	
	var allContainerColumn=[
		 {section:"1",index:0}
		,{section:"2",index:1}
		,{section:"3",index:2}
		,{section:"4",index:3}
		,{section:"5",index:4}
		,{section:"6",index:5}
		,{section:"7",index:6}
		,{section:"8",index:7}
		,{section:"9",index:8}
		,{section:"0",index:9}
	];
	
	var surfaceContainerD='4TX';
	var typeChosenD='D';
	var startPointD="K1";//g15
	var endPointD="K1";//g16
	//DX2N=DX  D C1 C4
	//RX1N=2RX D B2 B3
	//TR1N=4TX D K1 K1
	CEDEXCodeGenerator(surfaceContainerD,typeChosenD,startPointD,endPointD);
	function CEDEXCodeGenerator(surfaceContainerD,typeChosenD,startPointD,endPointD){
		var g18=surfaceContainerD[surfaceContainerD.length-1];//L
		var g17=surfaceContainerD[surfaceContainerD.length-2];//X
		var k13=surfaceContainerD[surfaceContainerD.length-3];//X
		var length=surfaceAndContainerSample.length;
		var lengthTypeChosenSample=typeChosenSample.length;
		var lengthStartPoint=startPoint.length;
		var lengthEndPoint=endPoint.length;
		var g19,g20,g20Row,g20g21Column,g21,g21Row,g22,g22Row,h21,h22,i21,i22,h22row,h22column,j21,j22,k21,k22,j22row,j22column,k23;//6
		var cedexCode;
		// var g20Row,g20g21Column,g21Row,g22Row;
		//var g21Row;
		for(var i=0;i<length;i++){
			if(surfaceAndContainerSample[i].containerType==surfaceContainerD){
				g19=surfaceAndContainerSample[i].containerTypeID;
				g20g21Column=surfaceAndContainerSample[i].index;
			}
		}
		for(var i=0;i<lengthTypeChosenSample;i++){
			if(typeChosenSample[i].typeChosen==typeChosenD){
				g20Row=typeChosenSample[i].index;
			}
		}
		for(var i=0;i<lengthStartPoint;i++){
			if(startPoint[i].gridLocation==startPointD){
				g21Row=startPoint[i].index;
			}
		}
		for(var i=0;i<lengthEndPoint;i++){
			if(endPoint[i].gridLocation==endPointD){
				g22Row=endPoint[i].index;
			}
		}
		
		g20=g20Value[g20Row][g20g21Column];//SID
		g21=codeTable[g21Row][g20g21Column];//startOintH5
		
		g22=codeTable[g22Row][g20g21Column];//endPoint H5
		h21=g21[g21.length-2];//H
		h22=g22[g22.length-2];//H
		
		//start for i21
		
		if(g20=="B&T"){
			var lengthSideBottomTop=sideBottomTop.length;
			for(var i=0;i<lengthSideBottomTop;i++){
				if(sideBottomTop[i].side==h21){
					i21=sideBottomTop[i].sideID;
				}
			}
		}else if(g20=="SID"){
			var lengthSideWiseSection=sideWiseSection.length;
			for(var i=0;i<lengthSideWiseSection;i++){
				if(sideWiseSection[i].side==h21){
					i21=sideWiseSection[i].sideID;
				}
			}
		}
		else{
			return;
		}
		//end for i21
		
		//start for i22
		
		if(g20=="B&T"){
			var lengthSideBottomTop=sideBottomTop.length;
			for(var i=0;i<lengthSideBottomTop;i++){
				if(sideBottomTop[i].sideID==i21){
					h22row=sideBottomTop[i].index;
				}
			}
			var lengthSideBottomTopColumn=sideBottomTopColumn.length;
			for(var i=0;i<lengthSideBottomTopColumn;i++){
				if(sideBottomTopColumn[i].side==h22){
					h22column=sideBottomTopColumn[i].index;
				}
			}
			i22=codeTableTopBottom[h22row][h22column];
		}else if(g20=="SID"){
			var lengthSideWiseSection=sideWiseSection.length;
			for(var i=0;i<lengthSideWiseSection;i++){
				if(sideWiseSection[i].sideID==i21){
					h22row=sideWiseSection[i].index;
				}
			}
			var lengthSideWiseSectionColumn=sideWiseSectionColumn.length;
			for(var i=0;i<lengthSideWiseSectionColumn;i++){
				if(sideWiseSectionColumn[i].side==h22){
					h22column=sideWiseSectionColumn[i].index;
				}
			}
			i22=codeTableSide[h22row][h22column];
		}else{
			return;
		}
		//end for i22
		
		j21=g21[g21.length-1];//"5"
		j22=g22[g22.length-1];//"5"  column value
		
		k21;
		var lengthSection40and45=section40and45.length;
		for(var i=0;i<lengthSection40and45;i++){
			if(section40and45[i].section==j21){
				k21=section40and45[i].sectionID;//7  row value
			}
		}
		//start k22
		if(k13=="2"){
			var lengthAllContainerColumn=allContainerColumn.length;
			for(var i=0;i<lengthAllContainerColumn;i++){
				if(allContainerColumn[i].section==j22){
					j22column=allContainerColumn[i].index;
				}
			}
			var lengthSection40and45=section40and45.length;
			for(var i=0;i<lengthSection40and45;i++){
				if(section40and45[i].sectionID==k21){
					j22row=section40and45[i].index;
				}
			}
			k22=twentyFeetLast2DigitCode[j22row][j22column];
		}else{
			var lengthAllContainerColumn=allContainerColumn.length;
			for(var i=0;i<lengthAllContainerColumn;i++){
				if(allContainerColumn[i].section==j22){
					j22column=allContainerColumn[i].index;
				}
			}
			var lengthSection40and45=section40and45.length;
			for(var i=0;i<lengthSection40and45;i++){
				if(section40and45[i].sectionID==k21){
					j22row=section40and45[i].index;
				}
			}
			k22=fortyOrFortyFiveLast2DigitCode[j22row][j22column];
		}
		//end k22
		
		//start k23
		if(i22=="X"){
			if(k13=="2" && k22=="15"){
				k23="XX";
			}else if(k13="4" && k22=="10"){
				k23="XX";
			}else if(k13="5" && k22=="10"){
				k23="XX";
			}else if(k13="D" && k22=="14"){
				k23="XX";
			}else if(k13="F" && k22=="14"){
				k23="XX";
			}else{
				k23=k22;
			}
		}else{
			k23=k22;
		}
		
		cedexCode=g17+i22+k23;
		console.log(cedexCode);
		//end k23
	}
	//end:		function for CEDEX Code
	
	//grid nomenclature
	$scope.highA1_D4	=["A1","B1","C1","D1"];
	$scope.topA1_D4		=["A2","B2","C2","D2"];
	$scope.bottomA1_D4	=["A3","B3","C3","D3"];
	$scope.groundA1_D4	=["A4","B4","C4","D4"];
	$scope.highB1_F4	=["B1","C1","D1","E1","F1"];
	$scope.topB1_F4		=["B2","C2","D2","E2","F2"];
	$scope.bottomB1_F4	=["B3","C3","D3","E3","F3"];
	$scope.groundB1_F4	=["B4","C4","D4","E4","F4"];
	$scope.highG1_K4	=["G1","H1","I1","J1","K1"];
	$scope.topG1_K4		=["G2","H2","I2","J2","K2"];
	$scope.bottomG1_K4	=["G3","H3","I3","J3","K3"];
	$scope.groundG1_K4	=["G4","H4","I4","J4","K4"];
	$scope.highB1_K4	=["B1","C1","D1","E1","F1","G1","H1","I1","J1","K1"];
	$scope.topB1_K4		=["B2","C2","D2","E2","F2","G2","H2","I2","J2","K2"];
	$scope.bottomB1_K4	=["B3","C3","D3","E3","F3","G3","H3","I3","J3","K3"];
	$scope.groundB1_K4	=["B4","C4","D4","E4","F4","G4","H4","I4","J4","K4"];
	$scope.highA1_L4	=["A1","B1","C1","D1","E1","F1","G1","H1","I1","J1","K1","L1"];
	$scope.topA1_L4     =["A2","B2","C2","D2","E2","F2","G2","H2","I2","J2","K2","L2"];
	$scope.bottomA1_L4  =["A3","B3","C3","D3","E3","F3","G3","H3","I3","J3","K3","L3"];
	$scope.groundA1_L4  =["A4","B4","C4","D4","E4","F4","G4","H4","I4","J4","K4","L4"];
	//grid nomenclature
	
	var containerImgPath='img/three_D_Container/';
	if($scope.sideOfContainer=='RIGHT'){
		if($scope.currentSizeType.substr(0,2)=='20'){
			$scope.imagePathForExterior=containerImgPath+'2DRX.png';
			$scope.imagePathForInterior=containerImgPath+'2DRI.png';
			$('#forTwentyRightExterior').show();
			$('#forTwentyRightInterior').show();
		}else if($scope.currentSizeType.substr(0,2)=="40"){
			$scope.imagePathForExterior=containerImgPath+'40FEET/4DRX.png';
			$scope.imagePathForInterior=containerImgPath+'40FEET/4DRI.png';
			$('#forFortyExterior').show();
			$('#forFortyInterior').show();
		}else{
			$scope.imagePathForExterior=containerImgPath+'45FEET/5DRX.png';
			$scope.imagePathForInterior=containerImgPath+'45FEET/5DRI.png';
			$('#forFortyFiveExterior').show();
			$('#forFortyFiveInterior').show();
		}
	}else if($scope.sideOfContainer=='LEFT'){
		if($scope.currentSizeType.substr(0,2)=='20'){
			$scope.imagePathForExterior=containerImgPath+'2DLX.png';
			$scope.imagePathForInterior=containerImgPath+'2DLI.png';
			$('#forTwentyLeftExterior').show();
			$('#forTwentyLeftInterior').show();
		}else if($scope.currentSizeType.substr(0,2)=="40"){
			$scope.imagePathForExterior=containerImgPath+'40FEET/4DLX.png';
			$scope.imagePathForInterior=containerImgPath+'40FEET/4DLI.png';
			$('#forFortyExterior').show();
			$('#forFortyInterior').show();
		}else{
			$scope.imagePathForExterior=containerImgPath+'45FEET/5DLX.png';
			$scope.imagePathForInterior=containerImgPath+'45FEET/5DLI.png';
			$('#forFortyFiveExterior').show();
			$('#forFortyFiveInterior').show();
		}
	}else if($scope.sideOfContainer=='TOP'){
		if($scope.currentSizeType.substr(0,2)=='20'){
			$scope.imagePathForExterior=containerImgPath+'2DTX.png';
			$scope.imagePathForInterior=containerImgPath+'2DTI.png';
			$('#forTwentyTopBottomExterior').show();
			$('#forTwentyTopBottomInterior').show();
		}else if($scope.currentSizeType.substr(0,2)=="40"){
			$scope.imagePathForExterior=containerImgPath+'40FEET/4DTX.png';
			$scope.imagePathForInterior=containerImgPath+'40FEET/4DTI.png';
			$('#forFortyExterior').show();
			$('#forFortyInterior').show();
		}else{
			$scope.imagePathForExterior=containerImgPath+'45FEET/5DTX.png';
			$scope.imagePathForInterior=containerImgPath+'45FEET/5DTI.png';
			$('#forFortyFiveExterior').show();
			$('#forFortyFiveInterior').show();
		}
	}else if($scope.sideOfContainer=='BOTTOM'){
		if($scope.currentSizeType.substr(0,2)=='20'){
			$scope.imagePathForExterior=containerImgPath+'2DBX.png';
			$scope.imagePathForInterior=containerImgPath+'2DBI.png';
			$('#forTwentyTopBottomExterior').show();
			$('#forTwentyTopBottomInterior').show();
		}else if($scope.currentSizeType.substr(0,2)=="40"){
			$scope.imagePathForExterior=containerImgPath+'40FEET/4DBX.png';
			$scope.imagePathForInterior=containerImgPath+'40FEET/4DBI.png';
			$('#forFortyExterior').show();
			$('#forFortyInterior').show();
		}else{
			$scope.imagePathForExterior=containerImgPath+'45FEET/5DBX.png';
			$scope.imagePathForInterior=containerImgPath+'45FEET/5DBI.png';
			$('#forFortyFiveExterior').show();
			$('#forFortyFiveInterior').show();
		}
	}else if($scope.sideOfContainer=='DOOR'){
		$scope.imagePathForExterior=containerImgPath+'DDX.png';
		$scope.imagePathForInterior=containerImgPath+'DDI.png';
		$('#doorExteriorInterior').show();
	}else if($scope.sideOfContainer='FRONT'){
		$scope.imagePathForExterior=containerImgPath+'DFX.png';
		$scope.imagePathForInterior=containerImgPath+'DFI.png';
		$('#frontExteriorInterior').show();
	}
	
	exterior=$('#bottomSideX');
	interior=$('#bottomSideI');
	$scope.damageCode=function(currentContainerNumber){
		 damageCodesFactory.currentContainerNumber=$scope.currentContainerNumber;
		 damageCodesFactory.currentSizeType=$scope.currentSizeType;
		 damageCodesFactory.damageCodes =$('#selections').html();// angular.toJson($scope.damageCodes);
		 // alert(damageCodesFactory.damageCodes);
		 screen.orientation.lock('portrait');
		 window.location="#/calculatedCIR/"+currentContainerNumber+"";
	};
	// highlightHelper(exterior,interior);
	$('header').hide();
}]);