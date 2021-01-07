<template>
  <el-alert
    title="申诉情况查看"
    type="info"
    :description="item.description"
    show-icon>
  </el-alert>
</template>

<script>
export default {
  name: 'a3',

  data() {

    return {
      item: [
        {
        id: 1,
        total: 500,
        description: "截至到目前为止，一共收到"+ total + "条申诉",
        }
    ]
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

