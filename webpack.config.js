var path = require('path');

module.exports = {
  entry: ['whatwg-fetch', './src/index.js'],
  devtool: 'cheap-module-eval-source-map',
  target: 'web',
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loaders: ['babel']
      }
    ]
  }
};
