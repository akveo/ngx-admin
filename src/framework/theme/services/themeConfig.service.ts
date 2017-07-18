/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Inject, Injectable, Type } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/publish';

import { ngaThemeOptionsToken } from '../theme.options';

// TODO: move to theme config
const builtInThemes = [
  {
    name: 'default',
    base: null,
    variables: {
      fontMain: 'SegoeUI',
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
      colorBg: '#white',
      colorFg: '#2f3234',
    },
  },
];
// TODO rename it to themeRegistry or smth similar as currently it overlaps with theme options
@Injectable()
export class NgaThemeConfig {

  private themes: any = {};

  constructor() {
    builtInThemes.forEach((theme: any) => {
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

  get(themeName: string): any {
    if (!this.themes[themeName]) {
      throw Error(`NgaThemeConfig: no theme '${themeName}' found registered.`);
    }
    return Object.assign({}, this.themes[themeName]);
  }
}
