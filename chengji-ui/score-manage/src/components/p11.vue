<template>
  <el-form
    status-icon
    ref="passForm"
    label-width="80px"
    class="demo-ruleForm"
  >
    <el-form-item label="旧密码" prop="old">
      <el-input v-model="old" placeholder="请输入旧密码" show-password></el-input>
    </el-form-item>
    <el-form-item label="新密码" prop="new">
      <el-input v-model="newp" placeholder="请输入新密码" show-password></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="check">
      <el-input v-model="check" placeholder="请确认密码" show-password></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="ok">确定</el-button>
        <el-button @click="cancel">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    
    name: 'p11',

    data() {
      return {
        old: '',
        newp: '',
        check: ''
      }
    },
    methods: {
      ok(){},
      cancel(){}
    }
  }
</script>

<style lang="less" scoped>
  .el-input{
    width: 400px;
  }
</style>
