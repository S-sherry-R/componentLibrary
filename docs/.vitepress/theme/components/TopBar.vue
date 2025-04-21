<script setup lang="ts">
import {menu} from '../../menuConfig'
import useMenuStore from "../../store/modules/menu";
const menuStore = useMenuStore()
</script>

<template>
  <ul>
    <li v-for="(item,key) of menu" :key="key" :class="{'li-active':menuStore.topType === key}" @click="menuStore.topType = key">
      {{key}}
      <span class="iconfont icon-cube1" v-if="menuStore.topType === key"></span>
    </li>
  </ul>
</template>

<style scoped lang="scss">
ul{
  display: flex;
  padding-left: 450px;
  padding-top: 10px;
  li{
    height: 40px;
    margin-right: 20px;
    line-height: 40px;
    position: relative;
    border-radius: 50px;
    width: 140px;
    color: #fff;
    font-size: 0.97em;
    letter-spacing: 0.094em;
    cursor: pointer;
    -webkit-box-shadow: 10px 10px 14px 1px rgba(00, 00, 00, 0.2);
    box-shadow: 10px 10px 14px 1px rgba(00, 00, 00, 0.2);
    text-align: center;
    -webkit-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
    font-weight: 600;
    &:nth-child(1){
      background-color: #cc217f;
    }
    &:nth-child(2){
      background-color: #a64fbc;
    }
    &:nth-child(3){
      background-color: #4c74e2;
    }
    span{
      position: absolute;
      font-size: 30px;
      left: -20px;
      bottom: -15px;
      opacity: 0;
      transition: all 0.5s;
    }
    &:before{
      content: '';
      height: 0;
      width: 0;
      opacity: 0;
      position: absolute;
      top:0;
      left:0;
      transition: all 0.5s;
      border-left:2px solid var(--main-color);
      border-top:2px dotted var(--main-color);
    }
    &:after{
      content: '';
      height: 0;
      width: 0;
      opacity: 0;
      position: absolute;
      right:0;
      bottom:0;
      transition: all 0.5s;
      border-right:2px dotted var(--main-color);
      border-bottom:2px solid var(--main-color);
    }
  }
}
.li-active{
  width: 200px;
  background-color: transparent!important;
  color: var(--main-color);
  border-radius: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  span{
    opacity: 1;
  }
  &:before{
    opacity: 1;
    height: 18px;
    width: 200px;
  }
  &:after{
    opacity: 1;
    height: 40px;
    width: 182px;
  }
}
</style>
