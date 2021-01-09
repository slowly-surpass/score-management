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
  </el-table>
  </div>
</template>

<script>
  export default {
    name: 'p12',
    created(){
      //在这个地方调取接口获取数据，存入tabledata中
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
