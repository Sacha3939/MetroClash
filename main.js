// main.js

import * as THREE from 'three';

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Building setup
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const building = new THREE.Mesh(geometry, material);
scene.add(building);

// Units setup
const units = [];
function createUnit(position) {
    const unitGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const unitMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const unit = new THREE.Mesh(unitGeometry, unitMaterial);
    unit.position.copy(position);
    units.push(unit);
    scene.add(unit);
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// Camera controls
function onDocumentMouseMove(event) {
    camera.position.x = (event.clientX / window.innerWidth) * 10 - 5;
    camera.position.y = -(event.clientY / window.innerHeight) * 10 + 5;
}

document.addEventListener('mousemove', onDocumentMouseMove);

// Game state management
let gameState = 'waiting';
function startGame() {
    gameState = 'playing';
    createUnit(new THREE.Vector3(1, 0, 0));
}

// Start the animation
animate();
startGame();
