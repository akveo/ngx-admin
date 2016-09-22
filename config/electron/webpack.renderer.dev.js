const devConfig    = require('./../webpack.dev');
const commonConfig = require('./webpack.renderer.common');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(devConfig(), commonConfig(), {
});
