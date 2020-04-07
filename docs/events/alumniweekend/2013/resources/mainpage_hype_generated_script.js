//	HYPE.documents["main-page"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "main-page.resources";
	var documentName = "main-page";
	var documentLoaderFilename = "mainpage_hype_generated_script.js";
	var mainContainerID = "mainpage_hype_container";

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

	var resources = {"18":{n:"biker.png",p:1},"10":{n:"happy-place-stay.png",p:1},"19":{n:"bakground.gif",p:1},"11":{n:"happy-place-1.png",p:1},"0":{n:"girl.png",p:1},"12":{n:"happyplace.png",p:1},"1":{n:"squirrel.png",p:1},"20":{n:"sun_v2.jpg",p:1},"2":{n:"building-background.png",p:1},"13":{n:"happyplace-ovr.png",p:1},"3":{n:"cloud1-1.png",p:1},"21":{n:"bottom-end.jpg",p:1},"14":{n:"gotoyourhappyplace_text-1.png",p:1},"4":{n:"cloud2-1.png",p:1},"5":{n:"cloud3-1.png",p:1},"15":{n:"slug.png",p:1},"22":{n:"owl.png",p:1},"6":{n:"owl-ovr.png",p:1},"16":{n:"tree.png",p:1},"7":{n:"slug-1.png",p:1},"8":{n:"slug-ovr.png",p:1},"17":{n:"bike_ovr.png",p:1},"9":{n:"girl_ovr.png",p:1}};

	var scenes = [{x:0,onSceneUnloadActions:[{timelineIdentifier:"kTimelineDefaultIdentifier",type:3}],p:"600px",c:"#F2F0E4",onSceneTimelineCompleteActions:[{type:1,transition:1,sceneOid:"59C1A0CE-B7D9-4A80-AA84-260B828AF4A3-23512-0000DDBD1A2D0AA9"}],v:{"5D675F3B-F27E-49A4-AA69-C61E86E13928-23512-0000DF169ECBAC6E":{o:"content-box",h:"19",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:802,z:"1",i:"5D675F3B-F27E-49A4-AA69-C61E86E13928-23512-0000DF169ECBAC6E",d:439,k:"div",aJ:10,aI:10,aK:10,aL:10},"253D59FA-B4DD-4652-AD53-00C432200B7E-23859-0000EB59696C072F":{p:"no-repeat",aM:"253D59FA-B4DD-4652-AD53-00C432200B7E-23859-0000EB59696C072F_hover",c:79,q:"100% 100%",d:85,r:"inline",t:13,aP:"pointer",h:"15",i:"253D59FA-B4DD-4652-AD53-00C432200B7E-23859-0000EB59696C072F",w:"",j:"absolute",x:"visible",aA:[{goToURL:"2013/postcards/index.html",type:5,openInNewWindow:false}],k:"div",z:"17",a:467,o:"content-box",b:223},"FD5AAC59-E262-477F-857A-C8F24E04A721-23859-0000ED96EE89806B":{o:"content-box",h:"5",x:"visible",a:71,q:"100% 100%",b:95,j:"absolute",r:"inline",c:107,z:"4",i:"FD5AAC59-E262-477F-857A-C8F24E04A721-23859-0000ED96EE89806B",d:40,k:"div"},"6CDFFB72-2B67-46FC-93C2-B42110AA1EE0-23512-0000E003CF98575F":{p:"no-repeat",aM:"6CDFFB72-2B67-46FC-93C2-B42110AA1EE0-23512-0000E003CF98575F_hover",c:56,q:"100% 100%",d:75,r:"inline",I:"None",aN:"6CDFFB72-2B67-46FC-93C2-B42110AA1EE0-23512-0000E003CF98575F_pressed",J:"None",K:"None",t:13,L:"None",aP:"pointer",h:"22",M:0,i:"6CDFFB72-2B67-46FC-93C2-B42110AA1EE0-23512-0000E003CF98575F",w:"<br>",N:0,j:"absolute",x:"visible",O:0,k:"div",P:0,aA:[{goToURL:"https://www.facebook.com/groups/ucscalumniweekend2013/",type:5,openInNewWindow:false}],z:"20",a:74,o:"content-box",b:16},"97FB4585-0C50-4ED3-B35C-43913E95584E-28775-0001205E29D7A347":{p:"no-repeat",aM:"97FB4585-0C50-4ED3-B35C-43913E95584E-28775-0001205E29D7A347_hover",c:151,q:"100% 100%",d:167,r:"inline",t:13,aP:"pointer",h:"12",i:"97FB4585-0C50-4ED3-B35C-43913E95584E-28775-0001205E29D7A347",w:"",j:"absolute",x:"visible",aA:[{goToURL:"2013/alumni-weekend-photos.html",type:5,openInNewWindow:false}],k:"div",z:"16",a:93,o:"content-box",b:77},"3":{c:8,d:8,I:"None",J:"None",K:"None",g:"#322013",L:"None",M:0,N:0,aI:20,A:"#25120C",x:"visible",j:"absolute",O:0,P:0,B:"#25120C",C:"#25120C",z:"23",k:"div",D:"#25120C",aJ:20,aK:20,a:113,aL:20,b:41},"2":{c:8,d:8,I:"None",J:"None",K:"None",g:"#322013",L:"None",M:0,N:0,aI:20,A:"#25120C",x:"visible",j:"absolute",O:0,P:0,B:"#25120C",C:"#25120C",z:"22",k:"div",D:"#25120C",aJ:20,aK:20,a:95,aL:20,b:49},"BAEC4E6F-BB5B-4BD0-9433-D1B55423F47A-23512-0000DF1C0DA745A1":{o:"content-box",w:"",h:"16",aM:"BAEC4E6F-BB5B-4BD0-9433-D1B55423F47A-23512-0000DF1C0DA745A1_hover",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:802,z:"11",i:"BAEC4E6F-BB5B-4BD0-9433-D1B55423F47A-23512-0000DF1C0DA745A1",d:439,k:"div",aJ:10,aI:10,aK:10,aL:10},"613ABC48-B935-4DDF-8C8C-F09B37254DD7-23512-0000DF1E2ED6EA13":{p:"no-repeat",aM:"613ABC48-B935-4DDF-8C8C-F09B37254DD7-23512-0000DF1E2ED6EA13_hover",c:135,q:"100% 100%",d:191,r:"inline",t:13,aP:"pointer",h:"0",i:"613ABC48-B935-4DDF-8C8C-F09B37254DD7-23512-0000DF1E2ED6EA13",w:"",j:"absolute",x:"visible",aA:[{goToURL:"reunion-volunteer.html",type:5,openInNewWindow:false}],k:"div",z:"13",a:556,o:"content-box",b:182},"A24F1906-76FA-4DAE-A622-6B437BF47A5C-23512-0000E0013E49E3AA":{p:"no-repeat",aM:"A24F1906-76FA-4DAE-A622-6B437BF47A5C-23512-0000E0013E49E3AA_hover",c:131,q:"100% 100%",d:231,r:"inline",t:13,aP:"pointer",h:"18",i:"A24F1906-76FA-4DAE-A622-6B437BF47A5C-23512-0000E0013E49E3AA",w:"",j:"absolute",x:"visible",aA:[{goToURL:"2013/schedule.html",type:5,openInNewWindow:false}],k:"div",z:"15",a:290,o:"content-box",b:200},"57528B1A-B085-4381-A093-1217B820EE76-27585-000120061C521662":{p:"no-repeat",aM:"57528B1A-B085-4381-A093-1217B820EE76-27585-000120061C521662_hover",c:314,q:"100% 100%",d:90,r:"inline",t:13,aG:"Happy place to stay",aP:"pointer",h:"10",i:"57528B1A-B085-4381-A093-1217B820EE76-27585-000120061C521662",w:"<span class=\"happyplacetostay\" style=\"display:none;\">Happy place to stay</span>",j:"absolute",x:"visible",aA:[{goToURL:"2013/hotels.html",type:5,openInNewWindow:false}],k:"div",z:"12",a:201,o:"content-box",b:127},"73F96686-A50C-44A9-A71D-EF77FDC0E1FB-23859-0000ECA394F2A8EB":{o:"content-box",h:"2",x:"visible",a:0,q:"100% 100%",b:39,j:"absolute",r:"inline",c:552,z:"7",i:"73F96686-A50C-44A9-A71D-EF77FDC0E1FB-23859-0000ECA394F2A8EB",d:252,k:"div"},"EDFAB9A3-CCCF-4405-91F0-1C55CC750D28-23859-0000EDA30E2EB607":{o:"content-box",h:"3",x:"visible",a:-74,q:"100% 100%",b:54,j:"absolute",r:"inline",c:139,z:"3",i:"EDFAB9A3-CCCF-4405-91F0-1C55CC750D28-23859-0000EDA30E2EB607",d:65,k:"div",e:"1.000000"},"767358E0-C002-4FC5-9CCB-AF63BF3FC24D-23512-0000E00640B1B556":{p:"no-repeat",aM:"767358E0-C002-4FC5-9CCB-AF63BF3FC24D-23512-0000E00640B1B556_hover",c:183,q:"100% 100%",d:159,r:"inline",aP:"default",h:"1",i:"767358E0-C002-4FC5-9CCB-AF63BF3FC24D-23512-0000E00640B1B556",w:"",aI:10,j:"absolute",x:"visible",aA:[],k:"div",aJ:10,z:"19",aK:10,a:0,o:"content-box",aL:10,b:280},"79C8403F-EBD8-41FE-BBA6-F5F72F9B9B88-23859-0000ED96EA5DE65F":{o:"content-box",aM:"79C8403F-EBD8-41FE-BBA6-F5F72F9B9B88-23859-0000ED96EA5DE65F_hover",h:"3",x:"visible",a:-19,q:"100% 100%",b:85,j:"absolute",r:"inline",c:139,z:"9",i:"79C8403F-EBD8-41FE-BBA6-F5F72F9B9B88-23859-0000ED96EA5DE65F",d:65,k:"div",e:"0.800000"},"8185B0F3-8073-47F4-86E7-8C6B08F9DBD8-28775-00012268AD21CEC9":{o:"content-box",h:"14",p:"no-repeat",x:"visible",a:115,q:"100% 100%",b:258,j:"absolute",r:"inline",c:549,z:"14",i:"8185B0F3-8073-47F4-86E7-8C6B08F9DBD8-28775-00012268AD21CEC9",d:97,k:"div"},"7B040706-FFF2-473F-A956-9AEAACACF5D0-23859-0000ED96EBD09431":{o:"content-box",h:"4",x:"visible",a:0,q:"100% 100%",b:44,j:"absolute",r:"inline",c:65,z:"5",i:"7B040706-FFF2-473F-A956-9AEAACACF5D0-23859-0000ED96EBD09431",d:34,k:"div"},"1":{o:"content-box",h:"21",x:"visible",a:0,q:"100% 100%",b:377,j:"absolute",r:"inline",c:802,z:"21",k:"div",d:148},"530CF531-6783-4E94-BC8D-6058B762978B-23512-0000DF4A48BCE358":{p:"no-repeat",bA:"#000000",c:442,q:"100% 100%",bB:0,d:439,r:"inline",bC:0,G:"#FCB756",f:"0deg",t:15,h:"20",i:"530CF531-6783-4E94-BC8D-6058B762978B-23512-0000DF4A48BCE358",w:"",aY:"0",j:"absolute",x:"visible",A:"#FCB756",B:"#FCB756",k:"div",aZ:0,C:"#FCB756",Q:0,z:"2",D:"#FCB756",R:"#FCB756",S:0,a:379,o:"content-box",T:0,b:-31}},n:"main",T:{"97FB4585-0C50-4ED3-B35C-43913E95584E-28775-0001205E29D7A347_hover":{d:1,i:"97FB4585-0C50-4ED3-B35C-43913E95584E-28775-0001205E29D7A347_hover",n:"97FB4585-0C50-4ED3-B35C-43913E95584E-28775-0001205E29D7A347_hover",a:[{f:"2",t:0,d:1,i:"h",e:"13",r:1,s:"12",o:"97FB4585-0C50-4ED3-B35C-43913E95584E-28775-0001205E29D7A347"},{f:"2",t:0,d:1,i:"c",e:335,r:1,s:151,o:"97FB4585-0C50-4ED3-B35C-43913E95584E-28775-0001205E29D7A347"},{f:"2",t:0,d:1,i:"w",e:"<span class=\"ucschappyplace\">Share your photos</span>",r:1,s:"",o:"97FB4585-0C50-4ED3-B35C-43913E95584E-28775-0001205E29D7A347"}],f:30},"613ABC48-B935-4DDF-8C8C-F09B37254DD7-23512-0000DF1E2ED6EA13_hover":{d:1,i:"613ABC48-B935-4DDF-8C8C-F09B37254DD7-23512-0000DF1E2ED6EA13_hover",n:"613ABC48-B935-4DDF-8C8C-F09B37254DD7-23512-0000DF1E2ED6EA13_hover",a:[{f:"2",t:0,d:1,i:"h",e:"9",r:1,s:"0",o:"613ABC48-B935-4DDF-8C8C-F09B37254DD7-23512-0000DF1E2ED6EA13"},{f:"2",t:0,d:1,i:"c",e:211,r:1,s:135,o:"613ABC48-B935-4DDF-8C8C-F09B37254DD7-23512-0000DF1E2ED6EA13"},{f:"2",t:0,d:1,i:"d",e:264,r:1,s:191,o:"613ABC48-B935-4DDF-8C8C-F09B37254DD7-23512-0000DF1E2ED6EA13"},{f:"2",t:0,d:1,i:"b",e:109,r:1,s:182,o:"613ABC48-B935-4DDF-8C8C-F09B37254DD7-23512-0000DF1E2ED6EA13"},{f:"2",t:0,d:1,i:"a",e:551,r:1,s:556,o:"613ABC48-B935-4DDF-8C8C-F09B37254DD7-23512-0000DF1E2ED6EA13"},{f:"2",t:0,d:1,i:"w",e:"<span class=\"photoandvideo\">Volunteer opportunities</span>",r:1,s:"",o:"613ABC48-B935-4DDF-8C8C-F09B37254DD7-23512-0000DF1E2ED6EA13"}],f:30},"BAEC4E6F-BB5B-4BD0-9433-D1B55423F47A-23512-0000DF1C0DA745A1_hover":{d:0,i:"BAEC4E6F-BB5B-4BD0-9433-D1B55423F47A-23512-0000DF1C0DA745A1_hover",n:"BAEC4E6F-BB5B-4BD0-9433-D1B55423F47A-23512-0000DF1C0DA745A1_hover",a:[],f:30},"6CDFFB72-2B67-46FC-93C2-B42110AA1EE0-23512-0000E003CF98575F_pressed":{d:1,i:"6CDFFB72-2B67-46FC-93C2-B42110AA1EE0-23512-0000E003CF98575F_pressed",n:"6CDFFB72-2B67-46FC-93C2-B42110AA1EE0-23512-0000E003CF98575F_pressed",a:[{f:"2",t:0,d:1,i:"h",e:"22",r:1,s:"22",o:"6CDFFB72-2B67-46FC-93C2-B42110AA1EE0-23512-0000E003CF98575F"},{f:"2",t:0,d:1,i:"c",e:56,r:1,s:56,o:"6CDFFB72-2B67-46FC-93C2-B42110AA1EE0-23512-0000E003CF98575F"},{f:"2",t:0,d:1,i:"w",e:"",r:1,s:"<br>",o:"6CDFFB72-2B67-46FC-93C2-B42110AA1EE0-23512-0000E003CF98575F"}],f:30},"57528B1A-B085-4381-A093-1217B820EE76-27585-000120061C521662_hover":{d:1,i:"57528B1A-B085-4381-A093-1217B820EE76-27585-000120061C521662_hover",n:"57528B1A-B085-4381-A093-1217B820EE76-27585-000120061C521662_hover",a:[{f:"2",t:0,d:1,i:"h",e:"11",r:1,s:"10",o:"57528B1A-B085-4381-A093-1217B820EE76-27585-000120061C521662"},{f:"2",t:0,d:1,i:"d",e:154,r:1,s:90,o:"57528B1A-B085-4381-A093-1217B820EE76-27585-000120061C521662"},{f:"2",t:0,d:1,i:"b",e:63,r:1,s:127,o:"57528B1A-B085-4381-A093-1217B820EE76-27585-000120061C521662"},{f:"2",t:0,d:1,i:"a",e:201,r:1,s:201,o:"57528B1A-B085-4381-A093-1217B820EE76-27585-000120061C521662"},{f:"2",t:0,d:1,i:"w",e:"<span class=\"happyplacetostay\">Places to stay</span>",r:1,s:"<span class=\"happyplacetostay\" style=\"display:none;\">Happy place to stay</span>",o:"57528B1A-B085-4381-A093-1217B820EE76-27585-000120061C521662"}],f:30},"253D59FA-B4DD-4652-AD53-00C432200B7E-23859-0000EB59696C072F_hover":{d:1,i:"253D59FA-B4DD-4652-AD53-00C432200B7E-23859-0000EB59696C072F_hover",n:"253D59FA-B4DD-4652-AD53-00C432200B7E-23859-0000EB59696C072F_hover",a:[{f:"2",t:0,d:1,i:"h",e:"8",r:1,s:"15",o:"253D59FA-B4DD-4652-AD53-00C432200B7E-23859-0000EB59696C072F"},{f:"2",t:0,d:1,i:"c",e:211,r:1,s:79,o:"253D59FA-B4DD-4652-AD53-00C432200B7E-23859-0000EB59696C072F"},{f:"2",t:0,d:1,i:"d",e:155,r:1,s:85,o:"253D59FA-B4DD-4652-AD53-00C432200B7E-23859-0000EB59696C072F"},{f:"2",t:0,d:1,i:"a",e:401,r:1,s:467,o:"253D59FA-B4DD-4652-AD53-00C432200B7E-23859-0000EB59696C072F"},{f:"2",t:0,d:1,i:"b",e:153,r:1,s:223,o:"253D59FA-B4DD-4652-AD53-00C432200B7E-23859-0000EB59696C072F"},{f:"2",t:0,d:1,i:"w",e:"<span class=\"reuniongiving\">Invite your friends</span>",r:1,s:"",o:"253D59FA-B4DD-4652-AD53-00C432200B7E-23859-0000EB59696C072F"}],f:30},kTimelineDefaultIdentifier:{d:60,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"1",t:0,d:60,i:"a",e:702,r:1,s:0,o:"7B040706-FFF2-473F-A956-9AEAACACF5D0-23859-0000ED96EBD09431"},{f:"1",t:0,d:60,i:"b",e:41,r:1,s:44,o:"7B040706-FFF2-473F-A956-9AEAACACF5D0-23859-0000ED96EBD09431"},{f:"1",t:0,d:15,i:"f",e:"90deg",r:1,s:"0deg",o:"530CF531-6783-4E94-BC8D-6058B762978B-23512-0000DF4A48BCE358"},{f:"2",t:0,d:0.15,i:"a",e:114,r:1,s:113,o:"3"},{f:"2",t:0,d:0.15,i:"a",e:97,r:1,s:95,o:"2"},{f:"2",t:0,d:1.15,i:"b",e:46,r:1,s:49,o:"2"},{f:"2",t:0,d:1.15,i:"b",e:38,r:1,s:41,o:"3"},{f:"1",t:0,d:48,i:"a",e:676,r:1,s:71,o:"FD5AAC59-E262-477F-857A-C8F24E04A721-23859-0000ED96EE89806B"},{f:"2",t:0,d:10,i:"a",e:-74,r:1,s:-74,o:"EDFAB9A3-CCCF-4405-91F0-1C55CC750D28-23859-0000EDA30E2EB607"},{f:"2",t:0,d:10,i:"b",e:54,r:1,s:54,o:"EDFAB9A3-CCCF-4405-91F0-1C55CC750D28-23859-0000EDA30E2EB607"},{f:"1",t:0,d:48,i:"b",e:91,r:1,s:95,o:"FD5AAC59-E262-477F-857A-C8F24E04A721-23859-0000ED96EE89806B"},{f:"2",t:0.15,d:0.15,i:"a",e:110,s:114,o:"3"},{f:"2",t:0.15,d:0.15,i:"a",e:93,s:97,o:"2"},{f:"2",t:1,d:1.15,i:"a",e:94,s:93,o:"2"},{f:"2",t:1,d:1.15,i:"a",e:111,s:110,o:"3"},{f:"2",t:1.15,d:1,i:"b",e:51,s:46,o:"2"},{f:"2",t:1.15,d:1,i:"b",e:43,s:38,o:"3"},{f:"2",t:2.15,d:1.15,i:"b",e:48,s:51,o:"2"},{f:"2",t:2.15,d:1.15,i:"b",e:40,s:43,o:"3"},{f:"2",t:2.15,d:2.01,i:"a",e:97,s:94,o:"2"},{f:"2",t:2.15,d:2.01,i:"a",e:114,s:111,o:"3"},{f:"2",t:4,d:3,i:"b",e:50,s:48,o:"2"},{f:"2",t:4,d:3,i:"b",e:42,s:40,o:"3"},{f:"2",t:4.16,d:0.24,i:"a",e:92,s:97,o:"2"},{f:"2",t:4.16,d:0.24,i:"a",e:109,s:114,o:"3"},{f:"2",t:5.1,d:0.2,i:"a",e:94,s:92,o:"2"},{f:"2",t:5.1,d:0.2,i:"a",e:111,s:109,o:"3"},{f:"2",t:6,d:5,i:"a",e:97,s:94,o:"2"},{f:"2",t:6,d:5,i:"a",e:114,s:111,o:"3"},{f:"2",t:7,d:1,i:"b",e:47,s:50,o:"2"},{f:"2",t:7,d:1,i:"b",e:39,s:42,o:"3"},{f:"2",t:8,d:7,i:"b",e:44,s:47,o:"2"},{f:"2",t:8,d:7,i:"b",e:36,s:39,o:"3"},{f:"1",t:10,d:45,i:"a",e:802,s:-74,o:"EDFAB9A3-CCCF-4405-91F0-1C55CC750D28-23859-0000EDA30E2EB607"},{f:"1",t:10,d:45,i:"b",e:44,s:54,o:"EDFAB9A3-CCCF-4405-91F0-1C55CC750D28-23859-0000EDA30E2EB607"},{f:"2",t:11,d:4,i:"a",e:94,s:97,o:"2"},{f:"2",t:11,d:4,i:"a",e:111,s:114,o:"3"},{f:"1",t:15,d:15,i:"f",e:"180deg",s:"90deg",o:"530CF531-6783-4E94-BC8D-6058B762978B-23512-0000DF4A48BCE358"},{f:"2",t:15,d:3.15,i:"b",e:48,s:44,o:"2"},{f:"2",t:15,d:3.15,i:"b",e:40,s:36,o:"3"},{f:"2",t:15,d:3.15,i:"a",e:92,s:94,o:"2"},{f:"2",t:15,d:3.15,i:"a",e:109,s:111,o:"3"},{f:"2",t:18.15,d:7.15,i:"b",e:46,s:48,o:"2"},{f:"2",t:18.15,d:7.15,i:"b",e:38,s:40,o:"3"},{f:"2",t:18.15,d:3.15,i:"a",e:96,s:92,o:"2"},{f:"2",t:18.15,d:3.15,i:"a",e:113,s:109,o:"3"},{f:"2",t:22,d:4,i:"a",e:94,s:96,o:"2"},{f:"2",t:22,d:4,i:"a",e:111,s:113,o:"3"},{f:"1",t:25,d:35,i:"a",e:802,r:1,s:-19,o:"79C8403F-EBD8-41FE-BBA6-F5F72F9B9B88-23859-0000ED96EA5DE65F"},{f:"1",t:25,d:35,i:"b",e:78,r:1,s:85,o:"79C8403F-EBD8-41FE-BBA6-F5F72F9B9B88-23859-0000ED96EA5DE65F"},{f:"2",t:26,d:3,i:"b",e:48,s:46,o:"2"},{f:"2",t:26,d:3,i:"b",e:40,s:38,o:"3"},{f:"2",t:26,d:9,i:"a",e:96,s:94,o:"2"},{f:"2",t:26,d:9,i:"a",e:113,s:111,o:"3"},{f:"2",t:29,d:4,i:"b",e:44,s:48,o:"2"},{f:"2",t:29,d:4,i:"b",e:36,s:40,o:"3"},{f:"1",t:30,d:15,i:"f",e:"270deg",s:"180deg",o:"530CF531-6783-4E94-BC8D-6058B762978B-23512-0000DF4A48BCE358"},{f:"2",t:33,d:2,i:"b",e:46,s:44,o:"2"},{f:"2",t:33,d:2,i:"b",e:38,s:36,o:"3"},{f:"2",t:35,d:6,i:"b",e:47,s:46,o:"2"},{f:"2",t:35,d:6,i:"b",e:39,s:38,o:"3"},{f:"2",t:35,d:3,i:"a",e:92,s:96,o:"2"},{f:"2",t:35,d:3,i:"a",e:110,s:113,o:"3"},{f:"2",t:38,d:3,i:"a",e:94,s:92,o:"2"},{f:"2",t:38,d:3,i:"a",e:112,s:110,o:"3"},{f:"2",t:41,d:3,i:"b",e:45,s:47,o:"2"},{f:"2",t:41,d:3,i:"b",e:37,s:39,o:"3"},{f:"2",t:41,d:7,i:"a",e:96,s:94,o:"2"},{f:"2",t:41,d:7,i:"a",e:114,s:112,o:"3"},{f:"2",t:44,d:2,i:"b",e:47,s:45,o:"2"},{f:"2",t:44,d:2,i:"b",e:39,s:37,o:"3"},{f:"1",t:45,d:15,i:"f",e:"359deg",s:"270deg",o:"530CF531-6783-4E94-BC8D-6058B762978B-23512-0000DF4A48BCE358"},{f:"2",t:46,d:2,i:"b",e:46,s:47,o:"2"},{f:"2",t:46,d:2,i:"b",e:38,s:39,o:"3"},{f:"2",t:48,d:4.15,i:"b",e:49,s:46,o:"2"},{f:"2",t:48,d:4.15,i:"b",e:41,s:38,o:"3"},{f:"2",t:48,d:2,i:"a",e:92,s:96,o:"2"},{f:"2",t:48,d:2,i:"a",e:110,s:114,o:"3"},{f:"2",t:50,d:2.15,i:"a",e:93,s:92,o:"2"},{f:"2",t:50,d:2.15,i:"a",e:111,s:110,o:"3"},{f:"2",t:52.15,d:2.15,i:"b",e:47,s:49,o:"2"},{f:"2",t:52.15,d:2.15,i:"b",e:39,s:41,o:"3"},{f:"2",t:52.15,d:2.15,i:"a",e:94,s:93,o:"2"},{f:"2",t:52.15,d:2.15,i:"a",e:112,s:111,o:"3"},{f:"2",t:55,d:3,i:"b",e:49,s:47,o:"2"},{f:"2",t:55,d:3,i:"b",e:41,s:39,o:"3"},{f:"2",t:55,d:5,i:"a",e:95,s:94,o:"2"},{f:"2",t:55,d:5,i:"a",e:113,s:112,o:"3"},{f:"2",t:58,d:2,i:"b",e:41,s:41,o:"3"}],f:30},"A24F1906-76FA-4DAE-A622-6B437BF47A5C-23512-0000E0013E49E3AA_hover":{d:1,i:"A24F1906-76FA-4DAE-A622-6B437BF47A5C-23512-0000E0013E49E3AA_hover",n:"A24F1906-76FA-4DAE-A622-6B437BF47A5C-23512-0000E0013E49E3AA_hover",a:[{f:"2",t:0,d:1,i:"h",e:"17",r:1,s:"18",o:"A24F1906-76FA-4DAE-A622-6B437BF47A5C-23512-0000E0013E49E3AA"},{f:"2",t:0,d:1,i:"c",e:222,r:1,s:131,o:"A24F1906-76FA-4DAE-A622-6B437BF47A5C-23512-0000E0013E49E3AA"},{f:"2",t:0,d:1,i:"d",e:295,r:1,s:231,o:"A24F1906-76FA-4DAE-A622-6B437BF47A5C-23512-0000E0013E49E3AA"},{f:"2",t:0,d:1,i:"a",e:280,r:1,s:290,o:"A24F1906-76FA-4DAE-A622-6B437BF47A5C-23512-0000E0013E49E3AA"},{f:"2",t:0,d:1,i:"b",e:136,r:1,s:200,o:"A24F1906-76FA-4DAE-A622-6B437BF47A5C-23512-0000E0013E49E3AA"},{f:"2",t:0,d:1,i:"w",e:"<span class=\"schedule-text\">Schedule of events/register</span>",r:1,s:"",o:"A24F1906-76FA-4DAE-A622-6B437BF47A5C-23512-0000E0013E49E3AA"}],f:30},"6CDFFB72-2B67-46FC-93C2-B42110AA1EE0-23512-0000E003CF98575F_hover":{d:1,i:"6CDFFB72-2B67-46FC-93C2-B42110AA1EE0-23512-0000E003CF98575F_hover",n:"6CDFFB72-2B67-46FC-93C2-B42110AA1EE0-23512-0000E003CF98575F_hover",a:[{f:"2",t:0,d:1,i:"h",e:"6",r:1,s:"22",o:"6CDFFB72-2B67-46FC-93C2-B42110AA1EE0-23512-0000E003CF98575F"},{f:"2",t:0,d:1,i:"c",e:281,r:1,s:56,o:"6CDFFB72-2B67-46FC-93C2-B42110AA1EE0-23512-0000E003CF98575F"},{f:"2",t:0,d:1,i:"w",e:"<span class=\"gotoyourhappyplace\">Join Facebook group</span>",r:1,s:"<br>",o:"6CDFFB72-2B67-46FC-93C2-B42110AA1EE0-23512-0000E003CF98575F"},{f:"2",t:0,d:1,i:"t",e:13,r:1,s:13,o:"6CDFFB72-2B67-46FC-93C2-B42110AA1EE0-23512-0000E003CF98575F"}],f:30},"79C8403F-EBD8-41FE-BBA6-F5F72F9B9B88-23859-0000ED96EA5DE65F_hover":{d:0,i:"79C8403F-EBD8-41FE-BBA6-F5F72F9B9B88-23859-0000ED96EA5DE65F_hover",n:"79C8403F-EBD8-41FE-BBA6-F5F72F9B9B88-23859-0000ED96EA5DE65F_hover",a:[],f:30}},o:"59C1A0CE-B7D9-4A80-AA84-260B828AF4A3-23512-0000DDBD1A2D0AA9"}];

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
	hypeDoc.setDrawSceneBackgrounds(false);
	hypeDoc.setGraphicsAcceleration(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;
	document.getElementById(mainContainerID).setAttribute("HYPE_documentName", documentName);

	hypeDoc.documentLoad(this.body);
}());

