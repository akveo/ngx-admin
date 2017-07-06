import { Component } from '@angular/core';

@Component({
  selector: 'ngx-status-cards',
  styleUrls: ['./status-cards.component.scss'],
  template: `
    <div class="row">
      <div class="col-lg-3" *ngFor="let card of statusCards">
        <nga-card (click)="card.on = !card.on" [ngClass]="{'off': !card.on}">
          <div class="icon-container {{card.type}}">
            <i class="{{card.icon}}"></i>
          </div>

          <div class="details">
            <div class="title">{{card.title}}</div>
            <div class="status">{{card.on ? 'ON' : 'OFF'}}</div>
          </div>
        </nga-card>
      </div>
    </div>
  `,
})
export class StatusCardsComponent {
  statusCards = [
    { title: 'Light', on: true, type: 'primary', icon: 'ion-ios-game-controller-b-outline' },
    { title: 'RollerShades', on: true, type: 'success', icon: 'ion-ios-game-controller-b-outline' },
    { title: 'Wireless Audio', on: true, type: 'info', icon: 'ion-ios-game-controller-b-outline' },
    { title: 'Coffee Maker', on: true, type: 'warning', icon: 'ion-ios-game-controller-b-outline' },
  ];
}
