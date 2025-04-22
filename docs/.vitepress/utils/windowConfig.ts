/**
 * 因为 Vitepress 在构建时会通过 Node.js 环境生成静态 HTML，此时无法访问浏览器专属的 window 或 document 对象。
 * 解决build的时候window is not defined的报错
 */
export const windowWidth=():number=>{
  // 仅在浏览器环境执行
  if (typeof window !== 'undefined') {
    return  window.innerWidth;
  }
  return 0
}
export const windowHeight=():number=>{
  // 仅在浏览器环境执行
  if (typeof window !== 'undefined') {
    return window.innerHeight;
  }
 return 0
}
export const devicePixelRatio=():number=>{
  // 仅在浏览器环境执行
  if (typeof window !== 'undefined') {
    return window.devicePixelRatio;
  }
 return 0
}

