import {Component, ViewEncapsulation} from '@angular/core';
import {RouteConfig, Router} from '@angular/router-deprecated';
import {Subscription} from 'rxjs/Subscription';

import {Pages} from './pages';
import {ThemeGlobal} from "./theme";

// TODO: is it really the best place to globally require that dependency?
require("!style!css!sass!./theme/sass/_ionicons.scss");

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [],
  providers: [],
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

  private _themeGlobalSubscription:Subscription;

  constructor(private _themeGlobal:ThemeGlobal) {
    this._themeGlobalSubscription = this._themeGlobal.getDataStream().subscribe((data) => {
      this.isMenuCollapsed = data['menu.isCollapsed'] != null ? data['menu.isCollapsed'] : this.isMenuCollapsed;
    });
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this._themeGlobalSubscription.unsubscribe();
  }
}
