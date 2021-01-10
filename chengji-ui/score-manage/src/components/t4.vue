<template>
  <el-container>
  <el-header>申诉情况</el-header>
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
    highlight-current-row
    @row-click="handleCurrentChange"
    class="tb-edit"
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
      width="150">
      <template slot-scope="scope">
        <el-button type="primary" size="mini" @click="dialogFormVisible = true">通过</el-button>
        <el-dialog title="修改成绩" :visible.sync="dialogFormVisible" :modal-append-to-body='false' style='margin-top:-76px'>
            <el-form :model="form">
              <el-form-item label="课程代号" :label-width="formLabelWidth">
                <el-input v-model="form.classno" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="学号" :label-width="formLabelWidth">
                <el-input v-model="form.sno" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="学年" :label-width="formLabelWidth">
                <el-input v-model="form.year" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="学期" :label-width="formLabelWidth">
                <el-input v-model="form.term" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="成绩" :label-width="formLabelWidth">
                <el-input v-model="form.grade" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="绩点" :label-width="formLabelWidth">
                <el-input v-model="form.jidian" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="handleSubmmit">确 定</el-button>
            </div>
          </el-dialog>

        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">拒绝</el-button>
      </template>
    </el-table-column>
  </el-table>
  </el-container>

</template>

<script>
export default {
  name: 't4',

  methods: {
      handleSubmmit() {
        //调取接口此时传form
        this.dialogFormVisible = false;
        console.log(this.form)
        //调取成功则编辑这一行动态显示出来
          this.tableData.splice(index, 1)
      },
      handleDelete(index,row) {
        //打印出该行的信息然后调取接口
        console.log(row,'de-row');
        //调取接口删除，删除成功则消除这一行
        this.tableData.splice(index, 1)
      },
      select(){
        console.log(this.yearvalue,'year');
        console.log(this.termvalue,'term');
        //调取接口返回一个数据存入tdata中，后期令tdata=tabledata
      }
    },
    data() {
      return {
        dialogFormVisible: false,
        form: {
          classno: '',
          sno: '',
          year: '',
          term: '',
          jidian: '',
          grade: '',
        },
        formLabelWidth: '120px',
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
        },{
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
