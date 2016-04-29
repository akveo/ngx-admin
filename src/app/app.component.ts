/*
 * Angular 2 decorators and services
 */
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
   * TODO: whey the header and footer are not implemented?
   */
@Component({
  selector: 'app',
  pipes: [ ],
  providers: [SidebarStateService],
  encapsulation: ViewEncapsulation.None,
  styles: [ require('normalize.css'), require('./app.scss') ],
  template: `
    <header>
    </header>

    <main [ngClass]="{'menu-collapsed': isMenuCollapsed}">
      <router-outlet></router-outlet>
    </main>


    <footer>
    </footer>
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
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';
  isMenuCollapsed: boolean = false;

  private _sidebarStateSubscription: Subscription;

  constructor(private _sidebarStateService:SidebarStateService) {
    this._sidebarStateSubscription = this._sidebarStateService.getStateStream().subscribe((isCollapsed) => this.isMenuCollapsed = isCollapsed);
  }

  ngOnInit() {
    console.log('Initial App State');
  }

  ngOnDestroy(){
    // prevent memory leak when component destroyed
    this._sidebarStateSubscription.unsubscribe();
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
