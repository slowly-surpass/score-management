<template>
<el-container>
  <el-header>成绩查询</el-header>
  <el-main>
    <el-row>
      <el-col :span="12">
        <el-select v-model="yearvalue" placeholder="请选择学年">
          <el-option
            v-for="item in year"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="12">
        <el-select v-model="termvalue" placeholder="请选择学期">
          <el-option
            v-for="item in term"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
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
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
      </template>
    </el-table-column>
  </el-table>
</el-container>
</template>

<script>
export default {
  name: 'p21',

  methods: {
      handleClick(row) {
        console.log(row);
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
        }],
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
