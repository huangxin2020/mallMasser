import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入依赖
import TreeTable from 'vue-table-with-tree-grid'
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
// 通过axios请求拦截器添加Token，保证拥有获取数据的权限
axios.interceptors.request.use(config => {
  // console.log(config)
  // 为请求头对象，添加Token验证的 Authorization 字段
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 在最后必须 return config
  return config
})

Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.component('tree-table',TreeTable)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
