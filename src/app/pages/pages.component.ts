import {Component, ViewEncapsulation} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';

import {Dashboard} from './dashboard';
import {Ui} from './ui';
import {PageTop, Sidebar} from '../theme';

@Component({
  selector: 'pages',
  encapsulation: ViewEncapsulation.None,
  styles: [],
  directives: [PageTop, Sidebar],
  template: `<sidebar></sidebar><page-top></page-top><router-outlet></router-outlet>`
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
