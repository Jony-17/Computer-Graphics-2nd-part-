'use strict';

class GUI {

  constructor(webgl) {
	this.webgl = webgl;
  
  var guiVars = {
    "Área Logística" : () => {
        var arealogistica = new AreaLogistica(300, 300, 1000, 5380, 300, 5630, 1);
        this.webgl.scene.add(arealogistica);
     }
    };

    var gui = new dat.GUI( { autoPlace: false, width: 300} );
    gui.domElement.id = 'gui';

    gui.add(guiVars, 'Área Logística');

    var customContainer = document.getElementById('GUI-output');
    customContainer.appendChild(gui.domElement);
    
    //Ortografia
    console.log(encodeURI("á é í ó ú"));
    console.log(decodeURI("%C3%A1%20%C3%A9%20%C3%AD%20%C3%B3%20%C3%BA"));
    
  }
}