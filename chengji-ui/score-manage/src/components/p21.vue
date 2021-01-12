<template>
<el-container>
  <el-header>成绩查询</el-header>
  <el-main>
    <el-row>
      <el-col :span="10">
        <el-select v-model="yearvalue" placeholder="请选择学年">
          <el-option
            v-for="item in year"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="10">
        <el-select v-model="termvalue" placeholder="请选择学期">
          <el-option
            v-for="item in term"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-button @click="select">查询</el-button>
    </el-row>
  </el-main>
  <el-table
    :data="tableData"
    border
    style="width: 100%"
    max-height="500"
    :default-sort = "{prop: 'date', order: 'descending'}">
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
import { getscore_term } from '@/api/getscore'
import { complain } from '@/api/complain'

export default {
  name: 'p21',

  methods: {

    //申诉接口
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

      //查询成绩接口
      select(){
        console.log(this.yearvalue,'year');
        console.log(this.termvalue,'term');
        //调取接口返回一个数据存入tdata中，后期令tdata=tabledata
        getscore_term(this.yearvalue, this.termvalue).then(
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

        year: [{
          value: '全部',
          label: '全部'
        }, {
          value: '2017-2018',
          label: '2017-2018'
        }, {
          value: '2018-2019',
          label: '2018-2019'
        }, {
          value: '2019-2020',
          label: '2019-2020'
        }, {
          value: '2020-2021',
          label: '2020-2021'
        }],
        yearvalue: '',
        term: [{
          value: '全部',
          label: '全部'
        }, {
          value: '1',
          label: '1'
        }, {
          value: '2',
          label: '2'
        }, {
          value: '3',
          label: '3'
        }],
        termvalue: '',
        tdata: [],
        tableData: [
          //调取接口从后端返回数据
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
