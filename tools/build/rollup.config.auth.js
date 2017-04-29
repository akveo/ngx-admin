import {
  ROLLUP_GLOBALS,
  getLicenseBanner,
} from './rollup.config.common';

const globals = Object.assign({}, ROLLUP_GLOBALS, {
  'immutable': 'immutable',
});

const banner = getLicenseBanner('@nga/auth', '../../lib/auth/package.json');

export default {
  context: 'this',
  external: Object.keys(globals),
  globals,
  moduleName: 'nga.auth',
  entry: 'lib/auth/index.js',
  dest: 'lib/auth/bundles/auth.umd.js',
  banner,
  format: 'umd',
  moduleId: '',
}
