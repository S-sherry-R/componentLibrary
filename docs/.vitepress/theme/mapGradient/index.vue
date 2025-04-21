<template>
  <div class="content">
    <public-echarts ref="chartRef" height="100%" width="100%" :options="options"></public-echarts>
  </div>
</template>

<script setup lang="ts">
import {onMounted, onUnmounted, ref, watch} from 'vue'
import useDraw from "../../utils/useDraw";
import PublicEcharts from '../../common/echartInstall.vue'
const data = [
    [
      {
        fault: 0,
        power: 103,
        total: 10,
        normal: 10,
        value: [100.20, 30.10]
      },
      {
        fault: 6,
        power: 434,
        total: 13,
        normal: 7,
        value: [100.20, 32.10]
      },
      {
        fault: 3,
        power: 258,
        total: 17,
        normal: 14,
        value: [100.37, 29.34]
      },
      {
        fault: 0,
        power: 216,
        total: 15,
        normal: 15,
        value: [102.06, 28.37]
      },
      {
        fault: 4,
        power: 361,
        total: 16,
        normal: 12,
        value: [102.06, 30.67]
      },
      {
        fault: 5,
        power: 233,
        total: 11,
        normal: 6,
        value: [102.06, 31.87]
      },
      {
        fault: 0,
        power: 421,
        total: 10,
        normal: 10,
        value: [102.48, 27.34]
      },
      {
        fault: 2,
        power: 85,
        total: 10,
        normal: 8,
        value: [103.06, 28.67]
      },
      {
        fault: 8,
        power: 401,
        total: 19,
        normal: 11,
        value: [103.12, 30.00]
      },
      {
        fault: 2,
        power: 303,
        total: 11,
        normal: 9,
        value: [103.54, 32.16]
      },
      {
        fault: 1,
        power: 413,
        total: 12,
        normal: 11,
        value: [104.20, 30.10]
      },
      {
        fault: 2,
        power: 180,
        total: 19,
        normal: 17,
        value: [104.3, 31.00]
      },
      {
        fault: 4,
        power: 144,
        total: 17,
        normal: 13,
        value: [104.68, 31.47]
      },
      {
        fault: 8,
        power: 96,
        total: 15,
        normal: 7,
        value: [105.3, 28.41]
      },
      {
        fault: 4,
        power: 127,
        total: 11,
        normal: 7,
        value: [105.3, 32.42]
      },
      {
        fault: 8,
        power: 377,
        total: 14,
        normal: 6,
        value: [106.3965, 31.1263]
      },
      {
        fault: 4,
        power: 266,
        total: 15,
        normal: 11,
        value: [106.97, 31.31]
      }
    ],
    [
      {
        name: "耀光充能股份有限公司",
        info: "开发光储充一体化电站，通过光伏发电与储能系统结合，实现24小时不间断供电，适用于工业园区与商业综合体低碳能源管理‌",
        value: [100.54,31.16]
      },
      {
        name: "绿驰源动股份有限公司",
        info: "主打环保型移动充电桩，结合太阳能储能技术，为户外场景（如露营地、景区）提供离网式充电服务，支持双向充放电与能源共享‌",
        value: [106.68,32.17]
      },
      {
        name: "拓界能源股份有限公司",
        info: "聚焦车网互动（V2G）技术研发，利用电动汽车电池作为分布式储能单元，平衡电网峰谷负荷，推动能源双向流动商业化应用‌",
        value: [104.48,29.34]
      },
      {
        name: "迅能智充股份有限公司",
        info: "专注于新能源汽车超充设备研发，提供800V高压快充解决方案，覆盖城市充电网络与高速公路充电站建设，兼容多品牌车型智能适配‌",
        value: [105.06,30.67]
      },
      {
        name: "智云快电股份有限公司",
        info: "提供模块化即插即用充电设备，支持15分钟极速换电模式，适配物流车队、出租车等高频用车场景，提升运营效率‌",
        value: [101.20,28.10]
      },
      {
        name: "星链电科股份有限公司",
        info: "基于物联网的智能充电运营平台，整合充电桩监控、用户支付及负荷调度功能，助力充电场站实现精细化管理和能效优化‌",
        value: [102.37,32.34]
      },
      {
        name: "风擎动力股份有限公司",
        info: "研发风能互补充电系统，结合小型风力发电机与储能装置，为海岛、偏远地区提供稳定可再生能源补给，减少柴油依赖‌",
        value: [105.3965,31.1263]
      },
      {
        name: "源启未来股份有限公司",
        info: "打造社区级共享充电微电网，通过分时租赁与错峰充电策略降低用户成本，配套APP实现预约、导航及碳积分兑换功能‌",
        value: [101.90,30.00]
      }
    ]
]
const chartRef = ref()
// 配置项
let options:Object = {}
// 监听
watch(
    () => data,
    (val: any) => {
      options = {
        legend: {
          show: true,
          right: '15%',
          bottom: '3%',
          orient: 'vertical',
          itemWidth: 40,
          itemHeight: 40,
          textStyle:{
            color: '#fff',
            fontSize: 20
          }
        },
        tooltip: {
          trigger: 'item',
        },
        geo: [
          // 底部背景图层
          {
            show: true,
            aspectScale: 0.85, //长宽比
            zoom: 1.04,
            z: 0,
            top: '12%',
            left: '30%',
            map: '成都',
            roam: false,
            emphasis: {
              itemStyle: {
                areaColor: 'rgba(5,21,35,0.6)',
                borderColor: '#67ece0',
                borderWidth: 2,
              }
            },
            tooltip: {
              show: false,
            },
            itemStyle: {
              borderColor: '#67ece0',
              shadowOffsetY: 15,
              shadowOffsetX: 10,
              shadowColor: 'rgba(0,0,0,0.8)',
              shadowBlur: 15,
              borderWidth: 2,
              areaColor: 'rgba(5,21,35,0.6)'
            }
          },
          //地图内图层
          {
            type: 'map',
            aspectScale: 0.85, //长宽比
            zoom: 1, //缩放
            map: '成都', // 自定义扩展图表类型
            top: '10%',
            z: 3,
            left: '30%',
            tooltip: {
              show: false,
            },
            label: {
              color: '#fff'
            },
            emphasis: {
              label: {
                color: '#fff',
              },
              itemStyle: {
                areaColor: '#137e5a',
              }
            },
            itemStyle: {
              areaColor: 'transparent',
              borderColor: '#67ece0',
              borderWidth: 1,
            },
          },
          //渐变图层
          {
            type: 'map',
            aspectScale: 0.85, //长宽比
            zoom: 1, //缩放
            map: 'cd', // 自定义扩展图表类型
            top: '10%',
            z: 2,
            left: '30%',
            tooltip: {
              show: false,
            },
            itemStyle: {
              // 背景渐变色
              areaColor: {
                type: 'radial',
                x: 0.4,
                y: 0.4,
                r: 1,
                colorStops: [{
                  offset: 0,
                  color: '#5debf3' // 0% 处的颜色
                }, {
                  offset: 0.3,
                  color: '#2f7881' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: '#07222b' // 100% 处的颜色
                }],
              },
              borderColor: '#67ece0',
              borderWidth: 4,
            },
          },
        ],
        series: [
          {
            geoIndex: 1,
            name: '充电站分布',
            type: 'scatter',
            z: 4,
            coordinateSystem: 'geo',
            symbol: 'image://img/cdz.svg',
            symbolSize: 50,
            emphasis: {
              itemStyle:{
                shadowColor: '#F69B52',
                shadowBlur: 10
              }
            },
            itemStyle:{
              shadowBlur: 0,
              opacity: 1,
            },
            tooltip: {
              show: true,
              trigger: 'item',
              backgroundColor: 'rgba(22,44,42,0.9)',
              borderColor: '#137e5a',
              textStyle: {
                color: '#fff'
              },
              renderMode: 'html',
              formatter: params => {
                return `<div>
                        <div><div style="float: left;height: 44px;margin-left: 10px">充电枪总数<br>${params.data.total}个</div></div>
                        <div><div style="float: left;height: 44px;margin-left: 10px">正常充电枪数量<br>${params.data.normal}个</div></div>
                        <div><div style="float: left;height: 44px;margin-left: 10px">故障充电枪数量<br>${params.data.fault}个</div></div>
                        <div><div style="float: left;height: 44px;margin-left: 10px">充电装机总功率<br>${params.data.power}kw</div></div>
                        </div>`
              },
              extraCssText: 'z-index: 999'
            },
            data: data[0],
          },
          {
            geoIndex: 1,
            name: '企业分布',
            type: 'scatter',
            z: 4,
            coordinateSystem: 'geo',
            symbol: 'image://img/qy.svg',
            symbolSize: 50,
            emphasis: {
              itemStyle:{
                shadowColor: '#3CFAE4',
                shadowBlur: 10
              }
            },
            itemStyle:{
              shadowBlur: 0,
              opacity: 1,
            },
            tooltip: {
              show: true,
              trigger: 'item',
              backgroundColor: 'rgba(22,44,42,0.9)',
              borderColor: '#137e5a',
              textStyle: {
                color: '#fff'
              },
              renderMode: 'html',
              formatter: params => {
                return `<div>
                            <span style="font-weight: 600">${params.data.name}</span>
                            <div style="width: 200px;
                            word-break: break-word;
                            word-wrap: break-word;
                            overflow-wrap: anywhere;
                            hyphens: auto;
                            white-space: normal;
                            border-top: 1px solid #41b2a4;
                            padding-top:15px">${params.data.info}</div>
                        </div>`
              },
              extraCssText: 'z-index: 999'
            },
            data: data[1],
          },
        ],
      }
      // 手动触发更新
      if (chartRef.value) {
        // 通过初始化参数打入数据
        chartRef.value.initChart(options)
      }
    },
    {
      immediate: true,
      deep: true
    }
)
// * 适配处理
const { appRef, calcRate, windowDraw, unWindowDraw } = useDraw()
onMounted(() => {
  // todo 屏幕适应
  windowDraw()
  calcRate()
})

onUnmounted(() => {
  unWindowDraw()
})
</script>

<style scoped lang="scss">
.content{
  background-image: url("../../img/map-bg.png");
  background-size: cover;
  background-position: center center;
}

</style>
