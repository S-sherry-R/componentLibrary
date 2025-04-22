import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我的组件库",
  description: "我的组件库",
  srcDir: './documents',
  vite: {
    server: {
      port: 5175
    },
  },
})
