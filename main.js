import './style.css'

import * as THREE from 'three'

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 500 );

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(30);

renderer.render( scene, camera );

const geometry = new THREE.TorusGeometry( 10, .7, 16, 100 );
const material = new THREE.MeshNormalMaterial( );
const torus = new THREE.Mesh( geometry, material );

const ringgeometry = new THREE.RingGeometry( 5, 7, 32 );
const ringwireframe = new THREE.WireframeGeometry( ringgeometry );
const ringmaterial = new THREE.MeshBasicMaterial( { color: 0x800000, side: THREE.DoubleSide } );
const line = new THREE.LineSegments( ringwireframe, ringmaterial );
scene.add( line );

const schoolgeometry = new THREE.CylinderGeometry(2, 2, .5);
const schoolTexture = new THREE.TextureLoader().load('school.jpg');
const schoolmaterial = new THREE.MeshBasicMaterial({ map: schoolTexture });
const school = new THREE.Mesh( schoolgeometry, schoolmaterial );
scene.add( school );

const chessgeometry = new THREE.BoxGeometry( 3, 3, .1, 100 );
const boardTexture = new THREE.TextureLoader().load('chess.jpg');
const boardmaterial = new THREE.MeshBasicMaterial({ map: boardTexture });
const board = new THREE.Mesh( chessgeometry, boardmaterial );
scene.add( board );

const pawnheadgeometry = new THREE.SphereGeometry( .2, 30, 30 );
const pawnTexture = new THREE.TextureLoader().load('wood.jpg');
const pawnheadmaterial = new THREE.MeshBasicMaterial( { map: pawnTexture } );
const pawnhead = new THREE.Mesh( pawnheadgeometry, pawnheadmaterial );

board.add(pawnhead);

const pawnbasegeometry = new THREE.ConeGeometry( .2, 1, 24, 16 );
const pawnbasematerial = new THREE.MeshBasicMaterial( { map: pawnTexture } );
const pawnbase = new THREE.Mesh( pawnbasegeometry, pawnbasematerial );

board.add(pawnbase);

const pawnheadgeometry2 = new THREE.SphereGeometry( .2, 30, 30 );
const pawnTexture2 = new THREE.TextureLoader().load('wood2.jpg');
const pawnheadmaterial2 = new THREE.MeshBasicMaterial( { map: pawnTexture2 } );
const pawnhead2 = new THREE.Mesh( pawnheadgeometry2, pawnheadmaterial2 );

board.add(pawnhead2);

const pawnbasegeometry2 = new THREE.ConeGeometry( .2, 1, 24, 16 );
const pawnbasematerial2 = new THREE.MeshBasicMaterial( { map: pawnTexture2 } );
const pawnbase2 = new THREE.Mesh( pawnbasegeometry2, pawnbasematerial2 );

board.add(pawnbase2);

const bballgeometry = new THREE.SphereGeometry( 1, 30, 30 );
const bballtexture = new THREE.TextureLoader().load('basketball.jpg');
const bballmaterial = new THREE.MeshBasicMaterial( { map: bballtexture } );
const basketball = new THREE.Mesh( bballgeometry, bballmaterial );

scene.add(basketball);

const musicgeometry = new THREE.SphereGeometry( 1.6, 30, 30 );
const musicmaterial = new THREE.MeshPhongMaterial( {color: 	"#080808"} );
const musichead = new THREE.Mesh( musicgeometry, musicmaterial );

const stemgeometry = new THREE.CylinderGeometry( .3, .3, 8 );
const stemmaterial = new THREE.MeshPhongMaterial( {color: 	"#080808"} );
const stem = new THREE.Mesh( stemgeometry, stemmaterial );

const stem2geometry = new THREE.CylinderGeometry( .3, .3,  );
const stem2material = new THREE.MeshPhongMaterial( {color: 	"#080808"} );
const stem2 = new THREE.Mesh( stem2geometry, stem2material );

const rbcgeo = new THREE.CylinderGeometry(2, 2, .5, 50);
const rbctext = new THREE.TextureLoader().load('rbc.jpg');
const rbcmat = new THREE.MeshBasicMaterial({ map: rbctext });
const rbc = new THREE.Mesh( rbcgeo, rbcmat );

scene.add( rbc );
rbc.rotateX(20);

const rbcgeo2 = new THREE.CylinderGeometry(1, 1, .15, 50);
const rbctext2 = new THREE.TextureLoader().load('rbc.jpg');
const rbcmat2 = new THREE.MeshBasicMaterial({ map: rbctext });
const rbc2 = new THREE.Mesh( rbcgeo2, rbcmat2 );

const moodtext = new THREE.TextureLoader().load('moods.jpeg');

const mood = new THREE.Mesh(
  new THREE.SphereBufferGeometry(2),
  new THREE.MeshStandardMaterial({
    map: moodtext
  })
);

scene.add(mood);

scene.add( rbc2 );
rbc2.rotateX(20);


scene.add(basketball);

scene.add(musichead);
scene.add(stem);
scene.add(stem2);

