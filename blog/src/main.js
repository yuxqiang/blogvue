// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import axios from 'axios'; 
Vue.prototype.$axios = axios;
import QS from 'qs'
Vue.prototype.$qs = QS;
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:8080/blog';   //配置接口地址
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
