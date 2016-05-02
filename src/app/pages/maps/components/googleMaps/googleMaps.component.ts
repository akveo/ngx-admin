import {Component, ViewEncapsulation, ElementRef} from 'angular2/core';
import {BaCard} from '../../../../theme';
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

  ngOnInit() {
  }

  ngAfterViewInit() {
    GoogleMapsLoader.load((google) => {
      new google.maps.Map(DOM.querySelector(this._elementRef.nativeElement, '.google-maps'), {
        center: new google.maps.LatLng(44.5403, -78.5463),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
    });
  }
}
