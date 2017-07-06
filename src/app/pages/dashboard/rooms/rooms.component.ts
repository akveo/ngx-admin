import { Component } from '@angular/core';

@Component({
  selector: 'ngx-rooms',
  styleUrls: ['./rooms.component.scss'],
  template: `
    <nga-card size="xmedium">
      <nga-card-header>
        Room Management
      </nga-card-header>
      <nga-card-body>
        <ngx-room-selector></ngx-room-selector>
      </nga-card-body>
    </nga-card>
  `,
})
export class RoomsComponent {
}
