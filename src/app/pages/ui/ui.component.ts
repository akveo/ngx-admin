import {Component} from '@angular/core';
import {RouteConfig} from '@angular/router-deprecated';

import {Typography} from './components/typography';
import {Buttons} from './components/buttons';
import {Icons} from './components/incons';
import {Grid} from './components/grid';

@Component({
  selector: 'ui',
  pipes: [],
  providers: [],
  styles: [],
  template: `<router-outlet></router-outlet>`
})
@RouteConfig([
  {
    name: 'Typography',
    component: Typography,
    path: '/typography',
    useAsDefault: true
  },
  {
    name: 'Buttons',
    component: Buttons,
    path: '/buttons',
  },
  {
    name: 'Icons',
    component: Icons,
    path: '/icons',
  },
  {
    name: 'Grid',
    component: Grid,
    path: '/grid',
  }
])
export class Ui {

  constructor() {
  }
}
