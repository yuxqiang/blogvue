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
  name: 'index2'
}
</script>

<style>

</style>
