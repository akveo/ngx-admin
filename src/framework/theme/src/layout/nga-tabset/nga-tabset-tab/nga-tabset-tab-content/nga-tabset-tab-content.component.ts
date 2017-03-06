import { Component } from '@angular/core';

@Component({
  selector: 'nga-tabset-tab-content',
  styleUrls: ['./nga-tabset-tab-content.component.scss'],
  template: `
    <ng-content></ng-content>
  `,
})
export class NgaTabsetTabContentComponent {
}
