import { Component } from '@angular/core';

@Component({
  selector: 'one-coll-layout',
  template: `
    <nga-layout>
      <nga-layout-header fixed></nga-layout-header>
      <nga-sidebar fixed></nga-sidebar>
      <nga-layout-column>
        <ng-content></ng-content>
      </nga-layout-column>
      <nga-layout-footer fixed></nga-layout-footer>
    </nga-layout>
  `,
})
export class RootLayoutComponent {
  constructor() { }
}
