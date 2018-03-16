import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';

import * as L from 'leaflet';

@Component({
  selector: 'ngx-leaflet',
  styleUrls: ['./leaflet.component.scss'],
  template: `
    <nb-card>
      <nb-card-header>Leaflet Maps</nb-card-header>
      <nb-card-body>
        <div leaflet [leafletOptions]="options"></div>
      </nb-card-body>
    </nb-card>
  `,
})
export class LeafletComponent {

  leafletReady = false;
  options;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    if (isPlatformServer(platformId)) {
      return;
    }

    this.options = {
      layers: [
        L.tileLayer(
          'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          { maxZoom: 18, attribution: '...' },
        ),
      ],
      zoom: 5,
      center: L.latLng({ lat: 38.991709, lng: -76.886109 }),
    };
  }
}
