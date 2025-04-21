//用户相关的仓库
import { defineStore } from "pinia";
import {ref} from "vue";
import { defaultCom} from "../../menuConfig";

const useMenuStore = defineStore('User',() => {
  let type = ref<string>(defaultCom.type)
  let topType = ref<string>(defaultCom.type)
  let name = ref<string>(defaultCom.name)
  let showCode = ref<boolean>(false)
  return { type, name,showCode,topType}
})

export default useMenuStore
