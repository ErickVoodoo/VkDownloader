const path = require('path');
const webpack = require('webpack');
const appPackage = require('./package.json');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const stylelint = require('stylelint');

const publicFolderName = '.public';
const localhost = 'http://localhost:' + appPackage.devServerPort + '/';

module.exports = {
  entry: [
    'webpack-dev-server/client?' + localhost,
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    './src/index.jsx',
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
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint-loader'],
        include: path.join(__dirname, 'src'),
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: [
          'react-hot-loader/webpack',
          'babel',
        ],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.(html)$/,
        loaders: [
          'file?name=[name].[ext]',
        ],
      },
      {
        test: /\.(scss)$/,
        loaders: [
          'style',
          'css?sourceMap&modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]',
          'postcss',
        ],
      },
    ],
  },
  postcss: [
    stylelint,
    autoprefixer({ browsers: ['> 7%'] }),
    precss,
  ],
  eslint: {
    configFile: './.eslintrc',
    emitWarning: true,
  },
};
