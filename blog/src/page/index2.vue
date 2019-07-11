<template>
       <div>
        index2 html
  
 <br/>
        <li>
        <input type="text" v-model="inputTxt">
        {{inputTxt}}
      </li>

    <P><router-link to="/index">测试1</router-link>
</P>
<br/>
 <P><router-link to="/">主页</router-link>
</P>
  </div>
</template>

<script>
export default {
  name: 'index2',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App11111111',
      inputTxt: '',
      paras: {
        body: { 
          pageIndex: 11111,
          pageSize: 10
        }
      }
    }
  },
 
  created () {
    // headers: {'X-Requested-With': 'XMLHttpRequest'},
    this.$axios.post('/admin/getList', this.paras).then(res => {
      console.log(res, res.data.lists);
      this.inputTxt = res.data.data.lists[0].adminId;
    })
    console.log();
  }
}
</script>
 
<style>

</style>
