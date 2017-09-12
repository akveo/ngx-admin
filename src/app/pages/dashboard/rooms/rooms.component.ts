import { Component, HostBinding } from '@angular/core';
import { NbThemeService, NbMediaBreakpoint, NbMediaBreakpointsService } from '@nebular/theme';

@Component({
  selector: 'ngx-rooms',
  styleUrls: ['./rooms.component.scss'],
  template: `
    <nb-card size="large">
      <i (click)="collapse()" class="ion-ios-arrow-down collapse" [hidden]="isCollapsed()"></i>
      <ngx-room-selector (select)="select($event)"></ngx-room-selector>
      <ngx-player [collapsed]="isCollapsed() && breakpoint.width <= breakpoints.md"></ngx-player>
    </nb-card>
  `,
})
export class RoomsComponent {

  @HostBinding('class.expanded')
  private expanded: boolean;
  private selected: number;

  breakpoint: NbMediaBreakpoint;
  breakpoints: any;

  constructor(private themeService: NbThemeService,
              private breakpointService: NbMediaBreakpointsService) {

    this.breakpoints = breakpointService.getBreakpointsMap();
    themeService.onMediaQueryChange()
      .subscribe(([oldValue, newValue]) => {
        this.breakpoint = newValue;
      });
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
    return !this.expanded;
  }

  private isSelected(roomNumber): boolean {
    return this.selected === roomNumber;
  }
}
