import { AfterViewInit, Component, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NbLayoutComponent } from '@nebular/theme';

import { WindowModeBlockScrollService } from '../../services/window-mode-block-scroll.service';

@Component({
  selector: 'ngx-one-column-layout',
  styleUrls: ['./one-column.layout.scss'],
  template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
})
export class OneColumnLayoutComponent implements AfterViewInit {

  @ViewChild(NbLayoutComponent, { static: false }) layout: NbLayoutComponent;

  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private windowModeBlockScrollService: WindowModeBlockScrollService,
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.windowModeBlockScrollService.register(this.layout);
    }
  }
}
