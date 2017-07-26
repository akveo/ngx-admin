import { Component } from '@angular/core';

// TODO: move layouts into the framework
@Component({
  selector: 'ngx-one-column-layout',
  styleUrls: ['./one-column.layout.scss'],
  template: `
    <nga-layout>
      <nga-layout-header fixed>
        <ngx-header></ngx-header>
      </nga-layout-header>

      <nga-sidebar responsive>
        <nga-sidebar-header>
          <button class="btn btn-hero-success main-btn">
            <i class="ion ion-social-github"></i> <span>Support Us</span>
          </button>
        </nga-sidebar-header>
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
