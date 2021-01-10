<template>
  <el-card class="box-card">
    <div v-for="item in stuinfo" :key="item.id" class="text item">
      {{ item.type + "：" + item.detail }}
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'p13',
  data() {
    return {
      stuinfo : [
        {
          id: 1,
          type: '姓名',
          detail: '',
        },
        {
          id: 2,
          type: '学号',
          detail: '',
        },
        {
          id: 3,
          type: '学院',
          detail: '',
        },
        {
          id: 4,
          type: '专业',
          detail: '',
        },
        {
          id: 5,
          type: '班级',
          detail: '',
        }
      ]
    }
  },
  created() {
    this.stuinfo[0].detail = this.$root.stuname
    this.stuinfo[1].detail = this.$root.sno
    this.stuinfo[2].detail = this.$root.college
    this.stuinfo[3].detail = this.$root.pro
    this.stuinfo[4].detail = this.$root.class
  }
}
</script>

<style>
  .text {
    font-size: 16px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
</style>
