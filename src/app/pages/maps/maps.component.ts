import {Component, ViewEncapsulation} from 'angular2/core';
import {RouteConfig} from 'angular2/router';

import {GoogleMaps} from './components/googleMaps';
import {LeafletMaps} from "./components/leafletMaps";

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
  {
    name: 'LeafletMaps',
    component: LeafletMaps,
    path: '/leaflet-maps',
  },
])
export class Maps {

  constructor() {
  }

  ngOnInit() {
  }

}
