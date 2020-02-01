<template>
  <div class="login_container">
    <div class="login_box">
        <!-- 头像区域 -->
        <div class="avatar_box">
            <img src="../assets/img/touxiang.jpg" alt="">
        </div>
        <!-- 登录表单区域 -->
        <el-form :model="loginForm" label-width="0px" 
        :rules="loginFormRules" ref="loginFormRef"
        class="login_form" >
            <!-- 用户名 -->
            <el-form-item prop="username">
                <el-input v-model="loginForm.username" prefix-icon="iconfont icon-user"></el-input>
            </el-form-item>
            <!-- 密码 -->
            <el-form-item prop="password">
                <el-input v-model="loginForm.password" prefix-icon="iconfont icon-3702mima"
                    type="password"
                ></el-input>
            </el-form-item>

            <!-- 按钮区域 -->
            <el-form-item class="btns">
                <el-button type="primary" @click="checkLogin">登录</el-button>
                <el-button type="info" @click="resetLoginFrom">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
  </div>
</template>

<script>
export default {
    name:'login',
    data(){
        return {
            // 绑定的登录表单数据对象
            loginForm : {
                username: 'admin',
                password: '123456'
            },
            // 表单的简单验证规则
            loginFormRules : {
                // 验证账号
                username : [
                    { required: true, message: '请输入登录名称', trigger: 'blur' },
                    { min: 3, max: 10, message: '长度在 3 到 10 个字符之间', trigger: 'blur' }
                ],
                // 验证密码
                password : [
                    { required: true, message: '请输入登录密码', trigger: 'blur' },
                    { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        // 点击重置表单
        resetLoginFrom(){
            this.$refs.loginFormRef.resetFields()            
        },
        // 表单的预验证
        checkLogin() {
            this.$refs.loginFormRef.validate(async valid => {
                if (!valid) return
                // axios是一个基于promise的请求方式 使用await(只能用到使用了async的方法中)可以简化这次操作
                const { data: res } = await this.$http.post('login', this.loginForm)
                // console.log(res);
                if (res.meta.status !== 200) {
                    // 使用message弹框
                    return this.$message.error('登录失败！')
                }
                this.$message.success('登录成功')
                // 1. 将登录成功之后的 token，保存到客户端的 sessionStorage 中
                // 之所以保存token到 sessionStorage 而不是localStorge 
                // 是因为 localStorge 是持久化的存储机制 而 sessionStorage 是会话期间的存储机制
                // 1.1 项目中出了登录之外的其他API接口，必须在登录之后才能访问
                // 1.2 token 只应在当前网站打开期间生效，所以将 token 保存在 sessionStorage 中
                window.sessionStorage.setItem('token', res.data.token)
                // 2. 通过编程式导航跳转到后台主页，路由地址是 /home
                this.$router.push('/home')
            })
        }
    }
}
</script>

<style lang="less" coped>
 .login_container{
    // background-color: #2b4b6b;
    background-color: #008C8C;
    height: 100%;
 }
 .login_box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    //移动的距离是根据 自身的宽高来决定的
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
 }

 .login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
 }

 .btns {
    display: flex;
    justify-content: flex-end;
 }
</style>