import {Component, ViewEncapsulation} from 'angular2/core';

@Component({
  selector: 'google-maps',
  pipes: [],
  providers: [],
  styles: [],
  template: 'googleMaps'
})
export class GoogleMaps {

  constructor() {
  }

  ngOnInit() {
    console.log('googleMaps');
  }

}
