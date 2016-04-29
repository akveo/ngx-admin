import {Component, ViewEncapsulation} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';

import {Dashboard} from './dashboard';
import {PageTop, Sidebar} from '../theme';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'pages',
  encapsulation: ViewEncapsulation.None,
  styles: [],
  directives: [PageTop, Sidebar],
  template: `<sidebar [routes]="getRoutes()"></sidebar><page-top></page-top><router-outlet></router-outlet>`
})
@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    useAsDefault: true,
    data: {
      title: 'Dashboard',
      selected: true,
      expanded: true,
      sidebarMeta: {
        icon: 'ion-android-home',
        order: 0,
      }
    }
  },
])
export class Pages {

  private _routeConfig;

  constructor(private _router: Router) { }

  ngOnInit() { }

  getRoutes() {

    if (!this._routeConfig) {
      this._routeConfig = Reflect.getMetadata('annotations', this.constructor)
        .filter(a => {
          return a.constructor.name === 'RouteConfig';
        })
        .pop();
    }

    return this._routeConfig;
  }
}
