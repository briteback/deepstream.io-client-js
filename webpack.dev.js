var webpack = require('webpack');

module.exports = {
  entry: ['./src/deepstream.ts'],
  output: {
    path: __dirname,
    filename: './dist/deepstream.js',
    library: 'deepstream',
    libraryTarget: 'commonjs2',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  mode: 'production',
  module: {
    rules: [{
      test: /\.ts$/,
      use: [
        { loader: 'babel-loader' },
        {
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfigESM.json'
          }
        },
      ],
      exclude: /node_modules/
    }],
  },
  plugins: [
    // new webpack.IgnorePlugin(/ws/),
  ],
  optimization: {
    concatenateModules: true,
    minimize: false
  },
  node: {
    fs: 'empty',
    module: 'empty'
  }
};
