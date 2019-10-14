//	HYPE.documents["postcard-3"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "postcard-3.resources";
	var documentName = "postcard-3";
	var documentLoaderFilename = "postcard3_hype_generated_script.js";
	var mainContainerID = "postcard3_hype_container";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_150 == "undefined") {
		if(typeof window.HYPE_150_DocumentsToLoad == "undefined") {
			window.HYPE_150_DocumentsToLoad = new Array();
			window.HYPE_150_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=150';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_150_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	// handle attempting to load multiple times
	if(HYPE.documents[documentName] != null) {
		var index = 1;
		var originalDocumentName = documentName;
		do {
			documentName = "" + originalDocumentName + "-" + (index++);
		} while(HYPE.documents[documentName] != null);
		
		var allDivs = document.getElementsByTagName("div");
		var foundEligibleContainer = false;
		for(var i = 0; i < allDivs.length; i++) {
			if(allDivs[i].id == mainContainerID && allDivs[i].getAttribute("HYPE_documentName") == null) {
				var index = 1;
				var originalMainContainerID = mainContainerID;
				do {
					mainContainerID = "" + originalMainContainerID + "-" + (index++);
				} while(document.getElementById(mainContainerID) != null);
				
				allDivs[i].id = mainContainerID;
				foundEligibleContainer = true;
				break;
			}
		}
		
		if(foundEligibleContainer == false) {
			return;
		}
	}
	
	var hypeDoc = new HYPE_150();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",N:"i",f:"d",aT:"i",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",bG:"f",aW:"f",S:"i",aI:"i",bH:"d",l:"d",aX:"i",T:"i",m:"c",bI:"f",aJ:"i",n:"c",aK:"i",bJ:"f",aZ:"i",X:"i",A:"c",bK:"f",Y:"bM",B:"c",aL:"i",C:"c",bL:"f",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};
	
	var resources = {"10":{n:"leaf-bunch.png",p:1},"2":{n:"girl.png",p:1},"3":{n:"hole-cover.png",p:1},"11":{n:"leaf1.png",p:1},"4":{n:"bird.png",p:1},"5":{n:"text.png",p:1},"12":{n:"leaf2.png",p:1},"6":{n:"deer-one.png",p:1},"13":{n:"leaf3.png",p:1},"7":{n:"deer-two.png",p:1},"0":{n:"background.jpg",p:1},"8":{n:"deer-one-right.png",p:1},"14":{n:"leaf4.png",p:1},"1":{n:"trees.png",p:1},"9":{n:"deer-two-right.png",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",onSceneTimelineCompleteActions:[{type:1,transition:1,sceneOid:"1"}],v:{"10":{o:"content-box",h:"8",x:"visible",a:217,q:"100% 100%",b:309,j:"absolute",r:"inline",c:75,z:"4",k:"div",d:76,e:"0.000000"},"2":{o:"content-box",h:"0",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:652,z:"1",k:"div",d:737},"15":{o:"content-box",h:"12",x:"visible",a:90,q:"100% 100%",b:377,j:"absolute",r:"inline",c:37,z:"11",k:"div",d:73},"3":{o:"content-box",h:"1",x:"visible",a:11,q:"100% 100%",b:15,j:"absolute",r:"inline",c:629,z:"6",k:"div",d:706,e:"1.000000"},"11":{o:"content-box",h:"9",x:"visible",a:270,q:"100% 100%",b:301,j:"absolute",r:"inline",c:78,z:"5",k:"div",d:68,e:"0.017483"},"16":{o:"content-box",h:"13",x:"visible",a:90,q:"100% 100%",b:153,j:"absolute",r:"inline",c:35,z:"12",k:"div",d:65},"4":{o:"content-box",h:"2",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:652,z:"14",k:"div",d:737,aG:"Student "},"5":{o:"content-box",h:"3",x:"visible",a:81,q:"100% 100%",b:74,j:"absolute",r:"inline",c:53,z:"8",k:"div",d:63},"17":{o:"content-box",h:"14",x:"visible",a:101,q:"100% 100%",b:285,j:"absolute",r:"inline",c:72,z:"13",k:"div",d:100},"6":{o:"content-box",h:"4",x:"visible",a:130,q:"100% 100%",b:94,j:"absolute",r:"inline",c:32,z:"7",k:"div",d:19},"13":{o:"content-box",h:"10",x:"visible",a:39,q:"100% 100%",b:0,j:"absolute",r:"inline",c:306,z:"9",k:"div",d:466},"7":{o:"content-box",h:"5",x:"visible",a:244,q:"100% 100%",b:66,j:"absolute",r:"inline",c:342,z:"15",k:"div",d:593,aG:"Alumni Weekend April 26-28, 2013 - UCSC - linger, laugh, lose yourself. go to your happy place :)"},"8":{o:"content-box",h:"6",x:"visible",a:512,q:"100% 100%",b:317,j:"absolute",r:"inline",c:75,z:"2",aW:"0.000000",d:76,k:"div",e:"0.000000"},"14":{o:"content-box",h:"11",x:"visible",a:159,q:"100% 100%",b:169,j:"absolute",r:"inline",c:66,z:"10",k:"div",d:36},"9":{o:"content-box",h:"7",x:"visible",a:463,q:"100% 100%",b:309,j:"absolute",r:"inline",c:78,z:"3",k:"div",d:68,e:"0.000000"}},n:"postcard-3",T:{kTimelineDefaultIdentifier:{d:18,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"1",t:0,d:1,i:"e",e:"1.000000",s:"0.000000",o:"8"},{f:"1",t:0,d:2,i:"b",e:317,s:317,o:"8"},{f:"1",t:0,d:12.29,i:"a",e:270,s:270,o:"11"},{f:"1",t:0,d:7,i:"b",e:309,s:309,o:"9"},{f:"1",t:0,d:10.01,i:"e",e:"0.000000",s:"0.000000",o:"10"},{f:"1",t:0,d:1,i:"a",e:130,s:130,o:"6"},{f:"1",t:0,d:1,i:"a",e:86,s:90,o:"15"},{f:"1",t:0,d:2,i:"b",e:172,s:169,o:"14"},{f:"1",t:0,d:2,i:"a",e:93,s:90,o:"16"},{f:"1",t:0,d:2,i:"a",e:106,s:101,o:"17"},{f:"1",t:1,d:1,i:"e",e:"1.000000",s:"0.000000",o:"9"},{f:"1",t:1,d:1,i:"e",e:"0.000000",s:"1.000000",o:"8"},{f:"1",t:1,d:1,i:"a",e:102,s:130,o:"6"},{f:"1",t:1,d:2,i:"a",e:89,s:86,o:"15"},{f:"1",t:1.29,d:0.01,i:"a",e:420,s:512,o:"8"},{f:"1",t:2,d:2.01,i:"b",e:169,s:172,o:"14"},{f:"1",t:2,d:1,i:"e",e:"0.000000",s:"1.000000",o:"9"},{f:"1",t:2,d:1,i:"e",e:"1.000000",s:"0.000000",o:"8"},{f:"1",t:2,d:1.29,i:"a",e:420,s:420,o:"8"},{f:"1",t:2,d:2,i:"a",e:90,s:93,o:"16"},{f:"1",t:2,d:2,i:"a",e:101,s:106,o:"17"},{f:"1",t:2,d:3,i:"a",e:103,s:102,o:"6"},{f:"1",t:2.29,d:0,i:"a",e:464,s:463,o:"9"},{f:"1",t:2.29,d:0.01,i:"a",e:376,s:464,o:"9"},{f:"1",t:3,d:1,i:"e",e:"1.000000",s:"0.000000",o:"9"},{f:"1",t:3,d:1,i:"e",e:"0.000000",s:"1.000000",o:"8"},{f:"1",t:3,d:1,i:"a",e:376,s:376,o:"9"},{f:"1",t:3,d:3.01,i:"a",e:87,s:89,o:"15"},{f:"1",t:3.29,d:0.01,i:"a",e:332,s:420,o:"8"},{f:"1",t:4,d:1,i:"e",e:"0.000000",s:"1.000000",o:"9"},{f:"1",t:4,d:1,i:"e",e:"1.000000",s:"0.000000",o:"8"},{f:"1",t:4,d:2,i:"a",e:87,s:90,o:"16"},{f:"1",t:4,d:2,i:"a",e:94,s:101,o:"17"},{f:"1",t:4,d:1,i:"a",e:332,s:332,o:"8"},{f:"1",t:4,d:0.29,i:"a",e:376,s:376,o:"9"},{f:"1",t:4.01,d:1.29,i:"b",e:165,s:169,o:"14"},{f:"1",t:4.29,d:0.01,i:"a",e:286,s:376,o:"9"},{f:"1",t:5,d:1,i:"e",e:"1.000000",s:"0.000000",o:"9"},{f:"1",t:5,d:1,i:"e",e:"0.000000",s:"1.000000",o:"8"},{f:"1",t:5,d:1,i:"a",e:129,s:103,o:"6"},{f:"1",t:5,d:0.29,i:"a",e:332,s:332,o:"8"},{f:"1",t:5,d:1.29,i:"a",e:286,s:286,o:"9"},{f:"1",t:5.29,d:0.01,i:"a",e:228,s:332,o:"8"},{f:"1",t:6,d:2,i:"b",e:168,s:165,o:"14"},{f:"1",t:6,d:1,i:"e",e:"0.000000",s:"1.000000",o:"9"},{f:"1",t:6,d:1,i:"e",e:"1.000000",s:"0.000000",o:"8"},{f:"1",t:6,d:2,i:"a",e:90,s:87,o:"16"},{f:"1",t:6,d:2,i:"a",e:101,s:94,o:"17"},{f:"1",t:6,d:2.18,i:"a",e:129,s:129,o:"6"},{f:"1",t:6,d:1.29,i:"a",e:228,s:228,o:"8"},{f:"1",t:6.01,d:1.29,i:"a",e:89,s:87,o:"15"},{f:"1",t:6.29,d:0.01,i:"a",e:173,s:286,o:"9"},{f:"1",t:7,d:1,i:"e",e:"1.000000",s:"0.000000",o:"9"},{f:"1",t:7,d:1,i:"e",e:"0.000000",s:"1.000000",o:"8"},{f:"1",t:8,d:2,i:"b",e:165,s:168,o:"14"},{f:"1",t:8,d:1,i:"e",e:"0.000000",s:"1.000000",o:"9"},{f:"1",t:8,d:3,i:"a",e:87,s:89,o:"15"},{f:"1",t:8,d:2,i:"a",e:87,s:90,o:"16"},{f:"1",t:8,d:2,i:"a",e:109,s:101,o:"17"},{f:"1",t:8.18,d:0.22,i:"a",e:102,s:129,o:"6"},{f:"1",t:9.1,d:1.27,i:"a",e:103,s:102,o:"6"},{f:"1",t:10,d:2,i:"b",e:164,s:165,o:"14"},{f:"1",t:10,d:2,i:"a",e:90,s:87,o:"16"},{f:"1",t:10,d:2,i:"a",e:101,s:109,o:"17"},{f:"1",t:10.01,d:0.29,i:"e",e:"1.000000",s:"0.000000",o:"10"},{f:"1",t:10.01,d:0.29,i:"a",e:217,s:217,o:"10"},{f:"1",t:11,d:1,i:"e",e:"1.000000",s:"0.017483",o:"11"},{f:"1",t:11,d:1,i:"e",e:"0.000000",s:"1.000000",o:"10"},{f:"1",t:11,d:0.29,i:"a",e:217,s:217,o:"10"},{f:"1",t:11,d:3,i:"a",e:88,s:87,o:"15"},{f:"1",t:11.07,d:0.22,i:"a",e:129,s:103,o:"6"},{f:"1",t:11.29,d:0.01,i:"a",e:335,s:217,o:"10"},{f:"1",t:11.29,d:2.01,i:"a",e:128,s:129,o:"6"},{f:"1",t:12,d:2,i:"b",e:167,s:164,o:"14"},{f:"1",t:12,d:1,i:"e",e:"0.000000",s:"1.000000",o:"11"},{f:"1",t:12,d:1,i:"e",e:"1.000000",s:"0.000000",o:"10"},{f:"1",t:12,d:1,i:"a",e:335,s:335,o:"10"},{f:"1",t:12,d:2,i:"a",e:94,s:90,o:"16"},{f:"1",t:12,d:2,i:"a",e:93,s:101,o:"17"},{f:"1",t:12.29,d:0.01,i:"a",e:383,s:270,o:"11"},{f:"1",t:13,d:1,i:"e",e:"1.000000",s:"0.000000",o:"11"},{f:"1",t:13,d:1,i:"e",e:"0.000000",s:"1.000000",o:"10"},{f:"1",t:13,d:1,i:"a",e:383,s:383,o:"11"},{f:"1",t:13,d:0.29,i:"a",e:335,s:335,o:"10"},{f:"1",t:13.29,d:0.01,i:"a",e:427,s:335,o:"10"},{f:"1",t:14,d:2,i:"b",e:170,s:167,o:"14"},{f:"1",t:14,d:1,i:"e",e:"0.000000",s:"1.000000",o:"11"},{f:"1",t:14,d:1,i:"e",e:"1.000000",s:"0.000000",o:"10"},{f:"1",t:14,d:0.29,i:"a",e:383,s:383,o:"11"},{f:"1",t:14,d:1.29,i:"a",e:427,s:427,o:"10"},{f:"1",t:14,d:4,i:"a",e:90,s:88,o:"15"},{f:"1",t:14,d:2,i:"a",e:86,s:94,o:"16"},{f:"1",t:14,d:2,i:"a",e:98,s:93,o:"17"},{f:"1",t:14,d:1,i:"a",e:100,s:128,o:"6"},{f:"1",t:14.29,d:0.01,i:"a",e:468,s:383,o:"11"},{f:"1",t:15,d:1,i:"e",e:"1.000000",s:"0.000000",o:"11"},{f:"1",t:15,d:1,i:"e",e:"0.000000",s:"1.000000",o:"10"},{f:"1",t:15,d:1,i:"a",e:468,s:468,o:"11"},{f:"1",t:15,d:2,i:"a",e:101,s:100,o:"6"},{f:"1",t:15.29,d:0.01,i:"a",e:511,s:427,o:"10"},{f:"1",t:16,d:2,i:"b",e:167,s:170,o:"14"},{f:"1",t:16,d:1,i:"e",e:"0.000000",s:"1.000000",o:"11"},{f:"1",t:16,d:1,i:"e",e:"1.000000",s:"0.000000",o:"10"},{f:"1",t:16,d:1,i:"a",e:511,s:511,o:"10"},{f:"1",t:16,d:2,i:"a",e:90,s:86,o:"16"},{f:"1",t:16,d:2,i:"a",e:101,s:98,o:"17"},{f:"1",t:17,d:1,i:"e",e:"0.000000",s:"0.000000",o:"11"},{f:"1",t:17,d:1,i:"e",e:"0.000000",s:"1.000000",o:"10"},{f:"1",t:17,d:1,i:"a",e:130,s:101,o:"6"}],f:30}},o:"1"}];
	
	var javascripts = [];
	
	var functions = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("functions." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			functions[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setResources(resources);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.functions = functions;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID(mainContainerID);
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setGraphicsAcceleration(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;
	document.getElementById(mainContainerID).setAttribute("HYPE_documentName", documentName);

	hypeDoc.documentLoad(this.body);
}());

