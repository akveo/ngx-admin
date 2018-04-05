import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'agm-map',
  template: '<ngx-loader></ngx-loader>',
})
export class AgmComponent {
  @Input() latitude;
  @Input() longitude;
  @Input() scrollwheel;
  @Input() zoom;
}
