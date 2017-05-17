/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { InjectionToken } from '@angular/core';
import { List } from 'immutable';

export interface NgaMenuItem {
  title: string;
  link?: string;
  url?: string;
  icon?: string;
  expanded?: boolean;
  children?: List<NgaMenuItem>;
  target?: string;
  hidden?: boolean;
  pathMath?: string;
  home?: boolean;
  group?: boolean;
  parent?: NgaMenuItem;
  selected?: boolean;
  data?: any;
}

export interface NgaMenuOptions {
  items?: List<NgaMenuItem>;
}

export const ngaMenuOptionsToken = new InjectionToken<NgaMenuOptions>('NGA_MENU_OPTIONS');
