// @ts-ignore
import SlideTime from './theme/slideTime/index.vue'
// @ts-ignore
import Icosahedron from './theme/Icosahedron/index.vue'
// @ts-ignore
import ThreeDTime from './theme/3DTime/index.vue'
// @ts-ignore
import MapGradient from './theme/mapGradient/index.vue'
//默认显示的组件
export const defaultCom = { type: '2D', name: 'slideTime'}
export const menu = {
  '2D': [
    {name: 'slideTime', title: '时间', link: '2D-slideTime', component: SlideTime, img:'2D-time.png'}
  ],
  '3D': [
    {name: 'icosahedron', title: '二十面体', link: '/3D-Icosahedron', component: Icosahedron, img:'3D-icosahedron.png'},
    {name: 'threeDTime', title: '3D-时间', link: '/3D-time', component: ThreeDTime, img: '3D-time.png'},
  ],
  'echarts': [
    {name: 'mapGradient', title: '渐变地图', link: 'echarts-mapGradient', component: MapGradient,img: 'echarts-mapGradient.png'},
  ]
}
export const colors = [
  ['#cc163a','rgba(204,22,59,0.4)'],
  ['#cc217f','rgba(204,33,127,0.4)'],
  ['#a64fbc','rgba(167,79,189,0.4)'],
  ['#4c74e2','rgba(77,117,227,0.4)'],
  ['#008de8','rgba(0,139,232,0.4)'],
  ['#009ccf','rgba(0,155,207,0.4)']]
