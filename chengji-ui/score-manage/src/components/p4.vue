<template>
<div>
  <el-alert
    title="申诉查询"
    type="info"
    description="截止到目前为止，你已经提交了如下的申诉"
    show-icon>
  </el-alert>
    <div id='myChart' style="width: 100%; height: 400px ;margin-top: 30px"></div>
  
</div>
</template>

<script>
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
require('echarts/lib/chart/pie')
require('echarts/lib/chart/line')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')


export default {
  name: 'p4',

  data() {

    return {

    }

  },

  mounted() {
  this.setChart()
  },

  methods:{

    setChart() {
        let myChart = echarts.init(document.getElementById('myChart'))
        //调取接口获取申诉数据，申诉成功、失败、成功
        myChart.setOption({

            title: {
            text: '申诉情况',
            subtext: '根据您的申诉做出的统计',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['申诉成功', '待审核', '申诉失败', '搜索引擎']
        },
        series: [
            {
                name: '数据占比',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                    {value: 335, name: '申诉成功'},
                    {},
                    {value: 234, name: '待审核'},
                    {value: 135, name: '申诉失败'},
                    {}
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]

        })



    }


  }
}
</script>

<style>
.top{
text-align:center;
}
