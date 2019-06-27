import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserData } from '../../../@core/data/users';
import { AnalyticsService } from '../../../@core/utils';
import { LayoutService } from '../../../@core/utils';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Input() position = 'normal';

  user: any;
  private subscriptions: Subscription[] = [];
  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  constructor(private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private userService: UserData,
    private analyticsService: AnalyticsService,
    private layoutService: LayoutService,
    private router: Router) {
  }

  ngOnInit() {
    const userSubscription: Subscription = this.userService.getUsers()
      .subscribe((users: any) => this.user = users.nick);

    const menuSubscription: Subscription = this.menuService.onItemClick()
      .subscribe(({ item }) => {
        if (item.title === 'Profile') {
          this.router.navigateByUrl('/pages/profile');
        }
      });

    this.subscriptions.push(userSubscription, menuSubscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
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
    this.analyticsService.trackEvent('startSearch');
  }
}
