const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const configuration = require('../node/configuration')
const srcDir = path.resolve(__dirname, '../src')
const INDEX_HTML = configuration.INDEX_HTML


module.exports = {
  entry: {
    app: './src/index.tsx',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: `./${INDEX_HTML}`,
      template: `./src/${INDEX_HTML}`,
    }),
  ],
  module: {
    rules: [{
      test: /\.(ts|tsx)?$/,
      include: srcDir,
      use: [{
        loader: 'ts-loader',
      }],
    }],
  },
  resolve: {
    modules: [
      srcDir,
      'node_modules',
    ],
    extensions: ['.ts', '.tsx', '.js'],
  },
}
