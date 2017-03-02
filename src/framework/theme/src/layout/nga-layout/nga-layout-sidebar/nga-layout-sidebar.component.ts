import { Component } from '@angular/core';

/**
 * Component intended to be used within  the `<nga-layout>` component.
 * It adds styles for a preset body section.
 */
@Component({
  selector: 'nga-layout-sidebar',
  styleUrls: ['./nga-layout-sidebar.component.scss'],
  template: `<ng-content></ng-content>`,
})
export class NgaLayoutSidebarComponent {
}
