//	HYPE.documents["postcard"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "postcard.resources";
	var documentName = "postcard";
	var documentLoaderFilename = "postcard_hype_generated_script.js";
	var mainContainerID = "postcard_hype_container";

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
	
	var resources = {"10":{n:"background.jpg",p:1},"2":{n:"cloud1.png",p:1},"3":{n:"cloud2.png",p:1},"11":{n:"background.jpg",p:1},"4":{n:"cloud3.png",p:1},"5":{n:"gotoyourhappyplace.png",p:1},"12":{n:"sun.png",p:1},"6":{n:"alumni-weekend.png",p:1},"7":{n:"background-1.jpg",p:1},"0":{n:"foreground.png",p:1},"8":{n:"sun.jpg",p:1},"1":{n:"building.png",p:1},"9":{n:"background.jpg",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",onSceneTimelineCompleteActions:[{timelineIdentifier:"kTimelineDefaultIdentifier",type:3}],v:{"F5E69159-F474-4766-A8FB-E1101A6A3BFB-37231-00009C8D9800E475":{o:"content-box",h:"7",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:802,z:"1",i:"F5E69159-F474-4766-A8FB-E1101A6A3BFB-37231-00009C8D9800E475",d:487,k:"div"},"AF4185F1-4EE7-4715-86CA-A8333FCEC7DD-37231-00009D6940162CE0":{o:"content-box",h:"8",p:"no-repeat",x:"visible",a:384,q:"100% 100%",b:-30,j:"absolute",r:"inline",c:491,z:"2",i:"AF4185F1-4EE7-4715-86CA-A8333FCEC7DD-37231-00009D6940162CE0",d:479,k:"div",aY:"0",e:"1.000000",aG:"UCSC Sunset rotating",f:"0deg"},"54347229-0C00-4795-ADF2-7113E675F2D9-37231-00009D67925DBDC7":{o:"content-box",h:"4",x:"visible",a:239,q:"100% 100%",b:19,j:"absolute",r:"inline",c:159,z:"4",i:"54347229-0C00-4795-ADF2-7113E675F2D9-37231-00009D67925DBDC7",d:75,aX:8,k:"div",e:"1.000000",aG:"Cloud moves"},"28602AB8-2F63-46C6-8966-CC3A036560EB-37231-00009C9441E55843":{o:"content-box",h:"1",x:"visible",a:0,q:"100% 100%",b:34,j:"absolute",r:"inline",c:756,z:"6",i:"28602AB8-2F63-46C6-8966-CC3A036560EB-37231-00009C9441E55843",d:288,k:"div"},"AE94E8EE-3BB4-4AD5-85B2-382FF0DEF1A4-37231-0000A242C3B767A7":{o:"content-box",h:"6",x:"visible",a:428,q:"100% 100%",b:77,j:"absolute",r:"inline",c:328,z:"9",i:"AE94E8EE-3BB4-4AD5-85B2-382FF0DEF1A4-37231-0000A242C3B767A7",d:51,k:"div",aG:"UC Santa Cruz Alumni Weekend - April 26-28, 2013"},"0E60B517-5A6E-4EEA-8560-887C30B5D047-37231-0000A23EB06C9EA8":{o:"content-box",h:"5",x:"visible",a:489,q:"100% 100%",b:170,j:"absolute",r:"inline",c:268,z:"8",i:"0E60B517-5A6E-4EEA-8560-887C30B5D047-37231-0000A23EB06C9EA8",d:146,k:"div",aG:"linger, laugh, lose yourself - Go to your happy place :)"},"531F1465-083A-4685-9EBB-7D6D05009FCC-37231-00009D64CB678B96":{o:"content-box",h:"3",x:"visible",a:25,q:"100% 100%",b:-26,j:"absolute",r:"inline",c:294,z:"5",i:"531F1465-083A-4685-9EBB-7D6D05009FCC-37231-00009D64CB678B96",d:109,k:"div",e:"1.000000"},"D6B6E240-8102-4968-A02B-6E6FD2D0D25A-37231-00009D61D011097F":{o:"content-box",h:"2",x:"visible",a:-136,q:"100% 100%",b:58,j:"absolute",r:"inline",c:293,z:"3",i:"D6B6E240-8102-4968-A02B-6E6FD2D0D25A-37231-00009D61D011097F",d:109,k:"div",e:"1.000000",aG:"Cloud moves"},"07C85CA7-6A3C-4FB5-B385-EC9D0AA812C7-37231-00009C901A59E5FC":{o:"content-box",h:"0",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:802,z:"7",i:"07C85CA7-6A3C-4FB5-B385-EC9D0AA812C7-37231-00009C901A59E5FC",d:487,k:"div"}},n:"postcard",T:{kTimelineDefaultIdentifier:{d:40,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:10,i:"f",e:"90deg",r:1,s:"0deg",o:"AF4185F1-4EE7-4715-86CA-A8333FCEC7DD-37231-00009D6940162CE0"},{f:"2",t:0,d:40,i:"a",e:572,r:1,s:-136,o:"D6B6E240-8102-4968-A02B-6E6FD2D0D25A-37231-00009D61D011097F"},{f:"2",t:0,d:40,i:"b",e:44,r:1,s:58,o:"D6B6E240-8102-4968-A02B-6E6FD2D0D25A-37231-00009D61D011097F"},{f:"2",t:8,d:25,i:"e",e:"1.000000",r:1,s:"1.000000",o:"54347229-0C00-4795-ADF2-7113E675F2D9-37231-00009D67925DBDC7"},{f:"2",t:8,d:25,i:"a",e:630,r:1,s:239,o:"54347229-0C00-4795-ADF2-7113E675F2D9-37231-00009D67925DBDC7"},{f:"2",t:8,d:25,i:"b",e:18,r:1,s:19,o:"54347229-0C00-4795-ADF2-7113E675F2D9-37231-00009D67925DBDC7"},{f:"2",t:8,d:25,i:"d",e:75,r:1,s:75,o:"54347229-0C00-4795-ADF2-7113E675F2D9-37231-00009D67925DBDC7"},{f:"2",t:8,d:25,i:"c",e:159,r:1,s:159,o:"54347229-0C00-4795-ADF2-7113E675F2D9-37231-00009D67925DBDC7"},{f:"2",t:10,d:10,i:"f",e:"180deg",s:"90deg",o:"AF4185F1-4EE7-4715-86CA-A8333FCEC7DD-37231-00009D6940162CE0"},{f:"2",t:15,d:25,i:"a",e:639,r:1,s:25,o:"531F1465-083A-4685-9EBB-7D6D05009FCC-37231-00009D64CB678B96"},{f:"2",t:15,d:25,i:"b",e:-27,r:1,s:-26,o:"531F1465-083A-4685-9EBB-7D6D05009FCC-37231-00009D64CB678B96"},{f:"2",t:20,d:10,i:"f",e:"270deg",s:"180deg",o:"AF4185F1-4EE7-4715-86CA-A8333FCEC7DD-37231-00009D6940162CE0"},{f:"2",t:30,d:10,i:"f",e:"360deg",s:"270deg",o:"AF4185F1-4EE7-4715-86CA-A8333FCEC7DD-37231-00009D6940162CE0"}],f:30}},o:"192FACAC-34C4-4A70-8675-EFFEDFFD9E1F-37231-00009C14B746801A"}];
	
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
	hypeDoc.setShowLoadingPage(true);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setGraphicsAcceleration(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;
	document.getElementById(mainContainerID).setAttribute("HYPE_documentName", documentName);

	hypeDoc.documentLoad(this.body);
}());

