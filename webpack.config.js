const path = require('path');
const webpack = require('webpack');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['', '.scss', '.css', '.js', '.json'],
    modulesDirectories: [
      'node_modules',
      path.resolve(__dirname, './node_modules/')
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('react-toolbox.css', { allChunks: true }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?sourceMap&modules&importLoaders=1&localIdentName=[path][name]---[local]---[hash:base64:5]!postcss-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader?sourceMap&modules&importLoaders=1&localIdentName=[path][name]---[local]---[hash:base64:5]!postcss-loader!sass'
      }
    ]
  },
  postcss: function() {
    return [precss, autoprefixer]
  },
  sassLoader: {
    data: '@import "' + path.resolve(__dirname, 'src/theme/_config.scss') + '";'
  },
};
