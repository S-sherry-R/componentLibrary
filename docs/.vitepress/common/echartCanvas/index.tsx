import { defineComponent, onMounted, ref, watch, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'
// @ts-ignore
import chengdu from '../../echart/map/chengdu.json'
// @ts-ignore
import cd from '../../echart/map/cd.json'

// 定义类型
const PropsType = {
  // 图表唯一 id
  id: String,
  // 图表类名
  className: {
    type: String,
    default: 'chart'
  },
  // 图表宽度
  width: {
    type: String,
    require: true
  },
  // 图表高度
  height: {
    type: String,
    require: true
  },
  // 图表数据项
  options: {
    type: Object,
    default: () => ({}),
  }
} as const

export default defineComponent({
  name: 'Echarts',
  props: PropsType,
  setup(props, { expose }) {
    const chartRef = ref<HTMLElement>()
    const charts = {
      chart: null
    }

    /**
     * 初始化echart
     * @param data 数据项
     * @param clearCaching 是否清除缓存
     */
    const initChart = (data?: any, clearCaching = false) => {
      if (data || props.options) {
        charts.chart.setOption(data || props.options, clearCaching)
      }
    }

    // 生命周期
    onMounted(() => {
      //每个模块都有
      echarts.registerMap('成都',chengdu)
      //大的模块轮廓
      echarts.registerMap('cd',cd)
      // 定义实例
      charts.chart = echarts.init(chartRef.value)
      initChart()
    })
    onBeforeUnmount(() => {
      charts.chart.dispose()
      charts.chart = null
    })

    // 监听改变
    watch(
      () => props.options,
      val => {
        val && initChart(val)
      },
      {
        deep: true
      }
    )

    // 对外暴露接口
    expose({
      chartRef,
      initChart
    });

    return () => {
      const { id, className, height, width } = props
      return <div
        ref={chartRef}
        id={id as string}
        class={className as string}
        style={{
          'height': height as string,
          'width': width as string
        }}
      />
    }
  }
})
