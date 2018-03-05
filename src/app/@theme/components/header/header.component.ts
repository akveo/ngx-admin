import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { AutenticationService } from '../../../@core/utils/autentication.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';

  user: any;
  userMenu: any;
  title: any;
  username = '';

  constructor(private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private userService: UserService,
    private analyticsService: AnalyticsService,
    private autenticacion: AutenticationService,
    public translate: TranslateService) {
    this.translate = translate;
  }
  useLanguage(language: string) {
    this.translate.use(language);
  }
  ngOnInit() {
    this.userService.getUsers()
      .subscribe((users: any) => this.user = users.nick);
    this.autenticacion.init();
  }
  liveToken() {
    if (this.autenticacion.live()) {
      this.username = (this.autenticacion.getPayload()).sub;
    }
    return this.autenticacion.live();
  }

  login() {
    location.href = this.autenticacion.getAuthorizationUrl();
  }

  logout() {
    location.href = this.autenticacion.getLogoutUrl();
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
