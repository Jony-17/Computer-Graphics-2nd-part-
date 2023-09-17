'use strict';

class Caixa2 extends THREE.Object3D {

  constructor(l, a, p, e) {
    super();

    let ps = Caixa2.createMesh(new THREE.BoxGeometry(l, e, p, 16, 16, 16), 0xd2b48c); // plano superior
    ps.translateY(e / 2 + a);   

    let pa = Caixa2.createTextMesh(new THREE.BoxGeometry(l, a, e, 16, 16, 16), "ALTERNATORS XPTO MY COMPANY INC"); // plano anterior
    pa.translateY(a / 2);
    pa.translateZ(-p / 2);

    let pp = Caixa2.createTextMesh(new THREE.BoxGeometry(l, a, e, 16, 16, 16), "ALTERNATORS XPTO MY COMPANY INC"); // plano posterior
    pp.translateY(a / 2);
    pp.translateZ(p / 2);

    let pe = Caixa2.createTextMesh(new THREE.BoxGeometry(e, a, p, 16, 16, 16), "ALTERNATORS XPTO MY COMPANY INC"); // plano esquerdo
    pe.translateX(-l / 2);
    pe.translateY(a / 2);

    let pd = Caixa2.createTextMesh(new THREE.BoxGeometry(e, a, p, 16, 16, 16), "ALTERNATORS XPTO MY COMPANY INC"); // plano direito
    pd.translateX(l / 2);
    pd.translateY(a / 2);

    let fundo = Caixa2.createMesh(new THREE.BoxGeometry(l, e, p, 16,16,16), 0x000000); //fundo
    fundo.translateY(e / 2);

    const textureLoader = new THREE.TextureLoader();

    let alternadores;

    textureLoader.load('trabalho_TP2_Alternador.jpeg', (texture) => {
      console.log('Textura carregada:', texture);
      
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(1, 1);

      const material = new THREE.MeshBasicMaterial({ map: texture });
      alternadores = Caixa2.createMesh2(new THREE.BoxGeometry(l, e, p, 16, 16, 16), material); // alternadores (dentro da caixa)

      ps.add(alternadores);     
    });

    this.add(fundo);
    fundo.add(ps);
    fundo.add(pa);
    fundo.add(pp);
    fundo.add(pd);
    fundo.add(pe);
  }

  static createMesh(geom, color) {
    var material = new THREE.MeshBasicMaterial({color: color, wireframe: false});
    var mesh = new THREE.Mesh(geom, material);
    return mesh;
  }

  static createMesh2(geom, material) {
    var mesh = new THREE.Mesh(geom, material);
    return mesh;
  }

  static createTextMesh(geom, text) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const fontSize = 40;
    const fontFamily = 'Arial';
    context.font = `${fontSize}px ${fontFamily}`;
    const textWidth = context.measureText(text).width;
    const canvasWidth = Math.ceil(textWidth);
    const canvasHeight = Math.ceil(fontSize);

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    context.font = `${fontSize}px ${fontFamily}`;
    context.fillStyle = '#d2b48c';
    context.fillRect(0, 0, canvasWidth, canvasHeight);
    context.fillStyle = '#A3521C';
    context.fillText(text, 0, fontSize);

    const texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const mesh = new THREE.Mesh(geom, material);
    return mesh;
  }
}