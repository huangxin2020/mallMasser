import Vue from 'vue'
// 因为创建的时候是 按需导入element组件 需要在使用时也需要按照需求导入
// 导入弹框提示组件
import { 
    Button ,Form ,FormItem ,Input ,Message ,Container ,Header ,Aside ,Main 
    ,Menu ,Submenu ,MenuItem ,Breadcrumb ,BreadcrumbItem ,Card ,Row ,Col ,Table
    ,TableColumn ,Switch ,Pagination ,Dialog ,Tooltip
} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Tooltip)

// 挂载到vue的原型上
Vue.prototype.$message = Message
