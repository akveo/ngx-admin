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
  template: `<sidebar [routes]="getRoutes()"></sidebar><page-top></page-top><router-outlet></router-outlet>`
})
@RouteConfig([
  {
    name: 'Dashboard',
    component: Dashboard,
    path: '/dashboard',
    useAsDefault: true,
    data: {
      title: 'Dashboard',
      selected: false,
      expanded: false,
      sidebarMeta: {
        icon: 'ion-android-home',
        order: 0,
      }
    }
  },
  {
    name: 'Ui',
    component: Ui,
    path: '/ui/...',
    data: {
      title: 'UI Features',
      selected: false,
      expanded: false,
      sidebarMeta: {
        icon: 'ion-android-laptop',
        order: 200,
      }
    }
  },
])
export class Pages {

  private _routeConfig;

  constructor(private _router:Router) {
  }

  ngOnInit() {
  }

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
