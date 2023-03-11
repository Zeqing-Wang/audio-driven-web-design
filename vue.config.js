const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    historyApiFallback: true,
    allowedHosts: "all",
    //proxy: 'http://127.0.0.1:9090',
  }
})
