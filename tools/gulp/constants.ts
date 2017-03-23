import { join } from 'path';

export const THEME_VERSION = require('../../src/framework/theme/package.json').version;

export const PROJECT_ROOT = join(__dirname, '../..');
export const SOURCE_ROOT = join(PROJECT_ROOT, 'src');

export const DIST_ROOT = join(PROJECT_ROOT, 'dist');
export const THEME_DIST_ROOT = join(DIST_ROOT, '@nga/theme');

export const HTML_MINIFIER_OPTIONS = {
  collapseWhitespace: true,
  removeComments: true,
  caseSensitive: true,
  removeAttributeQuotes: false,
};

export const THEME_LICENSE_BANNER = `/**
  * @license @nga/theme v${THEME_VERSION}
  * Copyright (c) 2017 Akveo. https://github.com/akveo/ng2-admin/tree/ngx-admin/
  * License: MIT
  */`;

export const THEME_DIR = join(SOURCE_ROOT, 'framework/theme');
