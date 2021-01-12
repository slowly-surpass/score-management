<template>
  <el-container class="container">
    <el-header class="header">
      <el-row>
        <el-col :span="16" class="headerlogo">
        <div class="grid-content bg-purple" style='display:flex'>
            <img
              style="width:50px; height: 48px;margin-top: 3px;"
              src="../assets/images/成绩.png"
            />
            <div>
            <span style='line-height:60px'>学生成绩管理系统</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8" class="rightsection">
          <div class="grid-content bg-purple-light">
            <span class="el-dropdown-link userinfo-inner">欢迎您，管理员</span>
            <el-button size="mini" class="userinfo-inner" @click="signout">退出</el-button>
          </div>
        </el-col>
      </el-row>
    </el-header>

    <el-container>
      <el-aside class="aside" style="width: 206px;" >
        <el-menu
          :default-active="$router.path"
          :unique-opened='true'
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">

            <template slot="title">
              <i class="el-icon-s-custom"></i>
              <span>个人信息</span>
            </template>

            <el-menu-item-group >
              <el-menu-item index="1-1"><i class="el-icon-view"></i>修改密码</el-menu-item>
              <el-menu-item index="1-2"><i class="el-icon-edit-outline"></i>个人信息</el-menu-item>
            </el-menu-item-group>

          </el-submenu>

          <el-submenu index="2">

            <template slot="title">
              <i class="el-icon-document"></i>
              <span>信息录入</span>
            </template>

            <el-menu-item-group>
              <el-menu-item index="2-1"><i class="el-icon-timer"></i>学生录入</el-menu-item>
              <el-menu-item index="2-2"><i class="el-icon-service"></i>老师录入</el-menu-item>
            </el-menu-item-group>

          </el-submenu>

        </el-menu>
      </el-aside>

      <el-main class="main">
        <router-view></router-view>
      </el-main>

    </el-container>
  </el-container>
</template>

<script>
import { logout } from '@/api/logout'
export default {
  name: "admgui",
  methods: {
    //退出
    signout() {
      this.$confirm("退出登录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        logout().then((res) =>{
          console.log(res.data)
          if(res.data.status == 1) {
            this.$message({
            showClose: true,
            message: res.data.data.msg,
            type: 'success'
            });
            this.$router.push('/');
          }
          else {
            this.$message({
            showClose: true,
            message: res.data.error_des,
            type: 'error'
            });
          }
        })
      });
    },
    handleSelect(path){
      //path为当前选中标签的index,之前的路径设置为叠加形式，这样的话在router中就能实现path不加/
      this.$router.push('/admgui/' + path).catch(err => {
        console.log('输出报错',err);
        console.log(path,'router.path')
})


    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.container {

  font-size: 15px;
  border-radius: 3px;
}
.header {
  background: #2C3E50;
  border-radius: 3px;
  color: #fff;
}
.aside {
  background: #3a3a3a;
  color: #fff;
  border-radius: 3px;
  width: 200px
  /* height: 100%; */
}
.main {
  /* height: 100%; */
  color: #212121;
  border-radius: 3px;
}
.headerlogo {
  line-height: 60px;
}
.rightsection {
  line-height: 60px;
  text-align: center;
}
.el-menu-vertical-demo {
  height: 100vh;
}
</style>
