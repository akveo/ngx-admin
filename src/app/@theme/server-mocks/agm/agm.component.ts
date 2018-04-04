import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'agm-map',
  template: '',
})
export class AgmComponent {
  @Input() latitude;
  @Input() longitude;
  @Input() scrollwheel;
  @Input() zoom;
}
