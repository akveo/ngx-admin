/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Inject, Injectable } from '@angular/core';

import 'rxjs/add/operator/publish';

import { ngaBuiltInJSThemesToken, ngaJSThemesToken } from '../theme.options';

/**
 * Js Theme - theme variables accessible from angular components/services
 */
export interface NgaJSTheme {
  name: string;
  base?: string;
  variables?: NgaJSThemeVariable;
}

export interface NgaJSThemeVariable {
  [key: string]: string;
}

export const BUILT_IN_THEMES: NgaJSTheme[] = [
  {
    name: 'default',
    base: null,
    variables: {
      fontMain: 'Open Sans',
      fontSecondary: 'Exo',

      colorBg: '#edf1f7',
      colorFg: '#d1d1ff',
      colorFgHeading: '#828282',
      colorFgHint: '#a1a1e5',
      colorFgHighlight: '#00f9a6',
      separator: '#d1d1ff',

      colorGray: 'rgba(81, 113, 165, 0.15)',
      colorNeutral: 'transparent',
      colorWhite: '#ffffff',
      colorDisabled: 'rgba(255, 255, 255, 0.4)',

      colorPrimary: '#a48aff',
      colorSuccess: '#00e172',
      colorInfo: '#4e9fff',
      colorWarning: '#e5c742',
      colorDanger: '#ff666d',

      layoutBg: '#edf1f7',
    },
  },
  {
    name: 'cosmic',
    base: 'default',
    variables: {
      colorBg: '#3d3780',
      colorFg: '#a1a1e5',
      colorFgHeading: '#ffffff',

      separator: '#342e73',

      colorGray: 'rgba(81, 113, 165, 0.15)',
      colorNeutral: 'transparent',
      colorWhite: '#ffffff',

      colorPrimary: '#7659ff',
      colorSuccess: '#00d977',
      colorInfo: '#0088ff',
      colorWarning: '#eae95f',
      colorDanger: '#ff386a',

      layoutBg: '#2c2961',
    },
  },
  {
    name: 'light',
    base: 'default',
    variables: {
      colorBg: 'white',
      colorFg: '#2f3234',
    },
  },
];

/**
 * Js Themes registry - provides access to the JS themes' variables.
 */
@Injectable()
export class NgaJSThemesRegistry {

  private themes: any = {};

  constructor(@Inject(ngaBuiltInJSThemesToken) private builtInThemes: NgaJSTheme[],
              @Inject(ngaJSThemesToken) private newThemes: NgaJSTheme[] = []) {

    builtInThemes.forEach((theme: any) => {
      this.register(theme.variables, theme.name, theme.base);
    });

    newThemes.forEach((theme: any) => {
      this.register(theme.variables, theme.name, theme.base);
    });
  }

  register(config: any, themeName: string, baseTheme: string) {
    const base = this.has(baseTheme) ? this.get(baseTheme) : {};
    this.themes[themeName] = Object.assign({}, base, config);
  }

  has(themeName: string): boolean {
    return !!this.themes[themeName];
  }

  // TODO: probable return a full theme to give access to `name` and `base` parameters
  get(themeName: string): NgaJSThemeVariable {
    if (!this.themes[themeName]) {
      throw Error(`NgaThemeConfig: no theme '${themeName}' found registered.`);
    }
    return Object.assign({}, this.themes[themeName]);
  }
}
