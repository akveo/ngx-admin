import { AfterViewInit, Component, ElementRef } from '@angular/core';

import 'leaflet-map';

@Component({
  selector: 'leaflet-maps',
  styleUrls: ['./leaflet-maps.component.scss'],
  templateUrl: './leaflet-maps.component.html'
})
export class LeafletMapsComponent implements AfterViewInit {

  constructor(private _elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    const el: any = this._elementRef.nativeElement.querySelector('.leaflet-maps');

    L.Icon.Default.imagePath = 'assets/img/theme/vendor/leaflet';
    const map: any = L.map(el).setView([51.505, -0.09], 13);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();
  }
}
