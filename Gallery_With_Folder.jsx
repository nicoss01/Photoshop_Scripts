// (c) Copyright 2008.  Adobe Systems, Incorporated.  All rights reserved.

/*
@@@BUILDINFO@@@ Gallery_With_Folder.jsx 1.0.0.1
*/

var begDesc = "$$$/JavaScripts/Gallery_With_Folder/Description=Génération des miniatures pour la galerie." // endDesc
var begName = "$$$/JavaScripts/Gallery_With_Folder/MenuName=Générateur de miniatures" // endName

// on localized builds we pull the $$$/Strings from a .dat file, see documentation for more details
$.localize = false;

try {

	if ( app.documents.length > 0 ) {
		var doc = activeDocument;
        var nb = doc.layerSets.length;
		for(var i=0;i<nb;i++){
            doc.layerSets[i].visible=false;            
        }
        for(var i=0;i<nb;i++){
            doc.layerSets[i].visible=true;
            var folder1 = Folder(doc.path+"/"+doc.layerSets[i].name + "/");
            if(!folder1.exists) 
                folder1.create();
            var nb0 = doc.layerSets[i].layers.length;
            for(var a=0;a<nb0;a++){
                doc.layerSets[i].layers[a].visible=false;
            }
            for(var a=0;a<nb0;a++){
                doc.layerSets[i].layers[a].visible=true;
                var options = new ExportOptionsSaveForWeb();
                options.format = SaveDocumentType.JPEG;
                options.optimized = true;
                doc.exportDocument(File(doc.path+"/"+doc.layerSets[i].name + "/" + doc.layerSets[i].layers[a].name + ".jpg"),ExportType.SAVEFORWEB, options);
                doc.layerSets[i].layers[a].visible=false;
            }
            doc.layerSets[i].visible=false;
        }
        alert("Alors elle est pas belle la vie ?");
	}

} // try end

catch( e ) {
	// always wrap your script with try/catch blocks so you don't stop production
	// remove comments below to see error for debugging 
	// alert( e );
}