musichead.position.setZ(20);
musichead.position.setY(4);
musichead.position.setX(-30);


stem.position.setZ(19.5);
stem.position.setY(8);
stem.position.setX(-29);

stem2.position.set(-29.5, 12, 19)
stem2.rotateX(40)
stem2.rotateZ(200)



basketball.position.setZ(20);
basketball.position.setY(-3);
basketball.position.setX(-19);

board.position.setZ(15);
board.position.setX(-15);

pawnhead.position.z = 1;
pawnhead.position.y = .5;
pawnhead.position.x = -.5;

pawnbase.position.z = 1;
pawnbase.position.x = -.5;

pawnhead2.position.z = -2;
pawnhead2.position.y = .1;
pawnhead2.position.x = -.3;

pawnbase2.position.z = -2;
pawnhead2.position.y = .5;
pawnbase2.position.x = -.3;

school.position.setZ(10);
school.position.setX(-11);

school.rotation.x = 1;
school.rotation.z = 1;
line.position.z = 10;
line.position.setX(-12);

scene.add( torus );

renderer.render( scene, camera );

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Helpers

// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper)

// const controls = new OrbitControls(camera, renderer.domElement);

function addStar(starsectionlow, starsectionhigh, starcolor) {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({color: starcolor });
  const star = new THREE.Mesh(geometry, material);

  const x = THREE.MathUtils.randFloat(-100, 10)  
  const y = THREE.MathUtils.randFloat(-10, 10)
  const z = THREE.MathUtils.randFloat(starsectionlow, starsectionhigh)

  star.position.set(x, y, z);
  scene.add(star);
} 

Array(100).fill().forEach(addStar.bind(undefined, -25, 20, "white"));
Array(100).fill().forEach(addStar.bind(undefined, 10, 30, "maroon"));
Array(100).fill().forEach(addStar.bind(undefined, 30, 50, "blue"));
Array(100).fill().forEach(addStar.bind(undefined, 50, 70, "orange"));

// Background

const spaceTexture = new THREE.TextureLoader().load('bgbg.jpg');
scene.background = spaceTexture;

// Avatar

const faceTexture = new THREE.TextureLoader().load('face.jpg');

const face = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: faceTexture }));

scene.add(face);

// flex1

const flex1Texture = new THREE.TextureLoader().load('flex1.jpg');
const flex2Texture = new THREE.TextureLoader().load('flex2.jpg');
const flex3Texture = new THREE.TextureLoader().load('flex3.jpg');
const flex4Texture = new THREE.TextureLoader().load('flex4.jpg');
const normalTexture = new THREE.TextureLoader().load('background.jpg');

const flex1 = new THREE.Mesh(
  new THREE.SphereBufferGeometry(2),
  new THREE.MeshStandardMaterial({
    map: flex1Texture,
    normalMap: normalTexture,
  })
);

const flex2 = new THREE.Mesh(
  new THREE.CapsuleGeometry(1.3,.3, 64, 64 ),
  new THREE.MeshStandardMaterial({
    map: flex2Texture,
    normalMap: normalTexture,
  })
);

const flex3 = new THREE.Mesh(
  new THREE.SphereBufferGeometry(1.3),
  new THREE.MeshStandardMaterial({
    map: flex3Texture,
    normalMap: normalTexture,
  })
);

const flex4 = new THREE.Mesh(
  new THREE.DodecahedronGeometry(2),
  new THREE.MeshStandardMaterial({
    map: flex4Texture,
    normalMap: normalTexture,
  })
);

scene.add(flex1);
scene.add(flex2);
scene.add(flex3);
scene.add(flex4);

flex1.position.z = 40;
flex1.position.y = 1;
flex1.position.setX(-12);

flex2.position.z = 45;
flex2.position.setX(-15);

flex3.position.z = 35;
flex3.position.y = -1;
flex3.position.setX(-13);

flex4.position.z = 30;
flex4.position.y = 3;
flex4.position.setX(-16);

rbc.position.set(-15, 2, 58)
rbc2.position.set(-15, 2, 55)

mood.position.set(-13, 2, 65)

face.position.z = -5;
face.position.x = 2;

torus.position.z = -5;
torus.position.x = 2;



// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;

  face.rotation.y += 0.01;
  face.rotation.z += 0.01;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop

function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  face.rotation.y += 0.01;
  face.rotation.z += 0.01;

  flex1.rotation.y += 0.05;
  flex1.rotation.x += 0.01;

  flex2.rotation.y -= 0.04;

  flex3.rotation.y -= 0.05;
  flex3.rotation.x += 0.01;

  flex4.rotation.y += 0.02;
  flex4.rotation.z += 0.02;

  rbc.rotation.y += 0.02;
  rbc.rotation.z += 0.02;

  rbc2.rotation.y -= 0.02;
  rbc2.rotation.x += 0.02;

  line.rotation.z += 0.01;
  school.rotation.y += 0.01;

  mood.rotation.y += 0.01;
  // controls.update();

  board.rotation.y += .004;

  basketball.rotation.y += 0.2;

  renderer.render(scene, camera);
}

animate();