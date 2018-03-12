import { Component } from '@angular/core';

import * as L from 'leaflet';
import 'style-loader!leaflet/dist/leaflet.css';

import { EcMapService } from './ec-map.service';
import { Layer } from 'leaflet';

@Component({
  selector: 'ngx-ec-map',
  styleUrls: ['./ec-map.component.scss'],
  template: `
    <nb-card>
      <nb-card-header>Leaflet Maps</nb-card-header>
      <nb-card-body>
        <div leaflet [leafletOptions]="options" [leafletLayers]="layers"></div>
      </nb-card-body>
    </nb-card>
  `,
})
export class EcMapComponent {

  layers: Layer[] = [];

  constructor(private ecMapService: EcMapService) {

  this.ecMapService.getCords()
    .subscribe(cords => {
      this.layers.push(L.geoJSON(
        (cords) as any,
        {style: () => ({color: '#00d977'})}));
    });
  }

  options = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
    ],
    zoom: 5,
    center: L.latLng({ lat: 38.991709, lng: -76.886109 }),
  };
}
