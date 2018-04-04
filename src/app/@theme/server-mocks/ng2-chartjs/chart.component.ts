import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'chart',
  template: '',
})
export class ChartComponent {
  @Input() type;
  @Input() data;
  @Input() options;
}
