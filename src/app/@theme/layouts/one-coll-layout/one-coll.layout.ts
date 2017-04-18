import { Component } from '@angular/core';

@Component({
  selector: 'one-coll-layout',
  template: `
    <nga-layout>
      <nga-layout-header fixed>
        <base-header></base-header>
      </nga-layout-header>

      <nga-sidebar>
        <nga-sidebar-content>
          <ng-content select="nga-menu"></ng-content>
        </nga-sidebar-content>
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
export class OneCollLayoutComponent {
}
