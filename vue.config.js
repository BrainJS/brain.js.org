const CnameWebpackPlugin = require('cname-webpack-plugin')

// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      new CnameWebpackPlugin({
        domain: 'brain.js.org',
      }),
    ],
  },
  publicPath: './',
  filenameHashing: false,
  productionSourceMap: false,
}
