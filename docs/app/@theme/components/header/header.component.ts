/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { OnInit, Component, HostBinding, Input, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NbSidebarService } from '@nebular/theme';

import { NgxVersionService } from '../../services/version.service';
import { HeaderMenuService } from '../../../@core/data/service/header-menu.service';

@Component({
  selector: 'ngx-landing-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class NgxLandingHeaderComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();

  @HostBinding('class.docs-page') @Input() isDocs = false;

  @Input() sidebarTag: string = '';

  currentVersion: string;
  headerMenu = [];

  constructor(private sidebarService: NbSidebarService,
              private versionService: NgxVersionService,
              private headerMenuService: HeaderMenuService) {
  }

  ngOnInit() {
    this.currentVersion = this.versionService.getNgxVersion();

    this.headerMenuService.getHeaderMenu()
      .pipe(takeUntil(this.destroy$))
      .subscribe((headerMenu) => this.headerMenu = headerMenu);
  }

  toggleSidebar() {
    this.sidebarService.toggle(false, this.sidebarTag);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
