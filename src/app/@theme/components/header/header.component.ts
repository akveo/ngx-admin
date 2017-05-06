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
      <button (click)="switchTheme()">Switch Theme!</button>
    </div>
    
    <nga-actions size="medium" inverse class="right">
      <nga-action><ngx-search-input></ngx-search-input></nga-action>
      <nga-action icon="ion-ios-email-outline"></nga-action>
      <nga-action disabled icon="ion-ios-bell-outline"></nga-action>
      <nga-action>
        <nga-user [menu]="userMenu" name="Han Solo"></nga-user>
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

  switchTheme() {
    if (this.themeService.currentTheme == 'pure') {
      this.themeService.changeTheme('gorgeous');
    } else {
      this.themeService.changeTheme('pure');
    }
  }
}
