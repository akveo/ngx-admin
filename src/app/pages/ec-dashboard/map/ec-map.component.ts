import {Component} from '@angular/core';

import * as L from 'leaflet';
import 'style-loader!leaflet/dist/leaflet.css';

import {EcMapService} from './ec-map.service';

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

  layers = [];

  options = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18, attribution: '...'}),
    ],
    zoom: 5,
    center: L.latLng({lat: 38.991709, lng: -76.886109}),
  };

  constructor(private ecMapService: EcMapService) {
    this.ecMapService.getCords()
      .subscribe(cords => {
        this.layers.push(this.createGeoJsonLayer(cords));
      });
  }

  private createGeoJsonLayer(cords) {
    return L.geoJSON(
      (cords) as any,
      {
        style: () => ({color: '#00d977'}),
        onEachFeature: (f, l) => { this.onEachFeature(f, l) },
      })
  }

  private onEachFeature(feature, layer) {
    layer.on({
      mouseover: this.highlightFeature,
      mouseout: (e) => { this.resetHighlight(e) },
      click: this.selectFeature,
    });
  }

  private highlightFeature(e) {
    const layer = e.target;

    layer.setStyle({
      weight: 5,
      color: '#3d6636',
      dashArray: '',
      fillOpacity: 0.7,
    });

    if (!L.Browser.ie && !L.Browser.opera12 && !L.Browser.edge) {
      layer.bringToFront();
    }
  }

  private resetHighlight(e) {
    const layer = this.layers[0];
    layer.resetStyle(e.target);
  }

  private selectFeature(e) {
  }

}
