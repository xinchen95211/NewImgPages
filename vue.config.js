const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: false,
  devServer: {
    port:80,
    proxy: {
      '/api': {
        target: 'https://frp-hat.top:49728',
        // target:'http://192.168.0.108:9999',
        changeOrigin: true,
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

