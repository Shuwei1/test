// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"
import $ from 'jquery'
import 'babel-polyfill'


// 页面通过 this.$http调用
Vue.prototype.$http = axios;
// 不启用生产环境
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
