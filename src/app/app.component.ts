/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';

import {Pages} from './pages';

// TODO: is it really the best place to globally require that dependency?
require("!style!css!sass!./theme/sass/_ionicons.scss");

  /*
   * App Component
   * Top Level Component
   */
@Component({
  selector: 'app',
  pipes: [ ],
  providers: [ ],
  encapsulation: ViewEncapsulation.None,
  styles: [ require('normalize.css'), require('./app.scss') ],
  template: `
    <header>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>


    <footer>
    </footer>
  `
})
@RouteConfig([
  {
    path: '/...',
    name: 'Pages',
    component: Pages,
    useAsDefault: true
  },
])
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor() {}

  ngOnInit() {
    console.log('Initial App State');
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
