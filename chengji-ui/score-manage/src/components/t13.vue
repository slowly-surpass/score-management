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
  name: 't13',
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
          type: '性别',
          detail: this.sex,
        },
        {
          id: 3,
          type: '工号',
          detail: this.tno,
        },
        {
          id: 4,
          type: '学院',
          detail: this.college,
        },
        {
          id: 5,
          type: '联系方式',
          detail: this.pro,
        },
        {
          id: 6,
          type: '邮箱',
          detail: this.email,
        }
      ]

    }
  },
  created() {
    //调取接口获取数据赋值给this.什么什么
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
        this.$set(this.stuinfo[1],'detail',nd.sex)
        this.$set(this.stuinfo[2],'detail',nd.userid)
        this.$set(this.stuinfo[3],'detail',nd.college)
        this.$set(this.stuinfo[4],'detail',nd.tel)
        this.$set(this.stuinfo[5],'detail',nd.email)
        }
       })
    },
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
