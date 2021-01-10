<template>
  <div class="top">
  	<!-- 数据展示 -->
		  <el-main>
          <el-button @click="handleDeleteAll">批量删除</el-button>
		      <el-table
          ref='multipleTable'
          :data="tableData"
          class='tb-edit'
          style='width:100%'
          @selection-change="handleSelectionChange"
          >
          <el-table-column
              type="selection"
              width="55">
            </el-table-column>
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
            <template slot-scope="{row,$index}">
            <el-input class="edit-cell" v-if="showEdit[$index]" v-model="row.score"></el-input>
            <span v-if="!showEdit[$index]">{{row.score}}</span>
            </template>
            </el-table-column>
            <el-table-column
              prop="jidian"
              sortable
              label="绩点"
              width="120">
            <template slot-scope="{row,$index}">
            <el-input class="edit-cell" v-if="showEdit[$index]" v-model="row.jidian"></el-input>
            <span v-if="!showEdit[$index]">{{row.jidian}}</span>
            </template>
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
          <el-table-column label="操作" width="150">
              <template slot-scope="{row,$index}">
              <el-button type="text" size="small"  @click.native="handleUpdate($index, row)"  v-if="showBtn[$index]">更新</el-button>
              <el-button type="text" size="small"  @click.native="handleCancel($index, row)"  v-if="showBtn[$index]">取消</el-button>

              <el-button type="text" size="small"  @click.native="handleEdit($index, row)"  v-if="!showBtn[$index]">编辑</el-button>
              <el-button type="text" size="small"  @click.native="handleDelete($index, row)"  v-if="!showBtn[$index]">删除</el-button>
              </template>
          </el-table-column>

		      </el-table>
		    </el-main>
  </div>
</template>

<script>
export default {
  name: 't23',

  data() {

    return {

      showEdit: [], //显示编辑框
      showBtn: [],
      showBtnOrdinary: true,
      multipleSelection: [],
      tableData: [
        {
          year: '2020-2021',
          term: '1',
          cno: 'zxcv',
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
          cno: 'zxcv',
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
      ]
    }

  },

  created(){
  for(var i = 0; i < 100; i ++) {
  this.showEdit[i] = false;
  this.showBtn[i] = false;
  this.$set(vm.showEdit[i], false);
  this.$set(vm.showBtn[i], false);
}
  },

  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(val,'选中测试')
    },
    handleDeleteAll() {
      //调取接口删除成绩
      console.log(this.mulpleSelection,'删除测试')
    },
    //单独的编辑按钮
    handleEdit(index, row) {
        console.log(index, row);
        this.showEdit[index] = true;
        this.showBtn[index] = true;
        this.$set(this.showEdit,row,true)
        this.$set(this.showBtn,row,true)

      },
   //点击编辑
handleEdit(index, row) {
  this.showEdit[index] = true;
  this.showBtn[index] = true;
  this.$set(this.showEdit,row,true)
  this.$set(this.showBtn,row,true)
},
//取消编辑
handelCancel(index, row) {
  this.getContentList();
  this.showEdit[index] = false;
  this.showBtn[index] = false;
  },

//点击更新
handleUpdate(score,jidian) {
  this.tableData.score=score;
  this.tableData.jidian=jidian;
},
//点击删除
handleDelete(index, row) {

},
  }
}
</script>

<style>

</style>
