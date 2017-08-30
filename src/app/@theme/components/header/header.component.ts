import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { NbThemeService } from '@nebular/theme';
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
        <button class="btn btn-hero-info" (click)="selectDefaultTheme()">Default</button>
      </div>
    </div>

    <nb-actions
      size="medium"
      class="header-container"
      [class.right]="position === 'normal'"
      [class.left]="position === 'inverse'">
      <nb-action icon="nb-grid-b" class="toggle-layout" (click)="toggleSettings()"></nb-action>
      <nb-action>
        <nb-user [menu]="userMenu" [name]="user?.name" [picture]="user?.picture"></nb-user>
      </nb-action>
      <nb-action disabled icon="ion-ios-bell-outline"></nb-action>
      <nb-action icon="ion-ios-email-outline"></nb-action>
      <nb-action>
        <nb-search type="rotate-layout"></nb-search>
      </nb-action>
    </nb-actions>
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

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
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

  selectDefaultTheme() {
    this.themeService.changeTheme('default');
  }
}
