<template>
    <div>
        index html
        <img src="static/logo.png" alt="">
        <br/>
        <li>
        <input type="text" v-model="inputTxt">
        {{inputTxt}}
      </li>


 <P><router-link to="/index2">测试2</router-link>
</P>
<br/>
 <P><router-link to="/">主页</router-link>
</P>
<br/>
<router-link to="/default">新的页面</router-link>
    </div>
</template>

<script>
export default {
  name: 'index',

  data () {
    return {
      msg: 'Welcome to Your Vue.js App11111111',
      inputTxt: '',
    }
  }
}
</script>

<style>

</style>
