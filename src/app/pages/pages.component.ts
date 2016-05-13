import {Component, ViewEncapsulation} from '@angular/core';
import {RouteConfig} from '@angular/router-deprecated';

import {PageTop, ContentTop, Sidebar} from '../theme/components';

import {Dashboard} from './dashboard';
import {Ui} from './ui';
import {Maps} from './maps';
import {Charts} from './charts';
import {Forms} from './forms';

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
    </div>
    <footer class="al-footer clearfix">
      <div class="al-footer-right">Created with <i class="ion-heart"></i></div>
      <div class="al-footer-main clearfix">
        <div class="al-copy">Blur Admin 2016</div>
        <ul class="al-share clearfix">
          <li><i class="socicon socicon-facebook"></i></li>
          <li><i class="socicon socicon-twitter"></i></li>
          <li><i class="socicon socicon-google"></i></li>
          <li><i class="socicon socicon-github"></i></li>
        </ul>
      </div>
    </footer>
    `
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
  {
    name: 'Charts',
    component: Charts,
    path: '/charts/...',
  },
  {
    name: 'Forms',
    component: Forms,
    path: '/forms/...',
  },
])
export class Pages {

  constructor() {
  }

  ngOnInit() {
  }
}
