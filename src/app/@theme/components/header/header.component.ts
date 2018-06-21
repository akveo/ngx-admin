import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { takeWhile } from 'rxjs/operators/takeWhile';
import { fromEvent as observableFromEvent } from 'rxjs/observable/fromEvent';
import { AbService } from '../../../@core/utils/ab.service';
import { LayoutService } from '../../../@core/data/layout.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit , OnDestroy {

  @Input() position = 'normal';

  user: any;
  hireTextVariant: string = 'solution-hire';
  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  private alive = true;

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private analytics: AnalyticsService,
              private abService: AbService,
              private layoutService: LayoutService) {

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

    this.listenForVariants();
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

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
    this.analytics.trackEvent('startSearch');
  }

  trackEmailClick() {
    this.analytics.trackEvent('contactEmail', 'click');
  }

  ngOnDestroy() {
    this.alive = false;
  }

  listenForVariants() {
    const variants = [
      AbService.VARIANT_DEVELOPERS_HIRE,
      AbService.VARIANT_HIGHLIGHT_HIRE,
      AbService.VARIANT_SOLUTION_HIRE,
    ];

    this.abService.onAbEvent()
      .subscribe((e: { name: string }) => {
        if (variants.includes(e.name)) {
          this.hireTextVariant = e.name;
        }
      });
  }
}
