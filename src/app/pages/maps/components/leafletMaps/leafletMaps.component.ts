import {Component, ViewEncapsulation, ElementRef} from '@angular/core';
import {BaCard} from '../../../../theme/components';

import './leafletMaps.loader';

@Component({
  selector: 'leaflet-maps',
  pipes: [],
  providers: [],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./leafletMaps.scss')],
  template: require('./leafletMaps.html'),
  directives: [BaCard],
})
export class LeafletMaps {

  constructor(private _elementRef:ElementRef) {
  }

  ngAfterViewInit() {
    let el = this._elementRef.nativeElement.querySelector('.leaflet-maps');

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
