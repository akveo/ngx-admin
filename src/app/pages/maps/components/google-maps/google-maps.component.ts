import { AfterViewInit, Component, ElementRef } from '@angular/core';

import * as GoogleMapsLoader from 'google-maps';

@Component({
  selector: 'google-maps',
  styleUrls: ['./google-maps.component.scss'],
  templateUrl: './google-maps.component.html',
})
export class GoogleMapsComponent implements AfterViewInit {

  constructor(private _elementRef: ElementRef) { }

  ngAfterViewInit() {
    const el: any = this._elementRef.nativeElement.querySelector('.google-maps');

    // TODO: do not load this each time as we already have the library after first attempt
    GoogleMapsLoader.load((google) => {
      new google.maps.Map(el, {
        center: new google.maps.LatLng(44.5403, -78.5463),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
    });
  }
}
