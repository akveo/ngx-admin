import {Component, ViewEncapsulation} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';

import {PageTop, ContentTop, Sidebar} from '../theme';
import {Dashboard} from './dashboard';
import {Ui} from './ui';
import {Maps} from './maps';

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
  {
    name: 'Maps',
    component: Maps,
    path: '/maps/...',
  },
])
export class Pages {

  constructor() {
  }

  ngOnInit() {
  }
}
