import { Component } from '@angular/core';

@Component({
  selector: 'nga-sidebar-header',
  template: `
    <ng-content></ng-content>
  `,
})
export class NgaSidebarHeaderComponent {
}

@Component({
  selector: 'nga-sidebar-content',
  template: `
    <ng-content></ng-content>
  `,
})
export class NgaSidebarContentComponent {
}

@Component({
  selector: 'nga-sidebar-footer',
  template: `
    <ng-content></ng-content>
  `,
})
export class NgaSidebarFooterComponent {
}

@Component({
  selector: 'nga-sidebar',
  styleUrls: ['./nga-sidebar.component.scss'],
  template: `<ng-content></ng-content>`,
})
export class NgaSidebarComponent {
}
