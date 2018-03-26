import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line
  selector: 'agm-marker',
  template: '',
})
export class AgmMarkerComponent {
  @Input()
  latitude;

  @Input()
  longitude;
}
