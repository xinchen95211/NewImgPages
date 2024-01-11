const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://frp-hat.top:49728',
        // target:'http://192.168.0.108:9999',
        changeOrigin: true,
        secure:false,
        pathRewrite: {
          '^/api': ''
        }
      },
    },
    client: {
      overlay: {
        runtimeErrors: false,
      },
    },

  },
})
