const prodConfig   = require('./../webpack.prod');
const commonConfig = require('./webpack.renderer.common');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(prodConfig(), commonConfig(), {
});
