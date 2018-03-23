import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { takeWhile } from 'rxjs/operators/takeWhile';
import { fromEvent as observableFromEvent } from 'rxjs/observable/fromEvent';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Input() position = 'normal';

  user: any;
  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  private alive = true;

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private analytics: AnalyticsService,
              private analyticsService: AnalyticsService) {

    observableFromEvent(document, 'mouseup')
      .pipe(takeWhile(() => this.alive))
      .subscribe(() => {
        let selection: any;
        if (window.getSelection) {
          selection = window.getSelection();
        } else if ((<any> document).selection) {
          selection = (<any> document).selection.createRange();
        }

        if (selection && selection.toString() === 'contact@akveo.com') {
          this.analytics.trackEvent('contactEmail', 'select');
        }
      });
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

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }

  trackEmailClick() {
    this.analytics.trackEvent('contactEmail', 'click');
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
