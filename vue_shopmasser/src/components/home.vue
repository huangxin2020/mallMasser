<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
        <div>
            <img src="../assets/img/logo.png" alt="">
            <span>电商后台管理系统</span>
        </div>
        <el-button type="info" @click="loginOut">退出</el-button>
    </el-header>
    <!-- 页面主题区域 -->
    <el-container>
        <!-- 侧边栏 -->
        <el-aside :width="isCollapse ? '64px' : '200px'">
            <div class="toggle-button" @click="toggleCollapse">|||</div>
            <!-- 侧边栏菜单区域 -->
            <el-menu background-color="#008C8C"
                text-color="#fff"
                active-text-color="#ffd04b"
                unique-opened
                :collapse="isCollapse"
                :collapse-transition="false"
                router
                :default-active="activePath"
            >
                <!-- 一级菜单 -->
                <el-submenu v-for="item in menulist"
                :key="item.index"
                :index="item.id + ''"
                >
                    <!-- 一级菜单的模板区域 -->
                    <template slot="title">
                        <!-- 图标 -->
                        <i :class="iconsObj[item.id]"></i>
                        <!-- 文本 -->
                        <span>{{ item.authName }}</span>
                    </template>
                    <!-- 二级菜单 -->
                    <el-menu-item 
                    :index="'/' + subItem.path" 
                    v-for="subItem in item.children" 
                    :key="subItem.id" 
                    @click="saveNavState('/' + subItem.path)">
                        <template slot="title">
                            <!-- 图标 -->
                            <i class="el-icon-menu"></i>
                            <!-- 文本 -->
                            <span>{{subItem.authName}}</span>
                        </template>
                    </el-menu-item>
                </el-submenu>
            </el-menu>
        </el-aside>
        <!-- 右侧内容主体 -->
        <el-main>
            <!-- 路由占位符 -->
            <router-view></router-view>
        </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
        // 左侧菜单数据
        menulist: [],
        iconsObj: {
            '125': 'iconfont icon-user',
            '103': 'iconfont icon-tijikongjian',
            '101': 'iconfont icon-shangpin',
            '102': 'iconfont icon-danju',
            '145': 'iconfont icon-baobiao'
        },
        // 是否折叠
        isCollapse: false,
        // 被激活的链接地址
        activePath: ''
    }
  },
  created() {
    this.getMenuList()
    this.activePath = window.sessionStorage.getItem('activePath')
  },
  methods: {
    loginOut(){
        // 清空 sessionStorage
        window.sessionStorage.clear();
        // 回到登录页面
        this.$router.push('/login');
    },
    // 获取所有的菜单
    async getMenuList() {
      const { data: res } = await this.$http.get('menus')
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
      this.menulist = res.data
      // console.log(res)
    },
    // 点击按钮，切换菜单的折叠与展开
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    },
    // 保存链接的激活状态
    saveNavState(activePath) {
      window.sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
    }
  }
}
</script>
<style lang="less" scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: rgb(2,67,81);
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    img {
        width: 61px;
        height: 56px;
        padding-left: 10px
    }
    span {
      margin-left: 15px;
    }
  }
}

.el-aside {
//   background-color: #333744;
  background-color: #008C8C;
  .el-menu {
    border-right: none;
  }
}
.el-main {
  background-color: #eaedf1;
}

.iconfont {
  margin-right: 10px;
}

.toggle-button {
  background-color: rgb(2,90,108);
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>
