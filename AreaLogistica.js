'use strict';

class AreaLogistica extends THREE.Object3D {
  constructor(largura, altura, profundidade, l, a, p, e) {
    super();
    
    let fundo = Caixa2.createMesh(new THREE.CubeGeometry(l, e, p, 16,16,16), 0x000000); //fundo
    fundo.translateY(e/2);
    
    var caixa1 = new Caixa2 (141, 50, 140, 1);
    caixa1.translateX(-800);
    caixa1.translateZ(450);

    var caixa2 = new Caixa2 (121, 50, 140, 1);
    caixa2.translateX(20);
    caixa2.translateZ(500);

    const textureLoader = new THREE.TextureLoader();

    let mapa;
    
    textureLoader.load('trabalho_TP2_mapa_area_logistica.png', (texture) => {
      console.log('Textura carregada:', texture);
      
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(1, 1);

      const material = new THREE.MeshBasicMaterial({ map: texture });
      mapa = Caixa2.createMesh2(new THREE.BoxGeometry(l, e, p, 16, 16, 16), material);
      
      fundo.add(mapa);
    });
    
    const rotationValue = 0.5678;
    fundo.rotateY(rotationValue);

    this.add(fundo);
    this.add(caixa1);
    this.add(caixa2);
  }
  
  static createMesh(geom, color) {

    var material = new THREE.MeshLambertMaterial({color: color, wireframe: false});
    var mesh = new THREE.Mesh(geom, material);
    return mesh;
}
}