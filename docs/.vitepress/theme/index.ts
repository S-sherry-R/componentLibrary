// https://vitepress.dev/guide/custom-theme
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import '../style/var.css'
import '../style/base.css'
import '../style/style.css'
import '../style/custom-block.css'
import '../style/code.css'
import '../style/code-group.css'
import '../style/code-doc.css'
import '../icons/iconfont.css'
import '../icons/iconfont.js'
// @ts-ignore
import Layout from './Layout.vue'
import pinia from "../store";
export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.use(pinia)
  }
} satisfies Theme

