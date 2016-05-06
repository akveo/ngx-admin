import {Component, ViewEncapsulation, ElementRef} from 'angular2/core';
import {BaCard} from '../../../../theme/components';
import {DOM} from "angular2/src/platform/dom/dom_adapter";

@Component({
  selector: 'google-maps',
  pipes: [],
  providers: [],
  styles: [require('./googleMaps.scss')],
  directives: [BaCard],
  template: require('./googleMaps.html'),
})
export class GoogleMaps {

  constructor(private _elementRef:ElementRef) {
  }

  ngAfterViewInit() {
    let el = DOM.querySelector(this._elementRef.nativeElement, '.google-maps');

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
