import { Component } from '@angular/core';

import { NgaSidebarService, NgaMenuService } from '@nga/theme';
import { NgaThemeService } from '@nga/theme/services/theme.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  template: `
    <div class="left">
      <i class="control-icon ion ion-navicon" (click)="toggleSidebar()"></i>
      <span class="logo" (click)="goToHome()">NgX&nbsp;<a>Admin</a></span>
      <div class="theme-buttons">
        <button class="btn btn-hero-primary" (click)="selectCosmicTheme()">Cosmic</button>
        <button class="btn btn-hero-warning" (click)="selectLightTheme()">Light</button>
        <button class="btn btn-hero-info" (click)="selectDefaultTheme()">Default</button>
      </div>
    </div>

    <nga-actions size="medium" inverse class="right">
      <nga-action><nga-search type="rotate-layout"></nga-search></nga-action>
      <nga-action icon="ion-ios-email-outline"></nga-action>
      <nga-action disabled icon="ion-ios-bell-outline"></nga-action>
      <nga-action>
        <nga-user inverse [menu]="userMenu" name="Han Solo"></nga-user>
      </nga-action>
      <nga-action icon="ion-ios-gear-outline"></nga-action>
    </nga-actions>
  `,
})
export class HeaderComponent {

  userMenu = [
    {
      title: 'Profile',
    },
    {
      title: 'Log out',
    },
  ];

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

  selectCosmicTheme() {
    this.themeService.changeTheme('cosmic');
  }

  selectLightTheme() {
    this.themeService.changeTheme('light');
  }

  selectDefaultTheme() {
    this.themeService.changeTheme('default');
  }
}
