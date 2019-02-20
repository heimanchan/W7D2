const path = require('path');

module.exports = {
  entry: './frontend/todo.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascript'),
    filename: './bundle.js'
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.js', '.jsx', '*']
  },

  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      }
    ]
  },
};