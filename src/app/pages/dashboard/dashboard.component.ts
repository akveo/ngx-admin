import { Component } from '@angular/core';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  statusCards = [
    { title: 'Light', on: true, type: 'primary', icon: 'ion-ios-game-controller-b-outline' },
    { title: 'RollerShades', on: false, type: 'success', icon: 'ion-ios-game-controller-b-outline' },
    { title: 'Wireless Audio', on: true, type: 'info', icon: 'ion-ios-game-controller-b-outline' },
    { title: 'Coffee Maker', on: false, type: 'warning', icon: 'ion-ios-game-controller-b-outline' },
  ];
}
