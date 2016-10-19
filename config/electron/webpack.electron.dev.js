const webpack             = require('webpack');
const webpackMerge        = require('webpack-merge');
const commonConfig        = require('./webpack.electron.common.js');
const WebpackShellPlugin  = require('./webpack-shell-plugin');

const ENV = process.env.NODE_ENV = process.env.ENV = 'development';

module.exports = webpackMerge(commonConfig, {
  plugins: [
    new WebpackShellPlugin({
      //TODO: Kill electron process before build, to start the new one fresh.
      onBuildStart: [''],
      onBuildEnd: ['electron dist']
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    })
  ]
});
