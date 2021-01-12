<template>
  <el-container>
  <el-table
    :data="tableData"
    border
    highlight-current-row
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
      width="150">
      <template slot-scope="scope">
        <el-button type="primary" size="mini" @click="dialogFormVisible = true">通过</el-button>
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
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="handleSubmmit(scope.$index, scope.row)">确 定</el-button>
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
import { appealGet,appealPass,appealRefuse } from '@/api/teaappeal'

export default {
  name: 't4',

  methods: {

      //通过填写修改成绩表单调用的接口
      handleSubmmit(index,row) {
        //调取接口此时传form
        console.log(row.cno,'课程号')
        console.log(row.sno,'学号')
        console.log(row.year,'学年')
        console.log(row.term,'学期')
        console.log(this.form.grade,'成绩')
        appealPass(row.cno, row.sno, row.year, row.term, this.form.grade).then(
          res => {
            console.log(res.data,'通过申诉')
            if(res.data.status == 1) {
              this.$message({
                    showClose: true,
                    message: res.data.data.msg,
                    type: 'success'
                });
              //调取成功则编辑这一行动态去除掉
              this.tableData.splice(index, 1)
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

      //点击拒绝申诉所调取的接口
      handleDelete(index,row) {
        //打印出该行的信息然后调取接口
        console.log(row,'de-row')
        //调取接口删除，删除成功则消除这一行
        appealRefuse(row.cno,row.sno,row.year,row.term).then(
          res => {
            console.log(res.data,'拒绝申诉')
            if(res.data.status == 1) {
              this.tableData.splice(index, 1)
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
    },

    data() {
      return {
        dialogFormVisible: false,
        form: {
          gpa: '',
          grade: '',
        },
        formLabelWidth: '120px',
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
        }],

        fits: 'fill',
        }
    },

    created() {
      //获取申诉查询接口
      appealGet().then(
        res => {
          if(res.data.status == 1){
            console.log(res.data.data.appeal_info,'查看申诉查询')
            this.tableData = [];
            this.tableData = res.data.data.appeal_info;
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
