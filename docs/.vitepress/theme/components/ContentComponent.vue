<script setup lang="ts" xmlns="">
import {menu} from "../../menuConfig";
import useMenuStore from "../../store/modules/menu";
import {computed} from "vue";
const menuStore = useMenuStore()
const menuIndex = computed(()=>{
  for (let i = 0; i < menu[menuStore.type].length; i++) {
    if(menuStore.name === menu[menuStore.type][i].name){
      return i
    }
  }
  return -1
})
</script>

<template>
  <component :is="menuIndex >-1 ? menu[menuStore.type][menuIndex].component : 'span'"></component>
</template>

<style scoped lang="scss">

</style>
