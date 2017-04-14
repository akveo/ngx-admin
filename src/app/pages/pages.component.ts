import { Component } from '@angular/core';

import { List } from 'immutable';

import { menuItems } from './pages-menu';
import { NgaMenuItem } from '@nga/theme/components/menu/menu.options';

@Component({
  selector: 'pages',
  template: `
    <one-coll-layout>
      <nga-menu [menuItems]="menuItems"></nga-menu>
      <router-outlet></router-outlet>
    </one-coll-layout>
  `
})
export class PagesComponent {
  menuItems: List<NgaMenuItem> = menuItems;
}
