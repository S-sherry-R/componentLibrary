```js
<script setup lang="ts">
import * as THREE from 'three'
import gsap from 'gsap'
import {onMounted, ref} from "vue";

const container = ref()
let scene, camera, renderer
const time = [];

const list = [];
list[0] = [];
list[1] = [];
list[2] = [];
list[3] = [];
list[4] = [];
list[5] = [];
list[0]["offset"] = 0;
list[1]["offset"] = 6;
list[2]["offset"] = 14;
list[3]["offset"] = 20;
list[4]["offset"] = 28;
list[5]["offset"] = 34;

let offset
const numbers = [[
  [1, 1, 1],
  [1, 0, 1],
  [1, 0, 1],
  [1, 0, 1],
  [1, 1, 1],
], [
  [0, 0, 1],
  [0, 1, 1],
  [0, 0, 1],
  [0, 0, 1],
  [0, 0, 1]
], [
  [1, 1, 1],
  [0, 0, 1],
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 1]
], [
  [1, 1, 1],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 1],
  [1, 1, 1],
], [
  [1, 0, 1],
  [1, 0, 1],
  [1, 1, 1],
  [0, 0, 1],
  [0, 0, 1],
], [
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 1],
  [0, 0, 1],
  [1, 1, 1],
], [
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
], [
  [1, 1, 1],
  [0, 0, 1],
  [0, 0, 1],
  [0, 0, 1],
  [0, 0, 1],
], [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
], [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
  [0, 0, 1],
  [1, 1, 1],
]];

onMounted(() => {
  init()
})
const windowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
const init = () => {
  scene = new THREE.Scene();
  const aspect = window.innerWidth / window.innerHeight;
  camera = new THREE.PerspectiveCamera(20, aspect, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({antialias: true, canvas: container.value});
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.position.z = 70;
  camera.position.y = -5;
  camera.position.x = -15;
  camera.rotation.y = THREE.MathUtils.degToRad(0);
  const light1 = new THREE.DirectionalLight(0xffffff, 1);
  light1.position.set(-150, 80, 80);
  const light2 = new THREE.AmbientLight(0xffffff, 1.5);
  const geometry = new THREE.PlaneGeometry(1000, 1000, 1, 1);
  const material = new THREE.MeshBasicMaterial({color: 0x202020});
  const floor = new THREE.Mesh(geometry, material);
  scene.add(light2, floor);
  scene.add(light1);
  setupGrid();
  render();
  window.addEventListener("resize", windowResize);
}

const setupGrid = () => {
  for (let i = 0; i < 6; i++) {
    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 5; y++) {
        let cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshLambertMaterial({color: 0xffffff}));
        cube.position.y = y * -1.5;
        cube.position.x = x * 1.5 - list[i]["offset"];
        cube.position.z = 1;
        scene.add(cube);
        list[i].push(cube);

      }
    }
  }
}
const update = () => {
  const date = new Date();
  //秒
  let str = date.getSeconds().toString();
  str = str.charAt(str.length - 1);
  let secsUnits = parseInt(str);
  const secsStr = date.getSeconds().toString();
  let secsDecs = 0
  if (secsStr.length == 1) {
    secsDecs = 0
  } else {
    secsDecs = parseInt(secsStr.charAt(0));
  }
  //分
  let minutesStr = date.getMinutes().toString();
  minutesStr = minutesStr.charAt(minutesStr.length - 1);
  let minutesUnits = parseInt(minutesStr);
  const minutesStr1 = date.getMinutes().toString();
  let minutesDecs = 0;
  if (minutesStr1.length == 1) {
    minutesDecs = 0;
  } else {
    minutesDecs = parseInt(minutesStr1.charAt(0));
  }
  //时
  let hoursStr = date.getHours().toString();
  hoursStr = hoursStr.charAt(hoursStr.length - 1);
  const hoursUnits = parseInt(hoursStr);
  const hoursStr1 = date.getHours().toString();
  let hoursDecs = 0;
  if (hoursStr1.length == 1) {
    hoursDecs = 0;
  } else {
    hoursDecs = parseInt(hoursStr1.charAt(0));
  }
  time[0] = secsUnits;
  time[1] = secsDecs;
  time[2] = minutesUnits;
  time[3] = minutesDecs;
  time[4] = hoursUnits;
  time[5] = hoursDecs;
  for (let i = 0; i < 6; i++) {
    for (const element of list[i]) {
      let y = -element.position.y / 1.5;
      let x = (element.position.x + list[i]["offset"]) / 1.5;
      if (numbers[time[i]][y][x] != 1) {
        gsap.to(element.scale, { x:0,y:0,z:0,duration:1 } );
        gsap.to(element.rotation, {y: Math.PI/2,z: Math.PI/2,duration:0.5} );
      } else {
        gsap.to(element.scale, { x:1,y:1,z:1,duration:1 } );
        gsap.to(element.rotation, {y: -Math.PI/2,z: -Math.PI/2,duration:0.5} );
      }
    }
  }
}

const render = () => {
  requestAnimationFrame(render);
  update();
  renderer.render(scene, camera);
};


</script>

<template>
  <canvas ref="container" class="three-container"></canvas>
</template>

<style scoped lang="scss">

</style>

```
