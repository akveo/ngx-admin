const helpers = require('./../helpers');
const webpack = require('webpack');

const METADATA = {
  title: 'ng2-admin - Angular 2 Admin Template',
  description: 'Free Angular 2 and Bootstrap 4 Admin Template',
  baseUrl: './',
  isDevServer: helpers.isWebpackDevServer(),
  ENV: 'renderer',
};

/*
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = {

  /*
   * Static metadata for index.html
   *
   * See: (custom attribute)
   */
  metadata: METADATA,

  /**
   * The plataform target where the aplication is going to run in.
   * It support target electron-renderer, but is not documented.
   *
   * See: https://webpack.github.io/docs/configuration.html#target
   */

  target: 'electron-renderer',

  /**
   * Options affecting the output of the compilation.
   *
   * See: http://webpack.github.io/docs/configuration.html#output
   */
  output: {

    /**
     * The output directory as absolute path (required).
     *
     * See: http://webpack.github.io/docs/configuration.html#output-path
     */
    path: helpers.root('build'),
  },

  /*
   * Include polyfills or mocks for various node stuff
   * Description: Node configuration
   *
   * See: https://webpack.github.io/docs/configuration.html#node
   */
  node: {
    global: 'window',
    crypto: 'empty',
    process: true,
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
};
