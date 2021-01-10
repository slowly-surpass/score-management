<template>
<el-container>
  <el-header>成绩查询</el-header>
  <el-main>
    <el-row>
      <el-col :span="12">
        <el-select v-model="coursevalue" placeholder="请选择课程">
          <el-option
            v-for="item in classname"
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
      prop="classno"
      sortable
      label="课程代号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="classname"
      sortable
      label="课程名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="point"
      sortable
      label="学分"
      width="120">
    </el-table-column>
    <el-table-column
      prop="score"
      sortable
      label="成绩"
      width="120">
    </el-table-column>
    <el-table-column
      prop="jidian"
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
      prop="name"
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
export default {
  name: 'p22',

  methods: {
      handleComplain(row) {
        //会打印出这一行的所有信息，可以根据挑选来传参，通过row.的方式
        console.log(row);
        console.log(row.sno,'sno');
      },
      select(){
        console.log(this.coursevalue,'course');
        //调取接口获取数据放入tdata中，然后赋值给tabledata
      }
    },
    data() {
      return {
        classname: [{
          value: '全部',
          label: '全部'
        }, {
          value: '数据结构',
          label: '数据结构'
        }, {
          value: '计算机网络',
          label: '计算机网络'
        }, {
          value: '编译原理',
          label: '编译原理'
        }, {
          value: '数据库原理',
          label: '数据库原理'
        }],
        coursevalue: '',
        tdata: [],
        tableData: [{
          year: '2020-2021',
          term: '1',
          classno: 'zxcv',
          classname: '数据结构',
          point: '3.5',
          score: '95',
          jidian: '4.33',
          sno: '2017040310',
          name: '徐超',
          college: '信息科学与技术学院',
          pro: '计算机科学与技术',
          class: '计科1702',
        },
        {
          year: '2020-2021',
          term: '1',
          classno: 'zxcv',
          classname: '数据结构',
          point: '3.5',
          score: '95',
          jidian: '4.33',
          sno: '2017040310',
          name: '徐超',
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
