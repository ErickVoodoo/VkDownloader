var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var precss = require('precss');
var path = require("path");
var stylelint = require('stylelint');
var appPackage = require('./package.json');

var publicFolderName = ".public";
var localhost = "http://localhost:" + appPackage.devServerPort + "/";

var apiUrl = process.env.META_API_URL || appPackage.apiUrl;
var recaptchaKey = process.env.META_RECAPTCHA_KEY || appPackage.recaptchaKey;

module.exports = {
  entry: [
    'webpack-dev-server/client?' + localhost,
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    './src/app/index',
  ],
  resolve: {
    extensions: ['', '.js', '.json', '.jsx', '.scss'],
  },
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: {
      index: localhost
    }
  },
  output: {
    path: __dirname + '/' + publicFolderName,
    publicPath: localhost,
    filename: 'application.js',
  },
  node: {
    fs: 'empty'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"development"'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: appPackage.appName,
      template: './src/index.ejs',
    }),
  ],
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint-loader'],
        include: path.join(__dirname, 'src'),
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: [
          'babel',
        ],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(scss)$/,
        loaders: ['style',
                  'css?sourceMap&modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]',
                  'postcss'
                ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        exclude: /(static)/,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ],
      },
      {
        test: /\.(png|svg)$/,
        include: /(static)/,
        loaders: [
          'file?name=[path][name].[ext]&context=./src/',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ],
      },
      {
        test: /(\.css)$/,
        include: /(static)/,
        loaders: [
          'file?name=[path][name].[ext]&context=./src/',
          'postcss'
        ],
      },
      {
        test: /\.(html)$/,
        loaders: [
          'file?name=[name].[ext]'
        ]
      },
      {
        test   : /\.(ttf|eot|svg|woff|otf|json)(\?[a-z0-9]+)?$/,
        exclude: /(static)/,
        loader : 'file'
      }
    ]
  },
  postcss: [
    stylelint,
    autoprefixer({ browsers: ['> 7%'] }),
    precss
  ],
  eslint: {
    configFile: './.eslintrc',
    emitWarning: true,
  }
};
