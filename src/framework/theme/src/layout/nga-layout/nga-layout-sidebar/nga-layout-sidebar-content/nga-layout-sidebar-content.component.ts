import { Component } from '@angular/core';

@Component({
  selector: 'nga-layout-sidebar-content',
  styleUrls: ['./nga-layout-sidebar-content.component.scss'],
  template: `
    <ng-content></ng-content>
  `,
})
export class NgaLayoutSidebarContentComponent {
}
