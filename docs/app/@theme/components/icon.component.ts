import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-icon',
  template: `
    <i [innerHTML]="icon | eva: { width: 32, height: 32, fill: color }"></i>
  `,
})
export class NgxIconComponent {
  @Input() icon: string;
  @Input() color: string = '#00db92';
}
