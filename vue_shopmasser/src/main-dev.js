import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
// 导入依赖
import TreeTable from 'vue-table-with-tree-grid'
// 导入NProgress包 - 现实一个加载进度
import NProgress from 'nprogress'



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
// 在request拦截器中展示进度条 NProgress.start();
axios.interceptors.request.use(config => {
  // 展示进度条
  NProgress.start()
  // console.log(config)
  // 为请求头对象，添加Token验证的 Authorization 字段
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 在最后必须 return config
  return config
})

// 在response拦截器中 隐藏进度条 NProgress.done();
axios.interceptors.response.use(config => {
  // 隐藏进度条
  NProgress.done()
  return config
})

Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.component('tree-table',TreeTable)
// 全局注册富文本编辑器
Vue.use(VueQuillEditor)

// 定义一个全局的时间过滤器
Vue.filter('dateFormat', function(originVal) {
  const dt = new Date(originVal)

  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2,'0')
  const d = (dt.getDate() + '').padStart(2,'0')

  const hh = (dt.getHours() + '').padStart(2,'0')
  const mm = (dt.getMinutes() + '').padStart(2,'0')
  const ss = (dt.getSeconds() + '').padStart(2,'0')

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
