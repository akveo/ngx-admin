import {
  ROLLUP_GLOBALS,
  getLicenseBanner,
} from './rollup.config.common';

const globals = Object.assign({}, ROLLUP_GLOBALS, {
  'immutable': 'immutable',
});

const banner = getLicenseBanner('@nga/theme', '../../lib/theme/package.json');

export default {
  context: 'this',
  external: Object.keys(globals),
  globals,
  moduleName: 'nga.theme',
  entry: 'lib/theme/index.js',
  dest: 'lib/theme/bundles/theme.umd.js',
  banner,
  format: 'umd',
  moduleId: '',
}
