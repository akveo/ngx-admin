import { Component, Input, OnInit } from '@angular/core';

import { NgaMenuService, NgaSidebarService } from '@akveo/nga-theme';
import { NgaThemeService } from '@akveo/nga-theme/services/theme.service';
import { UserService } from '../../../@core/data/users.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  template: `
    <div class="header-container" [class.left]="position === 'normal'" [class.right]="position === 'inverse'">
      <a (click)="toggleSidebar()" href="#" class="navigation"><i class="ion-navicon"></i></a>
      <div class="logo" (click)="goToHome()">NgX&nbsp;<span>Admin</span></div>
      <div class="theme-buttons">
        <button class="btn btn-hero-primary" (click)="selectCosmicTheme()">Cosmic</button>
        <button class="btn btn-hero-warning" (click)="selectLightTheme()">Light</button>
        <button class="btn btn-hero-info" (click)="selectDefaultTheme()">Default</button>
      </div>
    </div>

    <nga-actions
      size="medium"
      class="header-container"
      [class.right]="position === 'normal'"
      [class.left]="position === 'inverse'">
      <nga-action icon="ion-ios-gear-outline" (click)="toggleSettings()"></nga-action>
      <nga-action>
        <nga-user [menu]="userMenu" [name]="user?.name" [picture]="user?.picture"></nga-user>
      </nga-action>
      <nga-action disabled icon="ion-ios-bell-outline"></nga-action>
      <nga-action icon="ion-ios-email-outline"></nga-action>
      <nga-action>
        <nga-search type="rotate-layout"></nga-search>
      </nga-action>
    </nga-actions>
  `,
})
export class HeaderComponent implements OnInit {


  @Input() position: string = 'normal';

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
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
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
