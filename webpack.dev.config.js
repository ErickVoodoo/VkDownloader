var path = require("path");
var webpack = require("webpack");
var appPackage = require('./package.json');

var publicFolderName = ".public";
var localhost = "http://localhost:" + appPackage.devServerPort + "/";

module.exports = {
  entry: [
    'webpack-dev-server/client?' + localhost,
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    './src/index.js',
  ],
  resolve: {
    extensions: ['', '.js', '.json', '.jsx', '.scss'],
  },
  output: {
    path: __dirname + '/' + publicFolderName,
    publicPath: localhost,
    filename: 'application.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: [
          'react-hot-loader/webpack',
          'babel',
        ],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(html)$/,
        loaders: [
          'file?name=[name].[ext]'
        ]
      },
      {
        test: /\.(scss)$/,
        loaders: [
          'style',
          'css?sourceMap&modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]',
          'postcss'
        ]
      },
    ],
  }
}
