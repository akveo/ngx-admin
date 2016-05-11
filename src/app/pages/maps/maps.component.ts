import {Component, ViewEncapsulation} from '@angular/core';
import {RouteConfig} from '@angular/router-deprecated';

import {GoogleMaps} from './components/googleMaps';
import {LeafletMaps} from "./components/leafletMaps";
import {BubbleMaps} from "./components/bubbleMaps";
import {LineMaps} from "./components/lineMaps";

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
  {
    name: 'BubbleMaps',
    component: BubbleMaps,
    path: '/bubble-maps',
  },
  {
    name: 'LineMaps',
    component: LineMaps,
    path: '/line-maps',
  },
])
export class Maps {

  constructor() {
  }

  ngOnInit() {
  }

}
