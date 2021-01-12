<template>
  <div>
    <div style='margin-bottom:20px'>
      <el-row>
      <el-col :span="6" style='padding:5px' >
        <el-input v-model="coursevalue" placeholder="请输入课程代号" ></el-input>
      </el-col>
      <el-col :span="6" style='padding:5px' >
        <el-select v-model="yearvalue" placeholder="请选择学年">
          <el-option
            v-for="item in year"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="6"  style='padding:5px' >
        <el-select v-model="termvalue" placeholder="请选择学期">
          <el-option
            v-for="item in term"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
        <el-button @click="select" style='margin-top:5px;margin-left:5px' >查询</el-button>
      </el-row>
    </div>
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
      prop="grade"
      sortable
      label="成绩"
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
      width="100">
      <template slot-scope="scope">
        <el-button @click="dialogFormVisible = true" type="text" size="small">修改</el-button>
            <el-dialog title="修改成绩" :visible.sync="dialogFormVisible" :modal-append-to-body='false' >
            <el-form :model="form">
              <el-form-item label="成绩" :label-width="formLabelWidth">
                <el-input v-model="form.grade" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="绩点" :label-width="formLabelWidth">
                <el-input v-model="form.gpa" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer">
              <el-button @click="dialogFormVisible = false">取消</el-button>
              <el-button type="primary" @click="handleSubmmit(scope.$index,scope.row);dialogFormVisible = false">确定</el-button>
            </div>
        </el-dialog>
        <el-button @click="handleDelete(scope.row)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import { getScoreTea } from '@/api/teagetscore'
import { changeGrade } from '@/api/changegrade'

export default {
  name: 't22',

  data() {
    return {

      form: {
          gpa: '',
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
        coursevalue: '',
        yearvalue: '',
        dialogFormVisible: false,

      tableData: [
        {
          year: '2020-2021',
          term: '1',
          cno: 'zxcv',
          cname: '数据结构',
          credit: '3.5',
          grade: '95',
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
          sno: '2017040310',
          sname: '徐超',
          college: '信息科学与技术学院',
          pro: '计算机科学与技术',
          class: '计科1702',
        }
      ]
    }

  },

  created(){


  },

  methods: {
    select(){
      console.log(this.yearvalue,'year')
      console.log(this.termvalue,'term')
      console.log(this.coursevalue,'course')
      //调取接口获得成绩
      getScoreTea(this.coursevalue,this.yearvalue,this.termvalue).then(
        res => {
          if(res.data.status == 1){
            console.log(res.data,'查看学生成绩')
            this.tableData = []
            this.tableData = res.data.data.stu_sco
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

    handleSubmmit(index,row){
      console.log(row,'行列测试')
      console.log(this.form.grade, this.form.gpa,'输入成绩')
      //调取接口传递修改过后的成绩
      changeGrade(row.cno, row.sno, row.year, row.term, this.form.grade, this.form.gpa).then(
        res => {
          if(res.data.status == 1) {
            console.log(res.data,'修改成绩')
            this.$message({
              showClose: true,
              message: res.data.data.msg,
              type: 'success'
            });
            //此处需要重新调取接口获取页面数据
            getScoreTea(this.coursevalue,this.yearvalue,this.termvalue).then(
              res => {
                if(res.data.status == 1){
                  console.log(res.data,'查看学生成绩')
                  this.tableData = []
                  this.tableData = res.data.data.stu_sco
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
  }
}
</script>

<style>

</style>
