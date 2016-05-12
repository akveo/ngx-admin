import {Component, ViewEncapsulation} from '@angular/core';
import {RouteConfig} from '@angular/router-deprecated';

import {Typography} from './components/typography';
import {Buttons} from './components/buttons';

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
  }
])
export class Ui {

  constructor() {
  }

  ngOnInit() {
  }

}
