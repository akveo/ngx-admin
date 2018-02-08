import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { AutenticationService } from '../../../@core/utils/autentication.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {




  @Input() position = 'normal';

  user: any;
  userMenu: any;

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private analyticsService: AnalyticsService,
              private autenticacion: AutenticationService) {
  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe((users: any) => this.user = users.nick);
      this.autenticacion.init();
      const urlLogin = this.autenticacion.getAuthorizationUrl();
      const urlLogout = this.autenticacion.logOut;
      if (!this.autenticacion.live()) {
        this.userMenu = [{ title: 'Login', url: urlLogin}] ;
      }else {
        this.userMenu = [{ title: this.autenticacion.payload.sub}, { title: 'Log out', url: urlLogout}] ;
      }
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

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
}
