<template>
  <el-card class="box-card">
    <div v-for="item in stuinfo" :key="item.id" class="text item">
      {{ item.type + ":" + item.detail }}
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
          detail: this.stuname,
        },
        {
          id: 2,
          type: '学号',
          detail: this.sno,
        },
        {
          id: 3,
          type: '学院',
          detail: this.college,
        },
        {
          id: 4,
          type: '专业',
          detail: this.pro,
        },
        {
          id: 5,
          type: '班级',
          detail: this.class,
        }
      ]

    }
  },
  created() {
    //调取接口获取数据
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
