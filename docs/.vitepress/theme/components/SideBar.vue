<script setup lang="ts">
import {menu,colors} from "../../menuConfig";
import useMenuStore from "../../store/modules/menu";
const menuStore = useMenuStore()
const getImageUrl = (name:string) => {
  return new URL(`../../img/${name}`, import.meta.url).href
}
const aClick = (item)=>{
  if(menuStore.name !== item.name){
    menuStore.showCode = false
  }
  menuStore.type = menuStore.topType
  menuStore.name = item.name
}
</script>

<template>
<div>
  <a v-for="(item,index) in menu[menuStore.topType]"
      :key="item.name"
      :href="item.link"
      :class="{'li-active':menuStore.name === item.name}"
      @click="aClick(item)"
      :style="{backgroundImage:`url(${getImageUrl(item.img)})`,
      borderBottom: `5px solid ${colors[index % colors.length][0]}`,
      boxShadow: `0 10px 10px ${colors[index % colors.length][1]}`}">
    <span class="li-text">{{item.title}}</span>
    <span class="li-code" :class="{'code-active':menuStore.name === item.name}" @click="menuStore.showCode = !menuStore.showCode">
      源代码<span class="iconfont icon-cube1"></span>
    </span>
  </a>
</div>
</template>

<style scoped lang="scss">
div{
  margin-left: var(--margin-left);
  padding-top: 20px;
  a{
    display: inline-block;
    width: 300px;
    font-size: 16px;
    height: 100px;
    margin-top: 40px;
    border-bottom: 5px solid var(--main-color);
    border-top-left-radius: 20px;
    box-shadow: 0px 10px 10px var(--shadow-color);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    cursor: pointer;
    color: var(--font-color);
    transition:all 0.5s;
    &:hover{
      width: 320px;
      height: 110px;
    }
    .li-text{
      height: 34px;
      line-height: 34px;
      padding:0 20px;
      background-color: var(--main-color);
      position: absolute;
      right: -10px;
      top: 10px;
      box-shadow: 5px 5px 10px var(--shadow-color);
      &:after{
        content:'';
        width: 2px;
        height: 34px;
        background-color: var(--main-color);
        position: absolute;
        right: -6px;
        top: 0
      }
    }
    .li-code{
      color: var(--main-color);
      position: absolute;
      right: 0;
      top: 10px;
      height: 34px;
      line-height: 34px;
      text-align: center;
      width: 90px;
      border-bottom: 2px solid var(--main-color);
      cursor: pointer;
      opacity: 0;
      transition:all 0.5s;
      &:after{
        content: '';
        height: 26px;
        width: 26px;
        border-right: 2px solid var(--main-color);
        border-top: 2px solid var(--main-color);
        position: absolute;
        right: -14px;
        top: 3px;
        transform: rotate(45deg);
      }
      &:before{
        content: '';
        height: 26px;
        width: 26px;
        border-right: 2px solid var(--main-color);
        border-top: 2px solid var(--main-color);
        position: absolute;
        right: -19px;
        top: 3px;
        transform: rotate(45deg);
      }
      .iconfont{
        display: inline-block;
        transform: rotate(90deg);
        font-size: 20px;
        position: absolute;
        right: -10px;
      }
    }
  }
}
.li-active{
  width: 320px;
  height: 110px;
}
.code-active{
  opacity: 1!important;
  right: -120px!important;
}
</style>
