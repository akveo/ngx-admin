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

      // TODO: fill in the colors
      colorBg: '#3d3780',
      colorFg: '#a1a1e5',
      colorFgHeading: '#3d3780',
      layoutBg: '#a1a1e5',
      separator: '#342e73',

      colorGray: 'rgba(81, 113, 165, 0.15)',

      colorPrimary: '#7659ff',
      colorSuccess: '#00d977',
      colorInfo: '#0088ff',
      colorWarning: '#eae95f',
      colorDanger: '#ff386a',
    },
  },
  {
    name: 'cosmic',
    base: 'default',
    variables: {
      colorBg: '#3d3780',
      colorFg: '#a1a1e5',
      colorFgHeading: '#ffffff',
      layoutBg: '#2c2961',
      separator: '#342e73',

      colorGray: 'rgba(81, 113, 165, 0.15)',

      colorPrimary: '#7659ff',
      colorSuccess: '#00d977',
      colorInfo: '#0088ff',
      colorWarning: '#eae95f',
      colorDanger: '#ff386a',
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

    const themes = this.combineNewOld(newThemes, builtInThemes);

    themes.forEach((theme: any) => {
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

  private combineNewOld(newThemes: NgaJSTheme[], oldThemes: NgaJSTheme[]): NgaJSTheme[] {
    if (newThemes) {
      const mergedThemes: NgaJSTheme[] = [];
      newThemes.forEach((theme: NgaJSTheme) => {
        const sameOld: NgaJSTheme = oldThemes.find((tm: NgaJSTheme) => tm.name === theme.name) || <NgaJSTheme>{};

        theme.variables = Object.assign({}, sameOld.variables, theme.variables);
        mergedThemes.push(theme);
      });

      oldThemes.forEach((theme: NgaJSTheme) => {
        if (!mergedThemes.find((tm: NgaJSTheme) => tm.name === theme.name)) {
          mergedThemes.push(theme);
        }
      });
      return mergedThemes;
    }
    return oldThemes;
  }
}
