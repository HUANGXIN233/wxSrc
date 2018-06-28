<template>
  <div class="home">
    <div>{{name}}</div>

    <el-row class="demo-autocomplete">
      <el-col :span="12">
        <el-autocomplete
          @blur="newerr"
          class="inline-input"
          v-model="state2"
          :fetch-suggestions="querySearch"
          placeholder="输入幼儿园名称"
          :trigger-on-focus="false"
          @select="handleSelect"
        ></el-autocomplete>
      </el-col>
    </el-row>

    <el-row>
      <el-button type="primary" @click="longing">确认</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
name: 'Home',
  data(){
    return{
      name:'这是主页',
      restaurants: [],
      state2: '',
    }
  },
  methods: {
    newerr: function() {
      this.name='回调触发'
    },
    longing: function () {
      var that =this
      that.$router.push({path: '/longing'})
    },
      querySearch(queryString, cb) {
    var restaurants = this.restaurants;
    var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
    // 调用 callback 返回建议列表的数据
      cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
      },
         loadAll() {
     return[
      { "value": "金太阳幼儿园"},
     ]
   }
  },
      mounted() {
      this.restaurants = this.loadAll();
    }
}

</script>

<style lang="less" scoped>
.home{
  color:red
}
</style>
