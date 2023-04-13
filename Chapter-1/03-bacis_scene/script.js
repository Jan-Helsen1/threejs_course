// Scene
const scene = new THREE.Scene();

// Red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Material of the cube
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })

// Mesh of the cube
const mesh = new THREE.Mesh(geometry, material)

// Add to scene
scene.add(mesh)

// Camera size
const sizes = {
    width: 800,
    height: 600
};

// Camera to view shit
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3
scene.add(camera);

// getting canvas for renderer
const canvas = document.querySelector('canvas.webgl');

// Renderer for the scene
const renderer = new THREE.WebGLRenderer({
    canvas
})
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);