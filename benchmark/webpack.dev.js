var webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['./src/index.ts'],
  output: {
    path: __dirname,
    filename: './dist/index.js'
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  module: {
    rules: [{
      test: /\.ts$/, use: ['babel-loader', 'ts-loader'], exclude: /node_modules/
    }],
  },
  plugins: [
    // new webpack.IgnorePlugin(/ws/),
  ],
  node: {
    fs: 'empty'
  }
};
