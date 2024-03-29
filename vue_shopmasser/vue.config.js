// webpack 配置对象
module.exports = {
    chainWebpack: config => {
        // 发布模式
        config.when(process.env.NODE_ENV === 'production', config => {
            config
            .entry('app')
            .clear()
            .add('./src/main-prod.js')
            // externals 优化第三方cdn资源
            config.set('externals', {
                vue: 'Vue',
                'vue-router': 'VueRouter',
                axios: 'axios',
                lodash: '_',
                
                echarts: 'echarts',
                nprogress: 'NProgress',
                'vue-quill-editor': 'VueQuillEditor'
            })
            config.plugin('html').tap(args => {
                args[0].isProd = true
                return args
            })
        })
        // 开发模式
        config.when(process.env.NODE_ENV === 'development', config => {
            config
            .entry('app')
            .clear()
            .add('./src/main-dev.js')

            config.plugin('html').tap(args => {
                args[0].isProd = false
                return args
            })
        })
    },
    css: {
        extract: false
    },
    build: {
        assetsPublicPath: './'
    }
};