import { Component } from '@angular/core';

@Component({
  selector: 'nga-tabset-tab-content',
  template: `
    <ng-content></ng-content>
  `,
})
export class NgaTabsetTabContentComponent {
}

@Component({
  selector: 'nga-tabset-tab-header',
  template: `
    <ng-content></ng-content>
  `,
})
export class NgaTabsetTabHeaderComponent {
}

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
