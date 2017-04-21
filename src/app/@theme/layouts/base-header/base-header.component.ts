import { Component } from '@angular/core';

import { NgaSidebarService, NgaMenuService } from '@nga/theme';

@Component({
  selector: 'base-header',
  styleUrls: ['./base-header.component.scss'],
  template: `
    <div class="left">
      <i class="control-icon ion ion-navicon" (click)="toggleSidebar()"></i>
      <span class="logo" (click)="goToHome()">NgX &nbsp; <span>Admin</span></span>
    </div>
    <div class="right">
      <search-input></search-input>
      <i class="control-icon ion ion-ios-email-outline"></i>
      <i class="control-icon ion ion-ios-bell-outline"></i>
      <nga-user></nga-user>
      <i class="control-icon ion ion-ios-gear-outline"></i>
    </div>
  `,
})
export class BaseHeaderComponent {
  constructor(private sidebarService: NgaSidebarService,
              private menuService: NgaMenuService) {
  }

  toggleSidebar() {
    this.sidebarService.toggle(true);
  }

  goToHome() {
    this.menuService.navigateHome();
  }
}
