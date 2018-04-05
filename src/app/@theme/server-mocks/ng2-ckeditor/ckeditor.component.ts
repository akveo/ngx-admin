import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ckeditor',
  template: '<ngx-loader></ngx-loader>',
})
export class CkeditorComponent {
  @Input() config;
}
