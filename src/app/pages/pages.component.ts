import { Component } from '@angular/core';

import 'style-loader!../@theme/styles/styles.scss';
import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-sample-layout>
      <nga-menu [items]="menu"></nga-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent {

  menu = MENU_ITEMS;
}
