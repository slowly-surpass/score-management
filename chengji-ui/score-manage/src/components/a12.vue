<template>
  <el-card class="box-card">
    <div v-for="item in stuinfo" :key="item.id" class="text item">
      {{ item.type + ":" + item.detail }}
    </div>
  </el-card>
</template>

<script>

import { userinfo } from '@/api/userinfo'

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
          type: '工号',
          detail: this.userid,
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
    userinfo().then(
      res => {
        console.log(res.data.data.user_info,'个人信息');
        if(res.data.status == 1) {
          this.$message({
          showClose: true,
          message: '恭喜你，获取个人信息成功',
          type: 'success'
        });
        let nd = res.data.data.user_info[0]
        this.$set(this.stuinfo[0],'detail',nd.name)
        this.$set(this.stuinfo[1],'detail',nd.userid)
        this.$set(this.stuinfo[2],'detail',nd.tel)
      }
      else {
          this.$message({
            showClose: true,
            message: res.data.error_des,
            type: 'error'
          });
        }
    })
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
