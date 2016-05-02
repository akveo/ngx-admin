import {Component, ViewEncapsulation} from 'angular2/core';
import {RouteConfig} from 'angular2/router';

import {GoogleMaps} from './components/googleMaps';

@Component({
  selector: 'maps',
  pipes: [],
  providers: [],
  styles: [],
  template: `<router-outlet></router-outlet>`
})
@RouteConfig([
  {
    name: 'GoogleMaps',
    component: GoogleMaps,
    path: '/google-maps',
    useAsDefault: true
  },
])
export class Maps {

  constructor() {
  }

  ngOnInit() {
  }

}
