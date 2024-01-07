const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'htto://localhost:8888',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/dowenload': {
        target: 'https://yaoyao.dynv6.net',
        changeOrigin: true,
        pathRewrite: {
          '^/dowenload': ''
        }
      },
    },

    client: {
      //当出现编译错误或警告时，在浏览器中是否显示全屏覆盖。  示例为只显示错误信息
      overlay: {
        runtimeErrors: false,
      },
    },


  }
})

