import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'
import Home from '../components/home.vue'
import Welcome from '../components/Welcome.vue'
import User from '../components/user/user.vue'
import Rights from '../components/power/rights.vue'
import Roles from '../components/power/roles.vue'
import Cate from '../components/goods/cate.vue'
import Params from '../components/goods/params.vue'
import List from '../components/goods/list.vue'
import Add from '../components/goods/add.vue'
import Order from '../components/order/order.vue'
import Report from '../components/report/report.vue'

Vue.use(VueRouter)

const routes = [
  {
    // 重定位路由
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component : Login
  },
  {
    path: '/home',
    component : Home,
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        component: Welcome
      },
      {
        path: '/users',
        component: User
      },
      {
        path: '/rights',
        component: Rights
      },
      {
        path: '/roles',
        component: Roles
      },
      {
        path: '/categories',
        component: Cate
      },
      {
        path: '/params',
        component: Params
      },
      {
        path: '/goods',
        component: List,
      },
      {
        path: '/goods/add',
        component: Add
      },
      {
        path: '/orders',
        component: Order
      },
      {
        path: '/reports',
        component: Report
      }
  ]
  },
]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫 
router.beforeEach(( to, form, next ) => {
  // to 将要跳转的路径
  // form 从哪个路径跳转过来
  // next 是一个函数，表示方向 有两种表示方式
  // 1. next() - 表示放行   2. next('/***') 强制跳转到某个页面
  if(to.path === '/login') return next();
  // 获取token 检查是否有token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
