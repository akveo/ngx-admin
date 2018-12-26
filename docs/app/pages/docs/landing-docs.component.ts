/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { takeWhile, withLatestFrom, map } from 'rxjs/operators';
import {
  NbThemeService,
  NbMenuItem,
  NbSidebarService,
  NbMediaBreakpoint,
} from '@nebular/theme';

import { NgxMenuService } from '../../@theme/services/menu.service';
import { NgxPaginationService } from '../../@theme/services/pagination.service';

@Component({
  selector: 'ngx-landing-docs',
  templateUrl: './landing-docs.component.html',
  styleUrls: ['./landing-docs.component.scss'],
})
export class LandingDocsComponent implements OnDestroy {
  menuItems: NbMenuItem[] = [];
  collapsedBreakpoints = ['xs', 'is', 'sm', 'md', 'lg'];
  sidebarTag = 'menuSidebar';

  private alive = true;

  constructor(
    private service: NgxMenuService,
    private router: Router,
    private themeService: NbThemeService,
    private sidebarService: NbSidebarService,
    private paginationService: NgxPaginationService) {

    this.themeService.changeTheme('docs-page');
    this.paginationService.setPaginationItems('/docs');
    this.menuItems = this.service.getPreparedMenu('/docs');

    // TODO: can we do any better?
    this.router.events
      .pipe(
        withLatestFrom(this.themeService.onMediaQueryChange().pipe(map((changes: any[]) => changes[1]))),
        takeWhile(() => this.alive),
      )
      .subscribe(([event, mediaQuery]: [any, NbMediaBreakpoint]) => {
        if (event.url === '/docs') {
          const firstMenuItem = this.menuItems[0].children[0];
          // angular bug with replaceUrl, temp fix with setTimeout
          setTimeout(() => this.router.navigateByUrl(firstMenuItem.link, { replaceUrl: true }));
        }

        if (this.collapsedBreakpoints.includes(mediaQuery.name)) {
          this.sidebarService.collapse(this.sidebarTag);
        }
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
