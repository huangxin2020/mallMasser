import Vue from 'vue'
// 因为创建的时候是 按需导入element组件 需要在使用时也需要按照需求导入
// 导入弹框提示组件
import { Button ,Form ,FormItem ,Input ,Message } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
// 挂载到vue的原型上
Vue.prototype.$message = Message
