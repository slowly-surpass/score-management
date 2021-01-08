<template>
<div>
  <el-alert
    title="学习情况"
    type="info"
    description="截止到目前为止，您的学习情况如下所示"
    show-icon>
  </el-alert>
  <div ref='mychart' style="width: 600px;height: 400px"></div>
</div>
</template>

<script>
export default {
  name: 'p3',

  data() {

    return {

    }

  },
mounted() {
  this.setChart()
  }
}
</script>

<style>
.top{
text-align:center;
}

