import { Component } from '@angular/core';

import { NgaSidebarService, NgaMenuService } from '@nga/theme';
import { NgaThemeService } from '@nga/theme/services/theme.service';

@Component({
  selector: 'base-header',
  styleUrls: ['./base-header.component.scss'],
  template: `
    <div class="left">
      <i class="control-icon ion ion-navicon" (click)="toggleSidebar()"></i>
      <span class="logo" (click)="goToHome()">NgX &nbsp; <a>Admin</a></span>
      <button (click)="switchTheme()">Switch Theme!</button>
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
              private menuService: NgaMenuService,
              private themeService: NgaThemeService) {
  }

  toggleSidebar() {
    this.sidebarService.toggle(true);
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  switchTheme() {
    if (this.themeService.currentTheme == 'pure') {
      this.themeService.changeTheme('gorgeous');
    } else {
      this.themeService.changeTheme('pure');
    }
  }
}
