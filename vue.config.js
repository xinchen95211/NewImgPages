const { defineConfig } = require('@vue/cli-service')

module.exports ={
  publicPath: '/',
}
module.exports = defineConfig({
  transpileDependencies: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://frp-hat.top:49728',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
    },
    client: {
      //当出现编译错误或警告时，在浏览器中是否显示全屏覆盖。  示例为只显示错误信息
      overlay: {
        runtimeErrors: false,
      },
    },

  },

})

