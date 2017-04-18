import { Component } from '@angular/core';

import { NgaSidebarService } from '@nga/theme/components/sidebar/sidebar.service';

@Component({
  selector: 'base-header',
  styleUrls: ['./base-header.component.scss'],
  template: `
    <div class="left">
      <i class="control-icon ion ion-navicon" (click)="toggleSidebar()"></i>
      <a href="/#/pages/dashboard" class="logo">NgX <span>Admin</span></a>
    </div>
    <div class="right">
      <search-input></search-input>
      <i class="control-icon ion ion-ios-email-outline"></i>
      <i class="control-icon ion ion-ios-bell-outline"></i>
      <nga-user></nga-user>
      <i class="control-icon ion ion-ios-gear-outline"></i>
    </div>
  `
})
export class BaseHeaderComponent {
  constructor(private sidebarService: NgaSidebarService) {
  }

  toggleSidebar() {
    this.sidebarService.toggle(true);
  }
}
