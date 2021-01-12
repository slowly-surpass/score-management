<template>
  <div>
  <h3>所选课程如下</h3>
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
      width="80">
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
      label="授课教师"
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
      label="联系方式"
      width="150">
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
import { getCourseStu } from '@/api/getcourse'
  export default {
    name: 'p12',
    created(){
      //在这个地方调取接口获取数据，存入tabledata中
      getCourseStu().then(
        res => {
          if(res.data.status == 1){
            console.log(res.data,'学生课程查询')
            this.tableData = []
            this.tableData = res.data.data.course_info
            this.$message({
                    showClose: true,
                    message: res.data.data.msg,
                    type: 'success'
            });
          }
          else {
            this.$message({
              showClose: true,
              message: res.data.error_des,
              type: 'error'
            });
          }
        }
      )
    },
    data() {
      return {
        tdata: [],
        tableData: [
          //调取接口从后端返回数据
          {
          year: '2020-2021',
          term: '1',
          classno: 'zxcv',
          classname: '数据结构',
          point: '3.5',
          sno: '2017040310',
          name: '徐超',
          college: '信息科学与技术学院',
          pro: '计算机科学与技术',
          class: '计科1702',
        },{
          year: '2020-2021',
          term: '1',
          classno: 'zxcv',
          classname: '数据结构',
          point: '3.5',
          sno: '2017040310',
          name: '徐超',
          college: '信息科学与技术学院',
          pro: '计算机科学与技术',
          class: '计科1702',
        }
        ],
        fits: 'fill',

      }
    }
  }
</script>

<style>
.top{
text-align:center;
}
