import { Component } from '@angular/core';

@Component({
  selector: 'nga-layout',
  styleUrls: ['./nga-layout.component.scss'],
  template: `
    <ng-content select="nga-layout-sidebar"></ng-content>
    <ng-content select="nga-layout-content"></ng-content>
  `,
})
export class NgaLayoutComponent {
}
