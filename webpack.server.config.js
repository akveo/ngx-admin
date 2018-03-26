const { join } = require('path');
const webpack = require('webpack');

const srcPath = join(__dirname, 'src');
const distPath = join(__dirname, 'dist');
const mocksPath = join(srcPath, 'app/pages/server-mocks');

const noopMockPath = join(mocksPath, 'noop');
const leafletMockPath = join(mocksPath, 'ngx-leaflet/ngx-leaflet.module');
const ngCkeditorMockPath = join(mocksPath, 'ng2-ckeditor/ng2-ckeditor.module');
const ngxEchartMockPath = join(mocksPath, 'ngx-echarts/ngx-echarts.module');
const agmMock = join(mocksPath, 'agm/agm.module');
const chartjsMock = join(mocksPath, 'ng2-chartjs/ng2-chartjs.module');

module.exports = {
  entry: { server: './server.ts' },
  resolve: { extensions: ['.js', '.ts'] },
  target: 'node',
  externals: [/(node_modules|main\..*\.js)/],
  output: {
    path: distPath,
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  },
  plugins: [
    // Temporary Fix for issue: https://github.com/angular/angular/issues/11580
    // for "WARNING Critical dependency: the request of a dependency is an expression"
    new webpack.ContextReplacementPlugin(
      /(.+)?angular(\\|\/)core(.+)?/,
      srcPath,
      {}
    ),
    new webpack.ContextReplacementPlugin(
      /(.+)?express(\\|\/)(.+)?/,
      srcPath,
      {}
    ),
    new webpack.NormalModuleReplacementPlugin(
      /^@asymmetrik\/ngx-leaflet$/,
      leafletMockPath
    ),
    new webpack.NormalModuleReplacementPlugin(
      /^ng2-ckeditor$/,
      ngCkeditorMockPath
    ),
    new webpack.NormalModuleReplacementPlugin(
      /(^(ckeditor|leaflet)|ckeditor\.loader\.ts)$/,
      noopMockPath
    ),
    new webpack.NormalModuleReplacementPlugin(
      /^ngx-echarts$/,
      ngxEchartMockPath
    ),
    new webpack.NormalModuleReplacementPlugin(
      /^@agm\/core$/,
      agmMock
    ),
    new webpack.NormalModuleReplacementPlugin(
      /^angular2-chartjs$/,
      chartjsMock
    ),
  ]
}
