import {Component, ViewEncapsulation} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';
import {Subscription} from 'rxjs/Subscription';

import {SidebarStateService} from './theme/sidebar/sidebarState.service';

import {Pages} from './pages';

// TODO: is it really the best place to globally require that dependency?
require("!style!css!sass!./theme/sass/_ionicons.scss");

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [],
  providers: [SidebarStateService],
  encapsulation: ViewEncapsulation.None,
  styles: [require('normalize.css'), require('./app.scss')],
  template: `
    <main [ngClass]="{'menu-collapsed': isMenuCollapsed}">
      <router-outlet></router-outlet>
    </main>
  `
})
@RouteConfig([
  {
    path: '/pages/...',
    name: 'Pages',
    component: Pages,
    useAsDefault: true
  },
])
export class App {

  isMenuCollapsed:boolean = false;

  private _sidebarStateSubscription:Subscription;

  constructor(private _sidebarStateService:SidebarStateService) {
    this._sidebarStateSubscription = this._sidebarStateService.getStateStream().subscribe((isCollapsed) => this.isMenuCollapsed = isCollapsed);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this._sidebarStateSubscription.unsubscribe();
  }
}
