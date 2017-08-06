import { Component, HostBinding } from '@angular/core';
import { NbMediaBreakpoint } from '@nebular/theme';

@Component({
  selector: 'ngx-rooms',
  styleUrls: ['./rooms.component.scss'],
  template: `
    <nb-card size="large">
      <i (click)="collapse()" class="ion-ios-arrow-down collapse" [hidden]="isCollapsed()"></i>
      <ngx-room-selector (select)="select($event)"></ngx-room-selector>
      <ngx-player [collapsed]="isCollapsed()"></ngx-player>
    </nb-card>
  `,
})
export class RoomsComponent {

  @HostBinding('class.expanded')
  private expanded: boolean;
  private selected: number;

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
