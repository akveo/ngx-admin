import { Component } from '@angular/core';

@Component({
  selector: 'ngx-rooms',
  styleUrls: ['./rooms.component.scss'],
  template: `
    <nb-card size="large">
      <ngx-room-selector></ngx-room-selector>
      <ngx-player></ngx-player>
    </nb-card>
  `,
})
export class RoomsComponent {
}
