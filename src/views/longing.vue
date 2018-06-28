<template>
  <div class="longing">
    <div>这是密码登录页面</div>
    <el-input v-model="input" type="password" placeholder="请输入密码"></el-input>
    <el-row>
      <el-button type="success" >确定</el-button>
    </el-row>
        
       <el-button :plain="true" :showClose="true" @click="open2">确定</el-button>

  </div>
</template>

<script>
export default {
data() {
return{
  input:'123456',
}
},
methods: {
        open2() {
          if (this.input =="123456") {
            this.$message({
            message: '登录成功',
            type: 'success'
            })
            this.$router.push({path: '/recipes'})
          }
        }
}
}
</script>

<style>

</style>
