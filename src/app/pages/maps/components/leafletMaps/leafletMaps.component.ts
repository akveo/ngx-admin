import {Component, ViewEncapsulation, ElementRef} from 'angular2/core';
import {BaCard} from '../../../../theme/components';
import {DOM} from "angular2/src/platform/dom/dom_adapter";

@Component({
  selector: 'leaflet-maps',
  pipes: [],
  providers: [],
  // otherwise maps won't work
  encapsulation: ViewEncapsulation.None,
  styles: [require('leaflet/dist/leaflet.css'), require('./leafletMaps.scss')],
  directives: [BaCard],
  template: require('./leafletMaps.html'),
})
export class LeafletMaps {

  constructor(private _elementRef:ElementRef) {
  }

  ngAfterViewInit() {
    let el = DOM.querySelector(this._elementRef.nativeElement, '.leaflet-maps');

    L.Icon.Default.imagePath = 'assets/img/theme/vendor/leaflet';
    var map = L.map(el).setView([51.505, -0.09], 13);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();
  }
}
