import { Component, Input, OnDestroy } from '@angular/core';
import { List } from 'immutable';
import { NgaMenuItem } from '@akveo/nga-theme';
import { Subscription } from 'rxjs/Subscription';

import { StateService } from '../../../@core/data/state.service';

// TODO: move layouts into the framework
@Component({
  selector: 'ngx-sample-layout',
  styleUrls: ['./sample.layout.scss'],
  template: `
    <nga-layout [center]="layout.id === 'center-column'">
      <nga-layout-header fixed>
        <ngx-header [position]="sidebar.id === 'left' ? 'normal': 'inverse'"></ngx-header>
      </nga-layout-header>

      <nga-sidebar class="menu-sidebar"
                   tag="menu-sidebar"
                   responsive
                   [right]="sidebar.id === 'right'">
        <nga-sidebar-header>
          <button class="btn btn-hero-success main-btn">
            <i class="ion ion-social-github"></i> <span>Support Us</span>
          </button>
        </nga-sidebar-header>
        <ng-content select="nga-menu"></ng-content>
      </nga-sidebar>

      <nga-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nga-layout-column>

      <nga-layout-column left class="small" *ngIf="layout.id === 'two-column' || layout.id === 'three-column'">
        <nga-menu [items]="subMenu"></nga-menu>
      </nga-layout-column>

      <nga-layout-column right class="small" *ngIf="layout.id === 'three-column'">
        <nga-menu [items]="subMenu"></nga-menu>
      </nga-layout-column>

      <nga-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nga-layout-footer>

      <nga-sidebar class="settings-sidebar"
                   tag="settings-sidebar"
                   state="collapsed"
                   fixed
                   [right]="sidebar.id !== 'right'">
        <ngx-theme-settings></ngx-theme-settings>
      </nga-sidebar>
    </nga-layout>
  `,
})
export class SampleLayoutComponent  implements OnDestroy {

  subMenu: List<NgaMenuItem> = List(
    [
      {
        title: 'PAGE LEVEL MENU',
        group: true,
      },
      {
        title: 'Buttons',
        icon: 'ion ion-android-radio-button-off',
        link: '/pages/ui-features/buttons',
      },
      {
        title: 'Grid',
        icon: 'ion ion-android-radio-button-off',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Icons',
        icon: 'ion ion-android-radio-button-off',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Modals',
        icon: 'ion ion-android-radio-button-off',
        link: '/pages/ui-features/modals',
      },
      {
        title: 'Typography',
        icon: 'ion ion-android-radio-button-off',
        link: '/pages/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        icon: 'ion ion-android-radio-button-off',
        link: '/pages/ui-features/search-fields',
      },
      {
        title: 'Tabs',
        icon: 'ion ion-android-radio-button-off',
        link: '/pages/ui-features/tabs',
      },
    ],
  );
  layout: any = {};
  sidebar: any = {};

  protected layoutState$: Subscription;
  protected sidebarState$: Subscription;

  constructor(protected stateService: StateService) {
    this.layoutState$ = this.stateService.onLayoutState()
      .subscribe((layout: string) => this.layout = layout);

    this.sidebarState$ = this.stateService.onSidebarState()
      .subscribe((sidebar: string) => {
        this.sidebar = sidebar
      });
  }

  ngOnDestroy() {
    this.layoutState$.unsubscribe();
    this.sidebarState$.unsubscribe();
  }
}
