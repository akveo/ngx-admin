import { Component } from '@angular/core';

@Component({
  selector: 'ngx-rooms',
  styleUrls: ['./rooms.component.scss'],
  template: `
    <nga-card size="large">
      <ngx-room-selector></ngx-room-selector>
      <ngx-player></ngx-player>
    </nga-card>
  `,
})
export class RoomsComponent {
}
