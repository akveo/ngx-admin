import { Component, HostBinding, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { NbThemeService, NbMediaBreakpoint, NbMediaBreakpointsService } from '@nebular/theme';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'ngx-rooms',
  styleUrls: ['./rooms.component.scss'],
  template: `
    <nb-card [size]="getCardSize()">
      <i (click)="collapse()" class="nb-arrow-down collapse" [hidden]="isCollapsed()"></i>
      <ngx-room-selector (select)="select($event)"></ngx-room-selector>
      <ngx-player [collapsed]="isCollapsed() && breakpoint?.width <= breakpoints.md"></ngx-player>
    </nb-card>
  `,
})
export class RoomsComponent implements OnDestroy {

  @HostBinding('class.expanded')
  private expanded: boolean;
  private selected: number;

  breakpoint: NbMediaBreakpoint;
  breakpoints: any;
  themeSubscription: any;
  isPlatformBrowser: boolean;

  constructor(private themeService: NbThemeService,
              private breakpointService: NbMediaBreakpointsService,
              @Inject(PLATFORM_ID) platformId: Object) {

    this.breakpoints = this.breakpointService.getBreakpointsMap();
    this.themeSubscription = this.themeService.onMediaQueryChange()
      .subscribe(([oldValue, newValue]) => {
        this.breakpoint = newValue;
      });
    this.isPlatformBrowser = isPlatformBrowser(platformId);
  }

  select(roomNumber) {
    if (this.isSelected(roomNumber)) {
      this.expand();
    } else {
      this.collapse();
    }

    this.selected = roomNumber;
  }

  expand() {
    this.expanded = true;
  }

  collapse() {
    this.expanded = false;
  }

  isCollapsed() {
    return this.isPlatformBrowser && !this.expanded;
  }

  private isSelected(roomNumber): boolean {
    return this.selected === roomNumber;
  }

  getCardSize() {
    const isPlatformServer = !this.isPlatformBrowser;
    return isPlatformServer || this.breakpoint.width >= this.breakpoints.sm
      ? 'large'
      : 'medium';
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
