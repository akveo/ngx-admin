import './app.loader.ts';

import {Component, ViewEncapsulation} from '@angular/core';
import {RouteConfig} from '@angular/router-deprecated';

import {Pages} from './pages';
import {Login} from './pages/login';
import {Register} from './pages/register';
import {AppState} from './app.state';
import {BaThemeConfigProvider, BaThemeConfig} from './theme';
import {BaThemeRun} from './theme/directives';
import {BaImageLoaderService, BaThemePreloader, BaThemeSpinner} from './theme/services';

import {layoutPaths} from './theme/theme.constants';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [],
  directives: [BaThemeRun],
  providers: [BaThemeConfigProvider, BaThemeConfig, BaImageLoaderService, BaThemeSpinner],
  encapsulation: ViewEncapsulation.None,
  styles: [require('normalize.css'), require('./app.scss')],
  template: `
    <main [ngClass]="{'menu-collapsed': isMenuCollapsed}" baThemeRun>
      <div class="additional-bg"></div>
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
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  // handle any non-registered route
  // and simply redirects back to dashboard page
  // you can specify any customer 404 page while it's not built in ito ng2-admin
  {
    path: '/**',
    redirectTo: ['Pages']
  }
])
export class App {

  isMenuCollapsed:boolean = false;

  constructor(private _state:AppState, private _imageLoader:BaImageLoaderService, private _spinner:BaThemeSpinner, private _config:BaThemeConfig) {
    this._loadImages();

    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public ngAfterViewInit():void {
    // hide spinner once all loaders are completed
    BaThemePreloader.load().then((values) => {
      this._spinner.hide();
    });
  }

  private _loadImages():void {
    // register some loaders
    BaThemePreloader.registerLoader(this._imageLoader.load(layoutPaths.images.root + 'sky-bg.jpg'));
  }
}
