```js
<script setup lang="ts">
import * as THREE from 'three'
import {onMounted, ref} from "vue";

let renderer, scene, camera, composer, circle, skelet, particle;
const container = ref()
onMounted(() => {
  init();
  animate();
})

const init = () => {
  //渲染器  antialias - 是否执行抗锯齿
  renderer = new THREE.WebGLRenderer({antialias: true, canvas: container.value, alpha: true});
  renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.autoClear = false;
  renderer.setClearColor(0x000000, 0.0);
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 400;
  scene.add(camera);

  circle = new THREE.Object3D();
  skelet = new THREE.Object3D();
  particle = new THREE.Object3D();

  scene.add(circle);
  scene.add(skelet);
  scene.add(particle);

  const geometry = new THREE.TetrahedronGeometry(2, 0);
  const geom = new THREE.IcosahedronGeometry(7, 1);
  const geom2 = new THREE.IcosahedronGeometry(15, 1);

  const material = new THREE.MeshPhongMaterial({
    color:0xffffff,
    flatShading: true
  });

  for (let i = 0; i < 1000; i++) {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
    mesh.position.multiplyScalar(90 + (Math.random() * 700));
    mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
    particle.add(mesh);
  }

  const mat = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    flatShading: true
  });

  const mat2 = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    wireframe: true,
    side: THREE.DoubleSide

  });

  const planet = new THREE.Mesh(geom, mat);
  planet.scale.x = planet.scale.y = planet.scale.z = 16;
  circle.add(planet);

  const planet2 = new THREE.Mesh(geom2, mat2);
  planet2.scale.x = planet2.scale.y = planet2.scale.z = 10;
  skelet.add(planet2);

  const ambientLight = new THREE.AmbientLight(0xdddddd);
  scene.add(ambientLight);

  const lights = [];
  lights[0] = new THREE.DirectionalLight(0xffffff, 2);
  lights[0].position.set(1, 0, 0);
  lights[1] = new THREE.DirectionalLight(0x11E8BB, 2);
  lights[1].position.set(0.75, 1, 0.5);
  lights[2] = new THREE.DirectionalLight(0x8200C9, 2);
  lights[2].position.set(-0.75, -1, 0.5);
  scene.add(lights[0]);
  scene.add(lights[1]);
  scene.add(lights[2]);
  window.addEventListener('resize', onWindowResize, false);
};

const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

const animate = () => {
  requestAnimationFrame(animate);
  particle.rotation.x += 0.0000;
  particle.rotation.y -= 0.0040;
  circle.rotation.x -= 0.0020;
  circle.rotation.y -= 0.0030;
  skelet.rotation.x -= 0.0010;
  skelet.rotation.y += 0.0020;
  renderer.clear();

  renderer.render(scene, camera)
};

</script>

<template>
  <canvas ref="container" class="three-container"></canvas>
</template>

<style scoped lang="scss">
.three-container {
  background: #11e8bb; /* Old browsers */
  background: -moz-linear-gradient(top, #11e8bb 0%, #8200c9 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, #11e8bb 0%, #8200c9 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, #11e8bb 0%, #8200c9 100%);
}
</style>

```
