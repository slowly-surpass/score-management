<template>
  <el-card class="box-card">
    <div v-for="item in stuinfo" :key="item.id" class="text item">
      {{ item.type + ":" + item.detail }}
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'a12',
  data() {
    return {
      stuinfo : [
        {
          id: 1,
          type: '姓名',
          detail: this.admname,
        },
        {
          id: 2,
          type: '邮箱',
          detail: this.email,
        },
        {
          id: 3,
          type: '联系电话',
          detail: this.phone,
        },

      ]

    }
  },
  created() {
    //调取接口获取数据
    this.admname = this.$root.admname
    this.phone = this.$root.phone
    this.email = this.$root.email
  }
}
</script>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
</style>
