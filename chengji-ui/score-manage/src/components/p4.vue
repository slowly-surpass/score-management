<template>
<div>
  <el-alert
    title="申诉查询"
    type="info"
    description="截止到目前为止，你的申诉情况如下"
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

import { appealData } from '@/api/appdetail'
export default {
  name: 'p4',

  data() {

    return {

    }

  },
  created() {
    //调取接口然后调用方法
    appealData().then(
      res => {
        if(res.data.status == 1) {
          console.log(res.data.data,'申诉数据')
          this.cg = res.data.data.app_list[0].count
          this.sb = res.data.data.app_list[1].count
          this.check = res.data.data.app_list[2].count
          this.setChart()
          this.$message({
            showClose: true,
            message: res.data.data.msg,
            type: 'success'
          });
        }
      }
    )

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
            data: ['申诉成功', '申诉失败','待审核']
        },
        series: [
            {
                name: '数据占比',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                    {value: this.cg, name: '申诉成功'},
                    {value: this.sb, name: '申诉失败'},
                    {value: this.check, name: '待审核'},
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
