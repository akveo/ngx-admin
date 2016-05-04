import {Component, ViewEncapsulation} from 'angular2/core';
import {RouteConfig} from 'angular2/router';

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
