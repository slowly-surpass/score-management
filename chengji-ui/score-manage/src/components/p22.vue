<template>
<el-container>
  <el-header>成绩查询</el-header>
  <el-main>
    <el-row>
      <el-col :span="8" >
        <el-input v-model="coursevalue" placeholder="请输入课程名" style="margin-left:60px"></el-input>
      </el-col>
    <el-button @click="select">查询</el-button>
    </el-row>
  </el-main>
  <el-table
    :data="tableData"
    border
    style="width: 100%"
    max-height="500"
    :default-sort = "{prop: 'year', order: 'descending'}">
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
      prop="grade"
      sortable
      label="成绩"
      width="120">
    </el-table-column>
    <el-table-column
      prop="gpa"
      sortable
      label="绩点"
      width="120">
    </el-table-column>
    <el-table-column
      prop="sno"
      sortable
      label="学号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="sname"
      sortable
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="college"
      sortable
      label="学院"
      width="180">
    </el-table-column>
    <el-table-column
      prop="pro"
      sortable
      label="专业"
      width="180">
    </el-table-column>
    <el-table-column
      prop="class"
      sortable
      label="班级"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      sortable
      label="操作"
      width="50">
      <template slot-scope="scope">
        <el-button @click="handleComplain(scope.row)" type="text" size="small">申诉</el-button>
      </template>
    </el-table-column>
  </el-table>
</el-container>
</template>

<script>
import { getscore } from '@/api/getscore'
import { complain } from '@/api/complain'

export default {

  name: 'p22',

  methods: {
      handleComplain(row) {
        //会打印出这一行的所有信息，可以根据挑选来传参，通过row.的方式
        console.log(row);
        console.log(row.sno,'sno');
        complain(row.cno, row.year, row.term).then((res) => {
          console.log(res.data,'申诉')
          if(res.data.status == 1) {
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
        })

      },
      select(){
        console.log(this.coursevalue,'course');
        //调取接口获取数据
          getscore(this.coursevalue).then(
          res => {
            console.log(res.data,'按学期查成绩')
            if(res.data.status == 1){
              //给数组赋值并且页面刷新显示
                this.tableData = [];
                this.tableData = res.data.data.score_info;
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
      }
    },
    data() {
      return {
        coursevalue: '',
        tableData: [{
          year: '2020-2021',
          term: '1',
          cno: 'zxcv',
          cname: '数据结构',
          credit: '3.5',
          grade: '95',
          gpa: '4.33',
          sno: '2017040310',
          sname: '徐超',
          college: '信息科学与技术学院',
          pro: '计算机科学与技术',
          class: '计科1702',
        },
        {
          year: '2020-2021',
          term: '1',
          cno: 'zxcv',
          cname: '数据结构',
          credit: '3.5',
          grade: '95',
          gpa: '4.33',
          sno: '2017040310',
          sname: '徐超',
          college: '信息科学与技术学院',
          pro: '计算机科学与技术',
          class: '计科1702',
        }
        ],
        fits: 'fill',
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }
    }

}
</script>

<style lang="less" scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 30px;
  }
</style>
