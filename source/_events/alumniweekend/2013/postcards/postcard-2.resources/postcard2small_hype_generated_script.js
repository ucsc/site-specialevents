//	HYPE.documents["post-card-2-small"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "post-card-2-small.resources";
	var documentName = "post-card-2-small";
	var documentLoaderFilename = "postcard2small_hype_generated_script.js";
	var mainContainerID = "postcard2small_hype_container";

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
	
	var resources = {"10":{n:"land.png",p:1},"2":{n:"wave-1.png",p:1},"3":{n:"wave-2.png",p:1},"11":{n:"sun.jpg",p:1},"4":{n:"wave-3.png",p:1},"5":{n:"birds.png",p:1},"12":{n:"background.jpg",p:1},"6":{n:"cloud1.png",p:1},"13":{n:"sun.png",p:1},"7":{n:"cloud2.png",p:1},"0":{n:"foregroud.png",p:1},"8":{n:"cloud3.png",p:1},"1":{n:"wave-main.png",p:1},"9":{n:"background.jpg",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",onSceneTimelineCompleteActions:[{type:1,transition:1,sceneOid:"1"}],v:{"10":{o:"content-box",h:"5",x:"visible",a:293,q:"100% 100%",b:126,j:"absolute",r:"inline",c:49,z:"4",k:"div",d:37,e:"1.000000"},"15":{c:4,d:4,I:"None",J:"None",K:"None",g:"#29130D",L:"None",M:0,N:0,aI:20,A:"#4E351B",x:"visible",j:"absolute",O:0,P:0,B:"#4E351B",C:"#4E351B",z:"14",k:"div",D:"#4E351B",aJ:20,aK:20,a:504,aL:20,b:109},"3":{o:"content-box",h:"12",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:591,z:"1",k:"div",d:643},"11":{o:"content-box",h:"6",x:"visible",a:18,q:"100% 100%",b:130,j:"absolute",r:"inline",c:139,z:"5",k:"div",d:65},"16":{o:"content-box",h:"10",x:"visible",a:-1,q:"100% 100%",b:0,j:"absolute",r:"inline",c:591,z:"3",k:"div",d:643},"4":{o:"content-box",h:"0",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:591,z:"11",k:"div",d:643},"5":{o:"content-box",h:"1",x:"visible",a:14,q:"100% 100%",b:303,j:"absolute",r:"inline",c:561,z:"12",k:"div",d:78},"12":{o:"content-box",h:"7",x:"visible",a:44,q:"100% 100%",b:74,j:"absolute",r:"inline",c:65,z:"6",k:"div",d:34},"6":{o:"content-box",h:"2",x:"visible",a:293,q:"100% 100%",b:335,j:"absolute",r:"inline",c:90,z:"8",k:"div",d:14,e:"1.000000"},"13":{o:"content-box",h:"8",x:"visible",a:34,q:"100% 100%",b:211,j:"absolute",r:"inline",c:107,z:"10",k:"div",d:40},"7":{o:"content-box",h:"3",x:"visible",a:124,q:"100% 100%",b:320,j:"absolute",r:"inline",c:169,z:"7",k:"div",d:15,e:"1.000000"},"8":{o:"content-box",h:"4",x:"visible",a:344,q:"100% 100%",b:311,j:"absolute",r:"inline",c:218,z:"9",k:"div",d:11,e:"1.000000"},"14":{c:4,d:4,I:"None",J:"None",K:"None",g:"#29130D",L:"None",M:0,N:0,aI:20,A:"#4E351B",x:"visible",j:"absolute",O:0,P:0,B:"#4E351B",C:"#4E351B",z:"13",k:"div",D:"#4E351B",aJ:20,aK:20,a:516,aL:20,b:105},"9":{p:"no-repeat",c:591,q:"100% 100%",d:629.74099999999999,r:"inline",f:"0deg",h:"11",aY:"0",A:"#FDE37C",x:"visible",j:"absolute",B:"#FDE37C",k:"div",C:"#FDE37C",Q:0,z:"2",D:"#FDE37C",R:"#F1D566",S:0,a:-191,o:"content-box",T:0,b:-95}},n:"postcard-two",T:{kTimelineDefaultIdentifier:{d:60,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"1",t:0,d:30,i:"a",e:233,s:18,o:"11"},{f:"1",t:0,d:60,i:"b",e:130,s:130,o:"11"},{f:"1",t:0,d:5.01,i:"e",e:"0.000000",s:"1.000000",o:"6"},{f:"1",t:0,d:30,i:"c",e:10,s:49,o:"10"},{f:"1",t:0,d:30,i:"d",e:8,s:37,o:"10"},{f:"1",t:0,d:15,i:"f",e:"90deg",s:"0deg",o:"9"},{f:"1",t:0,d:1,i:"a",e:514,s:516,o:"14"},{f:"1",t:0,d:3,i:"b",e:107,s:105,o:"14"},{f:"1",t:0,d:7.01,i:"e",e:"0.000000",s:"1.000000",o:"7"},{f:"1",t:0,d:1,i:"a",e:502,s:504,o:"15"},{f:"1",t:0,d:3,i:"b",e:111,s:109,o:"15"},{f:"1",t:0,d:3.18,i:"e",e:"0.000000",s:"1.000000",o:"8"},{f:"1",t:0,d:38.08,i:"a",e:263,s:44,o:"12"},{f:"1",t:0,d:38.08,i:"b",e:76,s:74,o:"12"},{f:"1",t:0,d:30,i:"e",e:"0.122378",s:"1.000000",o:"10"},{f:"1",t:0,d:32.29,i:"a",e:276,s:34,o:"13"},{f:"1",t:0,d:59.06,i:"b",e:211,s:211,o:"13"},{f:"1",t:0,d:30,i:"b",e:213.5,s:126,o:"10"},{f:"1",t:0,d:30,i:"a",e:361,s:293,o:"10"},{f:"1",t:1,d:2,i:"a",e:517,s:514,o:"14"},{f:"1",t:1,d:2,i:"a",e:505,s:502,o:"15"},{f:"1",t:3,d:2,i:"b",e:102,s:107,o:"14"},{f:"1",t:3,d:2,i:"b",e:106,s:111,o:"15"},{f:"1",t:3,d:6.2,i:"a",e:519,s:517,o:"14"},{f:"1",t:3,d:6.2,i:"a",e:507,s:505,o:"15"},{f:"1",t:3.18,d:6.21,i:"e",e:"1.000000",s:"0.000000",o:"8"},{f:"1",t:5,d:4.2,i:"b",e:105,s:102,o:"14"},{f:"1",t:5,d:4.2,i:"b",e:109,s:106,o:"15"},{f:"1",t:5.01,d:4.16,i:"e",e:"1.000000",s:"0.000000",o:"6"},{f:"1",t:7.01,d:6.12,i:"e",e:"1.000000",s:"0.000000",o:"7"},{f:"1",t:9.17,d:5.19,i:"e",e:"0.000000",s:"1.000000",o:"6"},{f:"1",t:9.2,d:27.22,i:"b",e:107,s:105,o:"14"},{f:"1",t:9.2,d:2.1,i:"a",e:515,s:519,o:"14"},{f:"1",t:9.2,d:27.22,i:"b",e:111,s:109,o:"15"},{f:"1",t:9.2,d:2.1,i:"a",e:503,s:507,o:"15"},{f:"1",t:10.09,d:5.22,i:"e",e:"0.000000",s:"1.000000",o:"8"},{f:"1",t:12,d:22.22,i:"a",e:517,s:515,o:"14"},{f:"1",t:12,d:22.22,i:"a",e:505,s:503,o:"15"},{f:"1",t:13.13,d:4.2,i:"e",e:"0.000000",s:"1.000000",o:"7"},{f:"1",t:15,d:15,i:"f",e:"180deg",s:"90deg",o:"9"},{f:"1",t:15.06,d:5.19,i:"e",e:"1.000000",s:"0.000000",o:"6"},{f:"1",t:16.01,d:6.13,i:"e",e:"1.000000",s:"0.000000",o:"8"},{f:"1",t:18.03,d:5.15,i:"e",e:"1.000000",s:"0.000000",o:"7"},{f:"1",t:20.25,d:5.09,i:"e",e:"0.000000",s:"1.000000",o:"6"},{f:"1",t:22.14,d:7.16,i:"e",e:"0.000000",s:"1.000000",o:"8"},{f:"1",t:23.18,d:3.23,i:"e",e:"0.000000",s:"1.000000",o:"7"},{f:"1",t:26.04,d:5.28,i:"e",e:"1.000000",s:"0.000000",o:"6"},{f:"1",t:27.11,d:5.1,i:"e",e:"1.000000",s:"0.000000",o:"7"},{f:"1",t:30,d:30,i:"c",e:49,s:10,o:"10"},{f:"1",t:30,d:30,i:"d",e:37,s:8,o:"10"},{f:"1",t:30,d:15,i:"f",e:"270deg",s:"180deg",o:"9"},{f:"1",t:30,d:30,i:"b",e:126,s:213.5,o:"10"},{f:"1",t:30,d:30,i:"a",e:556,s:233,o:"11"},{f:"1",t:30,d:30,i:"a",e:293,s:361,o:"10"},{f:"1",t:30,d:30,i:"e",e:"1.000000",s:"0.122378",o:"10"},{f:"1",t:30,d:3.03,i:"e",e:"1.000000",s:"0.000000",o:"8"},{f:"1",t:32.02,d:6.04,i:"e",e:"0.000000",s:"1.000000",o:"6"},{f:"1",t:32.21,d:6.17,i:"e",e:"0.000000",s:"1.000000",o:"7"},{f:"1",t:32.29,d:26.07,i:"a",e:562,s:276,o:"13"},{f:"1",t:33.03,d:4.13,i:"e",e:"0.000000",s:"1.000000",o:"8"},{f:"1",t:34.22,d:4.06,i:"a",e:503,s:505,o:"15"},{f:"1",t:34.22,d:4.06,i:"a",e:515,s:517,o:"14"},{f:"1",t:37.12,d:3.18,i:"b",e:105,s:107,o:"14"},{f:"1",t:37.12,d:3.18,i:"b",e:109,s:111,o:"15"},{f:"1",t:37.16,d:4.22,i:"e",e:"1.000000",s:"0.000000",o:"8"},{f:"1",t:38.06,d:3.21,i:"e",e:"1.000000",s:"0.000000",o:"6"},{f:"1",t:38.08,d:18.17,i:"a",e:454,s:263,o:"12"},{f:"1",t:38.28,d:2.02,i:"a",e:506,s:503,o:"15"},{f:"1",t:38.28,d:2.02,i:"a",e:518,s:515,o:"14"},{f:"1",t:39.08,d:6.27,i:"e",e:"1.000000",s:"0.000000",o:"7"},{f:"1",t:41,d:8.14,i:"b",e:110,s:109,o:"15"},{f:"1",t:41,d:8.14,i:"b",e:106,s:105,o:"14"},{f:"1",t:41,d:1.29,i:"a",e:503,s:506,o:"15"},{f:"1",t:41,d:1.29,i:"a",e:515,s:518,o:"14"},{f:"1",t:41.27,d:2.03,i:"e",e:"0.000000",s:"1.000000",o:"6"},{f:"1",t:42.08,d:4.15,i:"e",e:"0.000000",s:"1.000000",o:"8"},{f:"1",t:42.29,d:2.01,i:"a",e:507,s:503,o:"15"},{f:"1",t:42.29,d:2.01,i:"a",e:519,s:515,o:"14"},{f:"1",t:44,d:5.1,i:"e",e:"1.000000",s:"0.000000",o:"6"},{f:"1",t:45,d:15,i:"f",e:"360deg",s:"270deg",o:"9"},{f:"1",t:45,d:2,i:"a",e:515,s:519,o:"14"},{f:"1",t:45,d:2,i:"a",e:503,s:507,o:"15"},{f:"1",t:46.05,d:3.15,i:"e",e:"0.000000",s:"1.000000",o:"7"},{f:"1",t:46.23,d:4.08,i:"e",e:"1.000000",s:"0.000000",o:"8"},{f:"1",t:47,d:2.14,i:"a",e:517,s:515,o:"14"},{f:"1",t:47,d:2.14,i:"a",e:505,s:503,o:"15"},{f:"1",t:49.1,d:2.26,i:"e",e:"0.000000",s:"1.000000",o:"6"},{f:"1",t:49.14,d:2.15,i:"b",e:104,s:106,o:"14"},{f:"1",t:49.14,d:2.15,i:"b",e:108,s:110,o:"15"},{f:"1",t:49.14,d:2.15,i:"a",e:518,s:517,o:"14"},{f:"1",t:49.14,d:2.15,i:"a",e:506,s:505,o:"15"},{f:"1",t:49.2,d:3.01,i:"e",e:"1.000000",s:"0.000000",o:"7"},{f:"1",t:51.01,d:3.06,i:"e",e:"0.000000",s:"1.000000",o:"8"},{f:"1",t:51.29,d:2.01,i:"b",e:106,s:104,o:"14"},{f:"1",t:51.29,d:2.01,i:"b",e:110,s:108,o:"15"},{f:"1",t:51.29,d:2.01,i:"a",e:517,s:518,o:"14"},{f:"1",t:51.29,d:2.01,i:"a",e:505,s:506,o:"15"},{f:"1",t:52.06,d:7.24,i:"e",e:"1.000000",s:"0.000000",o:"6"},{f:"1",t:52.21,d:3.12,i:"e",e:"0.000000",s:"1.000000",o:"7"},{f:"1",t:54,d:6,i:"b",e:105,s:106,o:"14"},{f:"1",t:54,d:6,i:"b",e:109,s:110,o:"15"},{f:"1",t:54,d:1.28,i:"a",e:519,s:517,o:"14"},{f:"1",t:54,d:1.28,i:"a",e:507,s:505,o:"15"},{f:"1",t:54.07,d:5.23,i:"e",e:"1.000000",s:"0.000000",o:"8"},{f:"1",t:55.28,d:4.02,i:"a",e:516,s:519,o:"14"},{f:"1",t:55.28,d:4.02,i:"a",e:504,s:507,o:"15"},{f:"1",t:56.03,d:3.27,i:"e",e:"1.000000",s:"0.000000",o:"7"}],f:30}},o:"1"}];
	
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

