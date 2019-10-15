//	HYPE.documents["alumni_index"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "reunion";
	var documentName = "alumni_index";
	var documentLoaderFilename = "reunion.js";

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

	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE == "undefined") {
		if(typeof window.HYPE_DocumentsToLoad == "undefined") {
			window.HYPE_DocumentsToLoad = new Array();
		}
		window.HYPE_DocumentsToLoad.push(HYPE_DocumentLoader);

		var headElement = document.getElementsByTagName('head')[0];
		var scriptElement = document.createElement('script');
		scriptElement.type= 'text/javascript';
		scriptElement.src = resourcesFolderName + '/' + 'HYPE.js';
		headElement.appendChild(scriptElement);
		return;
	}
	
	var attributeTransformerMapping = {"BorderRadiusTopLeft":"PixelValueTransformer","BackgroundColor":"ColorValueTransformer","BorderWidthBottom":"PixelValueTransformer","BoxShadowXOffset":"PixelValueTransformer","WordSpacing":"PixelValueTransformer","Opacity":"FractionalValueTransformer","BorderWidthRight":"PixelValueTransformer","BorderWidthTop":"PixelValueTransformer","BoxShadowColor":"ColorValueTransformer","BorderColorBottom":"ColorValueTransformer","FontSize":"PixelValueTransformer","BorderRadiusTopRight":"PixelValueTransformer","TextColor":"ColorValueTransformer","Rotate":"DegreeValueTransformer","Height":"PixelValueTransformer","BorderColorTop":"ColorValueTransformer","PaddingLeft":"PixelValueTransformer","Top":"PixelValueTransformer","BackgroundGradientStartColor":"ColorValueTransformer","TextShadowXOffset":"PixelValueTransformer","PaddingTop":"PixelValueTransformer","BackgroundGradientAngle":"DegreeValueTransformer","PaddingBottom":"PixelValueTransformer","PaddingRight":"PixelValueTransformer","BorderColorLeft":"ColorValueTransformer","Width":"PixelValueTransformer","TextShadowColor":"ColorValueTransformer","ReflectionOffset":"PixelValueTransformer","Left":"PixelValueTransformer","BorderRadiusBottomRight":"PixelValueTransformer","ReflectionDepth":"FractionalValueTransformer","BoxShadowYOffset":"PixelValueTransformer","BorderColorRight":"ColorValueTransformer","LineHeight":"PixelValueTransformer","BorderWidthLeft":"PixelValueTransformer","TextShadowBlurRadius":"PixelValueTransformer","TextShadowYOffset":"PixelValueTransformer","BorderRadiusBottomLeft":"PixelValueTransformer","BackgroundGradientEndColor":"ColorValueTransformer","BoxShadowBlurRadius":"PixelValueTransformer","LetterSpacing":"PixelValueTransformer"};

