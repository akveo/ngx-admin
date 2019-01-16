import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { takeWhile } from 'rxjs/operators/takeWhile';
import { AnalyticsService } from '../../../@core/utils';
import { LayoutService } from '../../../@core/utils';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit , OnDestroy {

  @Input() position = 'normal';

  user: any;

  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  private alive = true;

  currentTheme: string;

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private analytics: AnalyticsService,
              private layoutService: LayoutService,
              private themeService: NbThemeService) {

    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
      });
  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe((users: any) => this.user = users.nick);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analytics.trackEvent('startSearch');
  }

  trackEmailClick() {
    this.analytics.trackEvent('clickContactEmail', 'click');
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
