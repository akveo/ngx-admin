const helpers           = require('./../helpers');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    'main': './src/desktop.ts'
  },

  target: 'electron',

  node: {
    __dirname: false
  },

  output: {
    path: helpers.root('build'),
    filename: '[name].js'
  },

  resolve: {
    extensions: ['', '.ts', '.js', '.json']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },

  plugins: [
    new CopyWebpackPlugin([{
      from: 'src/package.json'
    }])
  ]
}
