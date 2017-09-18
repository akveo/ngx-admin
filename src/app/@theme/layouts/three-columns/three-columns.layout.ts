import { Component } from '@angular/core';

// TODO: move layouts into the framework
@Component({
  selector: 'ngx-three-columns-layout',
  styleUrls: ['./three-columns.layout.scss'],
  template: `
    <nb-layout>
      <nb-layout-header fixed>
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive >
        <nb-sidebar-header>
          <a href="https://github.com/akveo/nebular" target="_blank" class="btn btn-hero-success main-btn">
            <i class="ion ion-social-github"></i> <span>Support Us</span>
          </a>
        </nb-sidebar-header>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column class="small">
      </nb-layout-column>

      <nb-layout-column right>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-column class="small">
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
})
export class ThreeColumnsLayoutComponent {
}
