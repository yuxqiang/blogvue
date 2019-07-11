<template>
    <div>
        index html
        <br/>
        <li>
        <input type="text" v-model="inputTxt">
        {{inputTxt}}
      </li>
    </div>
</template>

<script>
export default {
  name: 'index',

  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      inputTxt: '',
    }
  }
}
</script>

<style>

</style>
