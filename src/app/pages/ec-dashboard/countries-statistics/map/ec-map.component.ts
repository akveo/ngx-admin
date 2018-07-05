import { Component, OnDestroy } from '@angular/core';

import * as L from 'leaflet';
import 'style-loader!leaflet/dist/leaflet.css';

import { EcMapService } from './ec-map.service';
import { NbThemeService } from '@nebular/theme';
import { combineLatest } from 'rxjs';
import { takeWhile } from 'rxjs/operators';


@Component({
  selector: 'ngx-ec-map',
  styleUrls: ['./ec-map.component.scss'],
  template: `
    <div leaflet [leafletOptions]="options" [leafletLayers]="layers" (leafletMapReady)="mapReady($event)"></div>
  `,
})
export class EcMapComponent implements OnDestroy {

  selectedCategories: string[];
  selectedValues: number[];
  layers = [];
  currentTheme: any;
  alive = true;

  options = {
    zoom: 3,
    minZoom: 2,
    maxZoom: 6,
    zoomControl: false,
    center: L.latLng({lat: 38.991709, lng: -76.886109}),
  };

  constructor(private ecMapService: EcMapService,
              private theme: NbThemeService) {

    combineLatest([
      this.ecMapService.getCords(),
      this.theme.getJsTheme(),
    ])
      .pipe(takeWhile(() => this.alive))
      .subscribe(([cords, config]: [any, any]) => {
        this.currentTheme = config.variables.countriesStatistics;
        this.layers.push(this.createGeoJsonLayer(cords));

      });
  }


  mapReady(map: L.Map) {
    map.addControl(L.control.zoom({position: 'bottomright'}));
  }

  private createGeoJsonLayer(cords) {
    return L.geoJSON(
      (cords) as any,
      {
        style: () => ({color: this.currentTheme.countryBorderColor}),
        onEachFeature: (f, l) => {
          this.onEachFeature(f, l)
        },
      })
  }

  private onEachFeature(feature, layer) {
    layer.on({
      mouseover: this.highlightFeature.bind(this),
      mouseout: (e) => {
        this.resetHighlight(e)
      },
      click: (e) => {
        this.selectFeature(e)
      },
    });
  }

  private highlightFeature(e) {
    const layer = e.target;

    layer.setStyle({
      weight: 4,
      color: this.currentTheme.hoveredCountryColor,
      fillColor: this.currentTheme.countryBorderColor,
      dashArray: '',
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
    this.selectedCategories = e.target.feature.properties.categories;
    this.selectedValues = e.target.feature.properties.values;
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

}
