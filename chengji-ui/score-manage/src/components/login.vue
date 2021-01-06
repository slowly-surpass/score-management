<template>
  <div class="login" >
    <div class="bk">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form">
      <h3 class="title">学生成绩管理系统</h3>

      <el-form-item label='请选择身份' prop='identify'>
        <el-select v-model="loginForm.identify" placeholder="请选择" >
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
          type="text"
          auto-complete="off"
          placeholder="账号">
          <svg-icon slot="prefix" icon-class="user" class="el-input__icon input-icon" />
        </el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          type="password"
          auto-complete="off"
          placeholder="密码"
          @keyup.enter.native="handleLogin"
        >
          <el-icon-user-solid slot="prefix" icon-class="password" class="el-input__icon input-icon" />
        </el-input>

      </el-form-item>

      <el-form-item >
        <el-button
          :loading="loading"
          size="medium"
          type="primary"
          @click.native.prevent="handleLogin"
        >
          <span v-if="!loading">登 录</span>
          <span v-else>登 录 中...</span>
        </el-button>
      </el-form-item>
    </el-form>

    <!--  底部  -->
    <div class="el-login-footer">
      <span>Copyright © 2021-2035 score-management All Rights Reserved.</span>
    </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Login",

  data() {
    return {

      loginForm: {
        username: "admin",
        password: "admin123",
        identify: "",
      },

      //添加一个登陆的身份，判断是老师还是学生
      options: [{
        value: '选项1',
        label: '学生'
      },{
        value: '选项2',
        label: '老师'
      },{
        value: '选项3',
        label: '管理员',
      }
      ],

      loginRules: {
        username: [
          { required: true, trigger: "blur", message: "用户名不能为空" }
        ],
        password: [
          { required: true, trigger: "blur", message: "密码不能为空" }
        ],
        code: [{ required: true, trigger: "change", message: "验证码不能为空" }]
      },

      loading: false,
      redirect: undefined
    };
  },


  //页面加载的时候就先执行获取二维码的操作以及获取登录名和密码的操作，从cookie中拿到登录信息
  created() {

  },

  methods: {
    //获取验证
    //点击登录按钮开始实现登录功能
    handleLogin() {
          //请求接口之后跳转页面
    }
  }
};

</script>

<style lang="less" scoped>
.bk {
  background-image: url("../assets/images/login-background.jpg");
  // border: 100px solid transparent;
  background-size: cover;
  text-align: center;
  border-bottom: 145px solid tranparent;
}
.login-form {
  border-radius: 6px;
  background: #ffffff;
  display: inline-block;
  margin-top: 100px;
  width: 400px;
  padding: 25px 25px 5px 25px;
  .el-input {
    height: 38px;
    input {
      height: 38px;
    }
  }
  .input-icon {
    height: 39px;
    width: 14px;
    margin-left: 2px;
  }
}
.el-login-footer {
  margin-top: 50px;
  border-bottom: 159px solid transparent;
  color: white ;
}
</style>
