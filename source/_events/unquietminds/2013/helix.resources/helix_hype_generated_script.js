//  HYPE.documents["helix"]

(function HYPE_DocumentLoader() {
    var resourcesFolderName = "helix.resources";
    var documentName = "helix";
    var documentLoaderFilename = "helix_hype_generated_script.js";
    var mainContainerID = "helix_hype_container";

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
    } catch(err) {  }

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
    
    var resources = {"3":{n:"david-name.png",p:1},"1":{n:"3.png",p:1},"4":{n:"terrie-name.png",p:1},"2":{n:"2.png",p:1},"0":{n:"1.png",p:1},"5":{n:"john-name.png",p:1}};
    
    var scenes = [{x:0,p:"600px",c:"#FFFFFF",v:{"3":{o:"content-box",h:"2",x:"visible",a:108,q:"100% 100%",b:282,j:"absolute",r:"inline",c:250,z:"2",k:"div",d:250,aA:[{goToURL:"#terrie",type:5,openInNewWindow:false}],aY:"1",e:"0.000000",aP:"pointer",f:"180deg"},"75":{o:"content-box",h:"3",x:"visible",a:16,q:"100% 100%",b:16,j:"absolute",r:"inline",c:250,z:"4",k:"div",d:250,aA:[{goToURL:"#david",type:5,openInNewWindow:false}],aY:"0",e:"0.000000",aP:"pointer",f:"-120deg"},"4":{o:"content-box",h:"1",x:"visible",a:16,q:"100% 100%",b:544,j:"absolute",r:"inline",c:250,z:"3",k:"div",d:250,aA:[{goToURL:"#john",type:5,openInNewWindow:false}],aY:"0",e:"0.000000",aP:"pointer",f:"-180deg"},"77":{o:"content-box",h:"5",x:"visible",a:16,q:"100% 100%",b:544,j:"absolute",r:"inline",c:250,z:"6",k:"div",d:250,aA:[{goToURL:"#john",type:5,openInNewWindow:false}],aY:"0",e:"0.000000",aP:"pointer",f:"180deg"},"76":{o:"content-box",h:"4",x:"visible",a:108,q:"100% 100%",b:282,j:"absolute",r:"inline",c:250,z:"5",k:"div",d:250,aA:[{goToURL:"#terrie",type:5,openInNewWindow:false}],aY:"1",e:"0.000000",aP:"pointer",f:"-180deg"},"2":{o:"content-box",w:"",h:"0",x:"visible",a:16,q:"100% 100%",b:16,j:"absolute",r:"inline",c:250,z:"1",k:"div",d:250,aA:[{goToURL:"#david",type:5,openInNewWindow:false}],aY:"0",e:"0.000000",aP:"pointer",f:"180deg"}},n:"helix",T:{kTimelineDefaultIdentifier:{d:1.05,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:0.15,i:"e",e:"1.000000",s:"0.000000",o:"2"},{f:"2",t:0,d:0.15,i:"f",e:"0deg",s:"180deg",o:"2"},{f:"2",t:0,d:0.2,i:"e",e:"0.000000",s:"0.000000",o:"4"},{f:"2",t:0.05,d:0.1,i:"e",e:"1.000000",s:"0.000000",o:"75"},{f:"2",t:0.05,d:0.1,i:"f",e:"0deg",s:"-120deg",o:"75"},{f:"2",t:0.1,d:0.15,i:"f",e:"0deg",s:"180deg",o:"3"},{f:"2",t:0.1,d:0.15,i:"e",e:"1.000000",s:"0.000000",o:"3"},{f:"2",t:0.15,d:0.1,i:"e",e:"1.000000",s:"0.000000",o:"76"},{f:"2",t:0.15,d:0.1,i:"f",e:"0deg",s:"-180deg",o:"76"},{f:"2",t:0.2,d:0.15,i:"e",e:"1.000000",s:"0.000000",o:"4"},{f:"2",t:0.2,d:0.15,i:"f",e:"0deg",s:"-180deg",o:"4"},{f:"2",t:0.25,d:0.1,i:"e",e:"1.000000",s:"0.000000",o:"77"},{f:"2",t:0.25,d:0.1,i:"f",e:"0deg",s:"180deg",o:"77"}],f:30}},o:"1"}];
    
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
    hypeDoc.setDrawSceneBackgrounds(false);
    hypeDoc.setGraphicsAcceleration(true);
    hypeDoc.setDocumentName(documentName);

    HYPE.documents[documentName] = hypeDoc.API;
    document.getElementById(mainContainerID).setAttribute("HYPE_documentName", documentName);

    hypeDoc.documentLoad(this.body);
}());

