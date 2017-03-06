import { Component } from '@angular/core';

@Component({
  selector: 'nga-tabset',
  styleUrls: ['./nga-tabset.component.scss'],
  template: `
    <ng-content></ng-content>
    <ng-content select="ng-tabset-tab"></ng-content>
  `,
})
export class NgaTabsetComponent {
}
