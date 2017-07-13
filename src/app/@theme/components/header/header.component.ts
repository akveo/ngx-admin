import { Component, OnInit } from '@angular/core';

import { NgaSidebarService, NgaMenuService } from '@akveo/nga-theme';
import { NgaThemeService } from '@akveo/nga-theme/services/theme.service';
import { UserService } from '../../../@core/data/users.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  template: `
    <div class="left">
      <a (click)="toggleSidebar()" href="#"><i class="control-icon ion ion-navicon"></i></a>
      <span class="logo" (click)="goToHome()">NgX&nbsp;<a>Admin</a></span>
      <div class="theme-buttons">
        <button class="btn btn-hero-primary" (click)="selectCosmicTheme()">Cosmic</button>
        <button class="btn btn-hero-warning" (click)="selectLightTheme()">Light</button>
        <button class="btn btn-hero-info" (click)="selectDefaultTheme()">Default</button>
      </div>
    </div>

    <nga-actions size="medium" class="right">
      <nga-action><nga-search type="rotate-layout"></nga-search></nga-action>
      <nga-action icon="ion-ios-email-outline"></nga-action>
      <nga-action disabled icon="ion-ios-bell-outline"></nga-action>
      <nga-action>
        <nga-user [menu]="userMenu" [name]="user?.name" [picture]="user?.picture"></nga-user>
      </nga-action>
      <nga-action icon="ion-ios-gear-outline"></nga-action>
    </nga-actions>
  `,
})
export class HeaderComponent implements OnInit {

  user: any;

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
              private themeService: NgaThemeService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe((users: any) => this.user = users.nick);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true);
    return false;
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
