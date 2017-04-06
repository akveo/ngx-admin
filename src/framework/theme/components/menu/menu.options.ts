/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { List } from 'immutable';

export class NgaMenuItem {
  title: string;
  link?: string;
  url?: string;
  icon?: string;
  expanded?: boolean = false;
  selected?: boolean = false;
  children?: List<NgaMenuItem>;
  target?: string;
  hidden?: boolean = false;
  parent?: NgaMenuItem;
}

export class NgaMenuModuleConfig {
  menuItems: List<NgaMenuItem>;
}
