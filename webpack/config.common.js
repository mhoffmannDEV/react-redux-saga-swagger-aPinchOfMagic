const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')

const configuration = require('../node/configuration')
const srcDir = path.resolve(__dirname, '../src')
const INDEX_HTML = configuration.INDEX_HTML
const withSourceMaps = true

const getCSSLoaderConfig = ({ isCSSModules }) => ({
  loader: 'css-loader',
  options: {
    sourceMap: withSourceMaps,
    ...(isCSSModules ? { modules: true } : {}),
    modules: {
      localIdentName: '[name]__[local]___[hash:base64:5]',
    },
  },
})
const getPostCSSLoader = () => ({
  loader: 'postcss-loader',
  options: {
    sourceMap: withSourceMaps,
    plugins: [autoprefixer],
  },
})
const getSASSLoader = () => ({
  loader: 'sass-loader',
  options: {
    sourceMap: withSourceMaps,
  },
})


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
    }, {
      test: /\.(scss|css)$/,
      exclude: /node_modules/,
      use: [
        'style-loader',
        getCSSLoaderConfig({ isCSSModules: true }),
        getPostCSSLoader(),
        'resolve-url-loader',
        getSASSLoader(),
      ],
    }, {
      test: /\.(scss|css)$/,
      exclude: /src/,
      use: [
        'style-loader',
        getCSSLoaderConfig({ isCSSModules: false }),
        getPostCSSLoader(),
        'resolve-url-loader',
        getSASSLoader(),
      ],
    }, {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/',
        },
      }],
    }],
  },
  output: { publicPath: '/' },
  resolve: {
    modules: [
      srcDir,
      'node_modules',
    ],
    extensions: ['.ts', '.tsx', '.js'],
  },
}
