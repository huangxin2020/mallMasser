import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入全局样式表
import './assets/css/global.css'
// 导入字体图标库
import '../src/assets/fonts/iconfont.css'

// 另一种使用axios发起数据请求的方式
import axios from 'axios'
// 在Vue的实例上绑定axios 这样每一个页面都可以 利用$http 这个方法来发送请求了
// 对axios进行一些配置 根路径的配置
axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
