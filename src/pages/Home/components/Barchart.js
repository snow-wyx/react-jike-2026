import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
const Barchart = ({ title }) => {
  const chartRef = useRef()
  useEffect(() => {
    //获取渲染图标的dom节点
    const chartDom = chartRef.current
    //图表初始化生成图表实例对象
    const myChart = echarts.init(chartDom)

    //准备图表参数
    const option = {
      title: {
        text: title
      },
      xAxis: {
        type: 'category',
        data: ['Vue', 'Angular', 'React']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [10, 40, 70],
          type: 'bar'
        }
      ]
    };
    //使用图表参数完成图标渲染
    myChart.setOption(option)
  }, [])
  return (
    <div ref={chartRef} style={{ width: '500px', height: '400px' }}></div>
  )
}

export default Barchart