const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

const config = {
  output: {
    path: path.resolve(__dirname + '/dist/'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: __dirname,
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: 'vue',
      },
      {
        test: /\.css$/,
        loader: 'style!less!css',
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: false,
      mangle: true,
      compress: {
        warnings: false,
      },
    }),
  ],
};

module.exports = [
  merge(config, {
    entry: path.resolve(__dirname + '/src/plugin.js'),
    output: {
      filename: 'vue3-pagination.min.js',
      libraryTarget: 'window',
      library: 'Vue3Pagination',
    },
  }),
  merge(config, {
    entry: path.resolve(__dirname + '/src/VPagination.vue'),
    output: {
      filename: 'vue3-pagination.js',
      libraryTarget: 'umd',
      library: 'vue3-pagination',
      umdNamedDefine: true,
    },
  }),
];
