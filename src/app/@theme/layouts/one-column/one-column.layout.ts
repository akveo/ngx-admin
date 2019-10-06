import { Component } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
@Component({
  selector: 'ngx-one-column-layout',
  styleUrls: ['./one-column.layout.scss'],
  template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <ngx-header></ngx-header>
      </nb-layout-header>
      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" (click)="clickMenu($event)" responsive>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>
      <nb-layout-column (click)="clickOutside()">
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>
      <nb-layout-footer fixed (click)="clickOutside()">
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
})
export class OneColumnLayoutComponent {

  constructor(
    private sidebarService: NbSidebarService) { }

  clickOutside() {
    this.sidebarService.toggle(true, 'menu-sidebar');
  }

  clickMenu(e) {
    if (e.target.className === 'menu-title') this.sidebarService.toggle(true, 'menu-sidebar');
  }
}
