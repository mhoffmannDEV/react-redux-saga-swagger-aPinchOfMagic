const commonConfig = require('./config.common.js')


module.exports = require('webpack-merge')(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: { historyApiFallback: true },
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
  },
})
