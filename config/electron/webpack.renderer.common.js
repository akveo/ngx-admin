const helpers = require('./../helpers');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const METADATA = {
  baseUrl: './',
  ENV: 'renderer'
};

/*
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = function (env) {
  METADATA.ENV = env
    ? env
    : METADATA.ENV;

  return {

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
      path: helpers.root('build')
    },

    /*
    * Include polyfills or mocks for various node stuff
    * Description: Node configuration
    *
    * See: https://webpack.github.io/docs/configuration.html#node
    */
    node: {
      global: true,
      crypto: 'empty',
      process: true,
      module: false,
      clearImmediate: false,
      setImmediate: false
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        title: METADATA.title,
        chunksSortMode: 'dependency',
        metadata: METADATA,
        inject: 'head'
      })
    ]
  };
};
