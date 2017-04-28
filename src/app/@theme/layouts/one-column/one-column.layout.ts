import { Component } from '@angular/core';

@Component({
  selector: 'one-column-layout',
  template: `
    <nga-layout>
      <nga-layout-header fixed>
        <base-header></base-header>
      </nga-layout-header>

      <nga-sidebar>
        <ng-content select="nga-menu"></ng-content>
      </nga-sidebar>

      <nga-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nga-layout-column>

      <nga-layout-footer fixed>
        <base-footer></base-footer>
      </nga-layout-footer>
    </nga-layout>
  `,
})
export class OneColumnLayoutComponent {
}
