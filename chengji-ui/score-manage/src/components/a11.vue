<template>
<div>
  <h3>修改密码</h3>
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="旧密码" prop="old">
      <el-input type="password" v-model="ruleForm.old" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="新密码" prop="newp">
      <el-input type="password" v-model="ruleForm.newp" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="check">
      <el-input v-model.number="ruleForm.check"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
  export default {
    name: 'a11',
    data() {
      var old = (rule, old, callback) => {
        if (!old) {
          return callback(new Error('密码不能为空'));
        }
      };
      var validatenewp = (rule, newp, callback) => {
        if (newp === '') {
          callback(new Error('请输入新密码'));
        } else {
          if (this.ruleForm.newp !== '') {
            this.$refs.ruleForm.validateField('newp');
          }
          callback();
        }
      };
      var validatecheck = (rule, check, callback) => {
        if (check === '') {
          callback(new Error('请再次输入新密码'));
        } else if (check !== this.ruleForm.newp) {
          callback(new Error('两次输入的更改密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          old: '',
          newp: '',
          check: ''
        },
        rules: {
          old: [
            { validator: old, trigger: 'blur' }
          ],
          newp: [
            { validator: validatenewp, trigger: 'blur' }
          ],
          check: [
            { validator: validatecheck, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('修改密码成功!');
            //并调取接口返回数据

          } else {
            console.log('修改密码失败!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style lang="less" scoped>
  .el-input{
    width: 400px;
  }
</style>
