import {Component, ViewEncapsulation} from '@angular/core';
import {RouteConfig} from '@angular/router-deprecated';

import {Typography} from './components/typography';

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
])
export class Ui {

  constructor() {
  }

  ngOnInit() {
  }

}
