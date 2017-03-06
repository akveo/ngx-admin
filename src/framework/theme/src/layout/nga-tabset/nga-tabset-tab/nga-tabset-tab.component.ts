import { Component } from '@angular/core';

@Component({
  selector: 'nga-tabset-tab',
  styleUrls: ['./nga-tabset-tab.component.scss'],
  template: `
    <ng-content></ng-content>
    <ng-content select="nga-tabset-tab-header"></ng-content>
    <ng-content select="nga-tabset-tab-content"></ng-content>
  `,
})
export class NgaTabsetTabComponent {
}
