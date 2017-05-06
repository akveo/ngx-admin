import { Component } from '@angular/core';

@Component({
  selector: 'ngx-one-column-layout',
  template: `
    <nga-layout>
      <nga-layout-header fixed>
        <ngx-header></ngx-header>
      </nga-layout-header>

      <nga-sidebar>
        <ng-content select="nga-menu"></ng-content>
      </nga-sidebar>

      <nga-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nga-layout-column>

      <nga-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nga-layout-footer>
    </nga-layout>
  `,
})
export class OneColumnLayoutComponent {
}
