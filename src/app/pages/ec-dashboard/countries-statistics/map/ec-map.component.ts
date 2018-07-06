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
  selectedCountry;

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
      mouseover: (e) => {
        this.highlightFeature(e.target)
      },
      mouseout: (e) => {
        this.moveout(e)
      },
      click: (e) => {
        this.selectFeature(e)
      },
    });
  }

  private highlightFeature(layer) {
    if (layer) {
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
  }

  private moveout(e) {
    const county = e.target;
    if (county !== this.selectedCountry) {
      this.resetHighlight(county);

      // When countries have common border we should highlight selected country once again
      this.highlightFeature(this.selectedCountry);
    }
  }

  private resetHighlight(feature) {
    if (feature) {
      const layer = this.layers[0];
      layer.resetStyle(feature);
    }
  }

  private selectFeature(e) {
    const country = e.target;

    if (country === this.selectedCountry) {
      this.resetHighlight(e);
      this.selectedCountry = null;
    } else {
      this.resetHighlight(this.selectedCountry);
      this.highlightFeature(country);
      this.selectedCountry = country;
    }
    this.selectedCategories = e.target.feature.properties.categories;
    this.selectedValues = e.target.feature.properties.values;
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

}
