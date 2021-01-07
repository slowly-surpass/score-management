<template>
  <el-alert
    title="申诉情况查看"
    type="info"
    description="截止到目前为止，您的申诉情况如下"
    show-icon>
  </el-alert>
</template>

<script>
export default {
  name: 'a3',

  data() {

    return {

    }

  },

  create() {
    this.total = this.$root.total
  }

}
</script>

<style>
.top{
text-align:center;
}

