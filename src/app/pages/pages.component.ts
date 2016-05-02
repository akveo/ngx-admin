import {Component, ViewEncapsulation} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';

import {Dashboard} from './dashboard';
import {Ui} from './ui';
import {PageTop, ContentTop, Sidebar} from '../theme';

@Component({
  selector: 'pages',
  encapsulation: ViewEncapsulation.None,
  styles: [],
  directives: [PageTop, Sidebar, ContentTop],
  template: `
    <sidebar></sidebar>
    <page-top></page-top>
    <div class="al-main">
      <div class="al-content">
        <content-top></content-top>
        <router-outlet></router-outlet>
      </div>
    </div>`
})
@RouteConfig([
  {
    name: 'Dashboard',
    component: Dashboard,
    path: '/dashboard',
    useAsDefault: true,
  },
  {
    name: 'Ui',
    component: Ui,
    path: '/ui/...',
  },
])
export class Pages {

  constructor() {
  }

  ngOnInit() {
  }
}
