import {Component, ViewEncapsulation} from '@angular/core';
import {RouteConfig} from '@angular/router-deprecated';

import {Pages} from './pages';
import {AppState} from "./app.state";

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

  constructor(private _state:AppState) {

    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }
}
