<script setup lang="ts">
import TopNav from "./components/TopNav.vue";
import TopBar from "./components/TopBar.vue";
import ContentComponent from "./components/ContentComponent.vue";
import SideBar from "./components/SideBar.vue";
import CodeContent from "./components/CodeContent.vue";
import useMenuStore from "../store/modules/menu";
const menuStore = useMenuStore()
</script>

<template>
  <div class="Layout">
    <content-component class="content-component"></content-component>
    <top-nav class="top-nav"></top-nav>
    <top-bar class="top-bar"></top-bar>
    <side-bar class="side-bar"></side-bar>
    <transition name="fade">
      <div class="code-content" v-if="menuStore.showCode">
        <code-content></code-content>
      </div>
    </transition>
  </div>
</template>
<style scoped lang="scss">
.Layout{
  height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  .content-component{
    height: 100%;
    width: 100%;
  }
  .top-nav{
    height: var(--top-nav);
    width: 100%;
    position: absolute;
  }
  .top-bar{
    height: var(--top-bar);
    width: 100%;
    position: absolute;
    top: var(--top-nav)
  }
  .side-bar{
    width: var(--side-bar);
    height: calc(100% - var(--top-nav) - var(--top-bar));
    overflow-y: auto;
    position: absolute;
    left: 0;
    top: calc(var(--top-nav) + var(--top-bar));
  }
  .code-content{
    width: calc(50% + var(--code-content)/2);
    height: calc(100% - var(--top-nav) - var(--top-bar) - 20px);
    overflow-y: auto;
    position: absolute;
    left: calc(50% - var(--code-content)/2);
    top: calc(var(--top-nav) + var(--top-bar) + 20px);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
