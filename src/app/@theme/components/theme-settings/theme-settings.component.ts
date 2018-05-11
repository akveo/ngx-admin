import { Component } from '@angular/core';

import { StateService } from '../../../@core/data/state.service';

@Component({
  selector: 'ngx-theme-settings',
  styleUrls: ['./theme-settings.component.scss'],
  template: `
    <h6>LAYOUTS</h6>
    <div class="settings-row">
      <a *ngFor="let layout of layouts"
         href="#"
         [class.selected]="layout.selected"
         [attr.title]="layout.name"
         (click)="layoutSelect(layout)">
        <i [attr.class]="layout.icon"></i>
      </a>
    </div>
    <h6>SIDEBAR</h6>
    <div class="settings-row">
      <a *ngFor="let sidebar of sidebars"
         href="#"
         [class.selected]="sidebar.selected"
         [attr.title]="sidebar.name"
         (click)="sidebarSelect(sidebar)">
        <i [attr.class]="sidebar.icon"></i>
      </a>
    </div>
    <h6 class="settings">SETTINGS</h6>
    <div class="switcher">
      <ngx-theme-switcher [vertical]="true"></ngx-theme-switcher>
    </div>
    <div class="switcher">
      <ngx-layout-direction-switcher [vertical]="true"></ngx-layout-direction-switcher>
    </div>
  `,
})
export class ThemeSettingsComponent {

  layouts = [];
  sidebars = [];

  constructor(protected stateService: StateService) {
    this.stateService.getLayoutStates()
      .subscribe((layouts: any[]) => this.layouts = layouts);

    this.stateService.getSidebarStates()
      .subscribe((sidebars: any[]) => this.sidebars = sidebars);
  }

  layoutSelect(layout: any): boolean {
    this.layouts = this.layouts.map((l: any) => {
      l.selected = false;
      return l;
    });

    layout.selected = true;
    this.stateService.setLayoutState(layout);
    return false;
  }

  sidebarSelect(sidebars: any): boolean {
    this.sidebars = this.sidebars.map((s: any) => {
      s.selected = false;
      return s;
    });

    sidebars.selected = true;
    this.stateService.setSidebarState(sidebars);
    return false;
  }
}
