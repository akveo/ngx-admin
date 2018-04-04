import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'agm-marker',
  template: '',
})
export class AgmMarkerComponent {
  @Input()
  latitude;

  @Input()
  longitude;
}
