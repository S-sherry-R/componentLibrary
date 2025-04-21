<script setup lang="ts">
import {onMounted, reactive} from "vue";

const clock = reactive({
  hr: [
    {list: [0,1,2], translateY: '', lightNumber: -1},
    {list: [0,1,2,3,4,5,6,7,8,9], translateY: '', lightNumber: -1}
  ],
  min: [
    {list: [0,1,2,3,4,5], translateY: '', lightNumber: -1},
    {list: [0,1,2,3,4,5,6,7,8,9], translateY: '', lightNumber: -1}
  ],
  sec: [
    {list: [0,1,2,3,4,5], translateY: '', lightNumber: -1},
    {list: [0,1,2,3,4,5,6,7,8,9], translateY: '', lightNumber: -1}
  ]
})

const numberSize = "4"; // 数字大小单位rem

const lastTime = [-1, -1, -1]
//点亮数字
const highlight =(strip, d1, d2)=> {
  clock[strip][0].lightNumber = d1
  clock[strip][1].lightNumber = d2
  setTimeout(() => {
    clock[strip][0].lightNumber = -1
    clock[strip][1].lightNumber = -1
  }, 950);
}
//滑动块
const stripSlider=(strip, id, number)=> {
  let d1 = Math.floor(number / 10);
  let d2 = number % 10;
  //根据当前时间时分秒对应的长块在Y轴移动的距离
  if (lastTime[id] == -1 || lastTime[id] != number) {
    clock[strip][0].translateY = d1 * -numberSize;
    clock[strip][1].translateY = d2 * -numberSize;
    lastTime[id] = number;
  }
  //点亮具体的数字
  highlight(strip, d1, d2);
}
//更新时间
const updateClock=()=> {
  //获取当前时间
  const time = new Date();
  const hours = time.getHours();
  const mins = time.getMinutes();
  const secs = time.getSeconds();

  // 时分秒的移动
  stripSlider('hr', 0, hours);
  stripSlider('min', 1, mins);
  stripSlider('sec', 2, secs);
}
//初始化
onMounted(()=>{
  setInterval(updateClock, 1000);
})
</script>

<template>
  <div class="clock-main">
    <div class="clock">
      <div v-for="(item,key) of clock" :key="key" :class="key">
        <div class="strip" v-for="(node,index) in item" :key="index" :style="{transform: `translateY(${node.translateY}rem)`}">
          <div class="number" v-for="number in node.list" :key="number+'number'" :class="{'pop':node.lightNumber === number}">{{number}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hr,
.min,
.sec {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  grid-row: 1/2;
  align-items: start;
}

.number {
  padding: 0.5em;
  width: 4rem;
  height: 4rem;
  display: grid;
  place-items: center;
  color: gray;
  transition: all 500ms 100ms ease;
  border-radius: 50%;
}

.number.pop {
  color: white;
  font-weight: bolder;
  transform: scale(1.4);
  background-color: rgba(0,10,0,0.3);
  box-shadow: -10px -5px 20px -5px grey, 10px 10px 20px rgba(0,10,0,0.7);
}

.strip {
  transition: transform 500ms ease-in-out;
  border-radius: 8px;
  background-color: rgba(0,0,0,0.4);
  box-shadow: -10px -10px 20px -5px grey, 10px 10px 20px rgba(0,10,0,0.7);
}

.clock {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5rem;
  height: 4rem;
  position: relative;
  padding: 0 4rem;
}
.clock-main{
  display: grid;
  font-family: monospace;
  font-size: 2rem;
  min-height: 100%;
  overflow-y: hidden;
  place-items: center;
  background: linear-gradient(-45deg, black,gray);
}
</style>
