// 这是项目发布阶段需要用到的 babel 插件
const prodPlugins = []
if (process.env.NODE_ENV === 'production') {
  prodPlugins.push('transform-remove-console')
}
module.exports = {
  "presets": [
    "@vue/cli-plugin-babel/preset"
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ],
    // 发布产品时候的插件数组
    ...prodPlugins,
    // 路由的懒加载 把路由的各个组件分成小段 到路由跳转到的时候 加载出相应的组件
    ["@babel/plugin-syntax-dynamic-import"]
  ]
}