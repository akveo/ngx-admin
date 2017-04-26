import {
  ROLLUP_GLOBALS,
  BUILD_CONFIG,
  getLicenseBanner,
} from './rollup.config.common';

const globals = Object.assign({}, ROLLUP_GLOBALS, {
  'immutable': 'immutable',
});

const banner = getLicenseBanner('@nga/theme', '../../src/framework/theme/package.json');

export default {
  ...Object.assign({}, BUILD_CONFIG, {
    external: Object.keys(globals),
    globals,
    moduleName: 'nga.theme',
    entry: 'dist/theme/index.js',
    dest: 'dist/theme/bundles/theme.umd.js',
    banner,
  }),
}
