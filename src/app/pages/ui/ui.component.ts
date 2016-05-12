import {Component} from '@angular/core';
import {RouteConfig} from '@angular/router-deprecated';

import {Typography} from './components/typography';
import {Buttons} from './components/buttons';
import {Icons} from './components/incons';

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
  }
])
export class Ui {

  constructor() {
  }
}