var scenes = [{"initialValues":{"B7632162-D313-48CE-A035-CADBE53FFC95-11382-00002F692727A067":{"Position":"absolute","BackgroundOrigin":"content-box","Display":"inline","Left":"106px","BackgroundImage":"turn.png","Height":"32px","Overflow":"visible","BackgroundSize":"100% 100%","ZIndex":"3","Width":"60px","ActionOnMouseClick":{"goToURL":"https://events.ucsc.edu/reunion/photo-galleries.html?utm_source=front&utm_campaign=reunion-2012&utm_medium=web","type":5,"openInNewWindow":false},"BackgroundRepeat":"no-repeat","Top":"28px","Opacity":"0.000000","TagName":"div","Cursor":"pointer"},"83167246-AFF8-411F-9800-C3FF97FE8ABC-11382-00002F5FD4B82F2D":{"Position":"absolute","BackgroundOrigin":"content-box","Display":"inline","Left":"106px","BackgroundImage":"union.png","Height":"33px","Overflow":"visible","Width":"73px","ZIndex":"2","BackgroundSize":"100% 100%","Top":"28px","BackgroundRepeat":"no-repeat","Opacity":"1.000000","TagName":"div"},"160E328D-C1FF-491C-BF8E-520AD6680B9C-11382-00002F7157CB72DB":{"Position":"absolute","BackgroundOrigin":"content-box","Display":"inline","Left":"105px","BackgroundImage":"kindle.png","Height":"33px","Overflow":"visible","BackgroundSize":"100% 100%","ZIndex":"5","Width":"75px","ActionOnMouseClick":{"goToURL":"https://events.ucsc.edu/reunion/photo-galleries.html?utm_source=front&utm_campaign=reunion-2012&utm_medium=web","type":5,"openInNewWindow":false},"BackgroundRepeat":"no-repeat","Top":"28px","Opacity":"0.000000","TagName":"div","Cursor":"pointer"},"475CA195-06D4-4E2F-AF07-5BFF16140274-11382-00002F5CA8873001":{"Position":"absolute","BackgroundOrigin":"content-box","Display":"inline","Left":"0px","BackgroundImage":"alumni_front.jpg","AltText":"REUNION - RETURN - REWIND - REKINDLE - REFRESH - APR 27 to 29 2012","Height":"215px","Overflow":"visible","Width":"228px","ZIndex":"1","BackgroundSize":"100% 100%","Top":"0px","ActionOnMouseClick":{"goToURL":"https://events.ucsc.edu/reunion/photo-galleries.html?utm_source=front&utm_campaign=reunion-2012&utm_medium=web","type":5,"openInNewWindow":false},"TagName":"div","Cursor":"pointer"},"19B1363B-EA4A-4B6D-BD60-76DCB899AC8B-11382-0000305CD8CD2BD1":{"Position":"absolute","BackgroundOrigin":"content-box","Display":"inline","Left":"105px","BackgroundImage":"fresh-1.png","Height":"33px","Overflow":"visible","Width":"75px","ZIndex":"6","BackgroundSize":"100% 100%","Top":"28px","ActionOnMouseClick":{"goToURL":"https://events.ucsc.edu/reunion/photo-galleries.html?utm_source=front&utm_campaign=reunion-2012&utm_medium=web","type":5,"openInNewWindow":false},"Opacity":"0.000000","TagName":"div","Cursor":"pointer"},"2BCBDC8F-D926-43B9-A60D-C9048C735586-11382-0000310930D68BBE":{"FontFamily":"'Arial Black',Gadget,Sans-Serif","TagName":"div","PaddingRight":"8px","FontSize":"22px","WordSpacing":"-3px","Cursor":"pointer","Display":"inline","WordWrap":"break-word","Top":"50px","PaddingBottom":"8px","WhiteSpaceCollapsing":"preserve","Position":"absolute","Left":"18px","ActionOnMouseClick":{"goToURL":"https://events.ucsc.edu/reunion/photo-galleries.html?utm_source=front&utm_campaign=reunion-2012&utm_medium=web","type":5,"openInNewWindow":false},"InnerHTML":"CHECK OUT","ZIndex":"10","PaddingLeft":"8px","PaddingTop":"8px","Overflow":"visible","TextColor":"#424242"},"982C25CE-D5F1-483B-ADE2-05C50D5DFD29-4154-00000E13ABD44C88":{"FontFamily":"Arial,Helvetica,Sans-Serif","FontWeight":"normal","TagName":"div","PaddingRight":"8px","FontSize":"15px","WordSpacing":"-2px","LetterSpacing":"0px","Display":"inline","WordWrap":"break-word","Cursor":"pointer","Top":"77px","PaddingBottom":"8px","WhiteSpaceCollapsing":"preserve","Position":"absolute","Left":"18px","ActionOnMouseClick":{"goToURL":"https://events.ucsc.edu/reunion/photo-galleries.html?utm_source=front&utm_campaign=reunion-2012&utm_medium=web","type":5,"openInNewWindow":false},"InnerHTML":"PHOTOS &amp; VIDEOS","ZIndex":"11","PaddingLeft":"8px","PaddingTop":"8px","Overflow":"visible","TextColor":"#424242"},"F7CBCC70-193B-44E1-9B61-423236B98EC9-11382-00002F6E10A66595":{"Position":"absolute","BackgroundOrigin":"content-box","Display":"inline","Left":"106px","BackgroundImage":"wind.png","Height":"32px","Overflow":"visible","BackgroundSize":"100% 100%","ZIndex":"4","Width":"62px","ActionOnMouseClick":{"goToURL":"https://events.ucsc.edu/reunion/photo-galleries.html?utm_source=front&utm_campaign=reunion-2012&utm_medium=web","type":5,"openInNewWindow":false},"BackgroundRepeat":"no-repeat","Top":"28px","Opacity":"0.000000","TagName":"div","Cursor":"pointer"}},"timelines":{"kTimelineDefaultIdentifier":{"framesPerSecond":30,"animations":[{"startValue":"0.000000","isRelative":true,"endValue":"0.000000","identifier":"Opacity","duration":6,"timingFunction":"easeinout","type":0,"oid":"160E328D-C1FF-491C-BF8E-520AD6680B9C-11382-00002F7157CB72DB","startTime":0},{"startValue":"0.000000","isRelative":true,"endValue":"0.000000","identifier":"Opacity","duration":4,"timingFunction":"easeinout","type":0,"oid":"F7CBCC70-193B-44E1-9B61-423236B98EC9-11382-00002F6E10A66595","startTime":0},{"startValue":"0.000000","isRelative":true,"endValue":"0.000000","identifier":"Opacity","duration":2,"timingFunction":"easeinout","type":0,"oid":"B7632162-D313-48CE-A035-CADBE53FFC95-11382-00002F692727A067","startTime":0},{"startValue":"1.000000","isRelative":true,"endValue":"1.000000","identifier":"Opacity","duration":2,"timingFunction":"easeinout","type":0,"oid":"83167246-AFF8-411F-9800-C3FF97FE8ABC-11382-00002F5FD4B82F2D","startTime":0},{"startValue":"1.000000","isRelative":false,"endValue":"0.000000","identifier":"Opacity","duration":0.5,"timingFunction":"easeinout","type":0,"oid":"83167246-AFF8-411F-9800-C3FF97FE8ABC-11382-00002F5FD4B82F2D","startTime":2},{"startValue":"0.000000","isRelative":false,"endValue":"1.000000","identifier":"Opacity","duration":0.5,"timingFunction":"easeinout","type":0,"oid":"B7632162-D313-48CE-A035-CADBE53FFC95-11382-00002F692727A067","startTime":2},{"startValue":"0.000000","isRelative":false,"endValue":"0.000000","identifier":"Opacity","duration":7.5,"timingFunction":"easeinout","type":0,"oid":"83167246-AFF8-411F-9800-C3FF97FE8ABC-11382-00002F5FD4B82F2D","startTime":2.5},{"startValue":"1.000000","isRelative":false,"endValue":"1.000000","identifier":"Opacity","duration":1.5,"timingFunction":"easeinout","type":0,"oid":"B7632162-D313-48CE-A035-CADBE53FFC95-11382-00002F692727A067","startTime":2.5},{"startValue":"1.000000","isRelative":false,"endValue":"0.000000","identifier":"Opacity","duration":0.5,"timingFunction":"easeinout","type":0,"oid":"B7632162-D313-48CE-A035-CADBE53FFC95-11382-00002F692727A067","startTime":4},{"startValue":"0.000000","isRelative":false,"endValue":"1.000000","identifier":"Opacity","duration":0.5,"timingFunction":"easeinout","type":0,"oid":"F7CBCC70-193B-44E1-9B61-423236B98EC9-11382-00002F6E10A66595","startTime":4},{"startValue":"1.000000","isRelative":false,"endValue":"1.000000","identifier":"Opacity","duration":1.5,"timingFunction":"easeinout","type":0,"oid":"F7CBCC70-193B-44E1-9B61-423236B98EC9-11382-00002F6E10A66595","startTime":4.5},{"startValue":"1.000000","isRelative":false,"endValue":"0.000000","identifier":"Opacity","duration":0.5,"timingFunction":"easeinout","type":0,"oid":"F7CBCC70-193B-44E1-9B61-423236B98EC9-11382-00002F6E10A66595","startTime":6},{"startValue":"0.000000","isRelative":false,"endValue":"1.000000","identifier":"Opacity","duration":0.5,"timingFunction":"easeinout","type":0,"oid":"160E328D-C1FF-491C-BF8E-520AD6680B9C-11382-00002F7157CB72DB","startTime":6},{"startValue":"1.000000","isRelative":false,"endValue":"1.000000","identifier":"Opacity","duration":1.5,"timingFunction":"easeinout","type":0,"oid":"160E328D-C1FF-491C-BF8E-520AD6680B9C-11382-00002F7157CB72DB","startTime":6.5},{"startValue":"1.000000","isRelative":false,"endValue":"0.000000","identifier":"Opacity","duration":0.5,"timingFunction":"easeinout","type":0,"oid":"160E328D-C1FF-491C-BF8E-520AD6680B9C-11382-00002F7157CB72DB","startTime":8},{"startValue":"0.000000","isRelative":true,"endValue":"1.000000","identifier":"Opacity","duration":0.5,"timingFunction":"easeinout","type":0,"oid":"19B1363B-EA4A-4B6D-BD60-76DCB899AC8B-11382-0000305CD8CD2BD1","startTime":8},{"startValue":"1.000000","isRelative":false,"endValue":"1.000000","identifier":"Opacity","duration":1.5,"timingFunction":"easeinout","type":0,"oid":"19B1363B-EA4A-4B6D-BD60-76DCB899AC8B-11382-0000305CD8CD2BD1","startTime":8.5},{"startValue":"1.000000","isRelative":false,"endValue":"0.000000","identifier":"Opacity","duration":0.5,"timingFunction":"easeinout","type":0,"oid":"19B1363B-EA4A-4B6D-BD60-76DCB899AC8B-11382-0000305CD8CD2BD1","startTime":10},{"startValue":"0.000000","isRelative":false,"endValue":"1.000000","identifier":"Opacity","duration":0.5,"timingFunction":"easeinout","type":0,"oid":"83167246-AFF8-411F-9800-C3FF97FE8ABC-11382-00002F5FD4B82F2D","startTime":10}],"identifier":"kTimelineDefaultIdentifier","name":"Main Timeline","duration":10.5}},"id":"C7FF2E00-9050-4A2F-A2E8-35AB8A1475D7-11382-00002F55DD2685EE","sceneIndex":0,"perspective":"600px","oid":"C7FF2E00-9050-4A2F-A2E8-35AB8A1475D7-11382-00002F55DD2685EE","onSceneAnimationCompleteAction":{"timelineIdentifier":"kTimelineDefaultIdentifier","type":3},"name":"Untitled Scene","backgroundColor":"#FFFFFF"}];

var javascriptMapping = {};


	
	var Custom = (function() {
	return {
	};
}());

	
	var hypeDoc = new HYPE();
	
	hypeDoc.attributeTransformerMapping = attributeTransformerMapping;
	hypeDoc.scenes = scenes;
	hypeDoc.javascriptMapping = javascriptMapping;
	hypeDoc.Custom = Custom;
	hypeDoc.currentSceneIndex = 0;
	hypeDoc.mainContentContainerID = "reunion";
	hypeDoc.resourcesFolderName = resourcesFolderName;
	hypeDoc.showHypeBuiltWatermark = 0;
	hypeDoc.showLoadingPage = false;
	hypeDoc.drawSceneBackgrounds = true;
	hypeDoc.documentName = documentName;

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

