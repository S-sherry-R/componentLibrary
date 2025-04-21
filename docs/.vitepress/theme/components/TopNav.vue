<script setup lang="ts">
import {useData} from "vitepress";
const {site}=useData()
</script>

<template>
<div>
   <div class="nav-bar">
     <a class="logo">
       <img src="../../img/logo1.png">
       <img src="../../img/logo2.png">
       <span class="logo-title">{{ site.title}}</span>
     </a>
     <div class="nav-line"></div>
   </div>
</div>
</template>

<style scoped lang="scss">
.nav-bar{
  position: relative;
  display: flex;
  cursor: pointer;
  .logo{
    height: 45px;
    margin-top: 15px;
    display: flex;
    margin-left: var(--margin-left);
    background: var(--main-color);
    width: 265px;
    color: var(--font-color);
    padding-left:30px;
    padding-top: 5px;
    font-weight: 700;
    font-size: 18px;
    clip-path: polygon( 0.00% 0.00%, 12.08% 97.78%, 100% 111.11%, 87.92% 0.00% );
    img{
      height: 35px;
      width: 35px;
      margin-right: 10px;
    }
    .logo-title{
      position: relative;
      top: 5px;
      letter-spacing: 0.1rem;
      &:after{
        content: '';
        width: 110px;
        height: 5px;
        background: var(--font-color);
        position: absolute;
        bottom: 10px;
        left: -15px
      }
    }
  }
  &:before{
    content: '';
    background: var(--main-color);
    width: 100px;
    height: 40px;
    position: absolute;
    left: 100px;
    top: 25px;
    clip-path: polygon( 0.00% 0.00%, 1.54% 0.00%, 29.23% 95.00%, 100% 95.00%, 100% 100%, 29.23% 100% );
  }
  .nav-line{
    background: var(--main-color);
    height: 45px;
    width: calc(100% - 400px);
    position: absolute;
    top: 15px;
    left: 337px;
    clip-path: polygon( 0.00% 0.00%, 0.10% 0.00%, 1.50% 95.00%, 100% 95.00%, 100% 100%, 1.50% 100% );
  }
}
</style>
