/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component, HostBinding, Input, OnDestroy } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { NbSidebarService } from '@nebular/theme';

/*import { NgxAnalytics } from '../../services/analytics.service';*/
import { NgxVersionService } from '../../services/version.service';
import { HeaderMenuService } from '../../../@core/data/service/header-menu.service';

@Component({
  selector: 'ngx-landing-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class NgxLandingHeaderComponent implements OnDestroy {

  private alive = true;

  @HostBinding('class.docs-page') @Input() isDocs = false;

  @Input() sidebarTag: string = '';

  currentVersion: string;
  headerMenu = [];

  constructor(/*private analytics: NgxAnalytics,*/
              private sidebarService: NbSidebarService,
              private versionService: NgxVersionService,
              private headerMenuService: HeaderMenuService) {
    this.currentVersion = this.versionService.getNgxVersion();

    this.headerMenuService.getHeaderMenu()
      .pipe(takeWhile(() => this.alive ))
      .subscribe((headerMenu) => this.headerMenu = headerMenu);
  }

  trackEmailClick() {
  }

  toggleSidebar() {
    this.sidebarService.toggle(false, this.sidebarTag);
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
