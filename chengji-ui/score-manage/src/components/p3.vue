<template>
<div>
  <el-alert
    title="学习情况"
    type="info"
    description="截止到目前为止，您的学习情况如下所示"
    show-icon>
  </el-alert>
  <div id='myChart2' style="width: 100%;height: 400px; margin-top: 30px"></div>
  <div id='myChart' style="width: 100%;height: 400px"></div>
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

  name: 'p3',

  data() {

    return {

    }

  },
mounted() {
  this.setChart()
  this.setChart2()
  },

  methods: {

    setChart() {
      let myChart = echarts.init(document.getElementById('myChart'))
      //此处可以先设置方法，
      let data = [5, 20, 36, 10, 10, 20]
      //data数据调取接口获得
      //  that.$http.post('接口地址',{
      //           //参数
      //       }).then(res=>{

        // 绘制图表
        myChart.setOption({
            text: '学习情况' ,
            tooltip: {},
            xAxis: {
                data: ["A+科目","A科目","A-科目","B+科目","B-科目","B科目"]
            },
            yAxis: {},
            series: [{
                name: '数量',
                type: 'bar',
                data: data
            }]
        });

    },
    setChart2() {
      let myChart2 = echarts.init(document.getElementById('myChart2'))
      let data = {
        name : ['A科目', 'B科目', 'C科目', 'D科目', 'E科目'],
        detail:  [
                    {value: 335, name: 'A科目'},
                    {value: 310, name: 'B科目'},
                    {value: 234, name: 'C科目'},
                    {value: 135, name: 'D科目'},
                    {value: 1548, name: 'E科目'}
                ],
      }

      //调取接口获得detail的数据

      myChart2.setOption({

        title: {
        text: '绩点等级分布',
        subtext: '绩点兑换详情参见学生手册',
        left: 'center'
    },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['A科目', 'B科目', 'C科目', 'D科目', 'E科目']
        },
        series: [
            {
                name: '数据占比',
                type: 'pie',
                radius: '70%',
                center: ['50%', '60%'],
                data: data.detail,
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

