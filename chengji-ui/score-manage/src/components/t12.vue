<template>
  <div>
  <h3>所授课程如下</h3>
  <el-table
    :data="tableData"
    style="width: 100%"
    max-height="500">
    <el-table-column
      prop="year"
      label="学年"
      sortable
      width="120">
    </el-table-column>
    <el-table-column
      prop="term"
      sortable
      label="学期"
      width="120">
    </el-table-column>
    <el-table-column
      prop="cno"
      sortable
      label="课程代号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="cname"
      sortable
      label="课程名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="credit"
      sortable
      label="学分"
      width="120">
    </el-table-column>
    <el-table-column
      prop="tno"
      sortable
      label="工号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="tname"
      sortable
      label="老师姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="college"
      sortable
      label="学院"
      width="180">
    </el-table-column>
    <el-table-column
      prop="tel"
      sortable
      label="电话"
      width="180">
    </el-table-column>
    <el-table-column
      prop="email"
      sortable
      label="邮箱"
      width="180">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import { getCourseTea } from '@/api/getcourse'

  export default {
    name: 't12',
    created(){
      //在这个地方调取接口获取数据
    getCourseTea().then(
      res => {
        if(res.data.status == 1){
          console.log(res.data,'老师教课')
          this.tableData = []
          this.tableData = res.data.data.course_info
          this.$message({
            showClose: true,
            message: res.data.data.msg,
            type: 'success'
          });
        }
      }
    )
    },
    data() {
      return {

        tableData: [
          //调取接口从后端返回数据
          {
          year: '2020-2021',
          term: '1',
          cno: 'zxcv',
          cname: '数据结构',
          credit: '3.5',
          sno: '2017040310',
          tname: '徐超',
          college: '信息科学与技术学院',
          pro: '计算机科学与技术',
        }, {
          year: '2020-2021',
          term: '1',
          cno: 'zxcv',
          cname: '数据结构',
          credit: '3.5',
          sno: '2017040310',
          tname: '徐超',
          college: '信息科学与技术学院',
          pro: '计算机科学与技术',
        }],
        fits: 'fill',

      }
    }
  }
</script>

<style>
.top{
text-align:center;
}
