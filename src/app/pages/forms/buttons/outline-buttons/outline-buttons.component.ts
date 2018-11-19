import { Component } from '@angular/core';

@Component({
  selector: 'ngx-outline-buttons',
  styleUrls: ['./outline-buttons.component.scss'],
  templateUrl: './outline-buttons.component.html',
})
export class OutlineButtonsComponent {

  buttons = [
    {
      status: 'primary',
      container: 'primary-container outline',
      containerTitle: 'Primary Button',
      title: 'Primary',
      default: '#7659ff',
    },
    {
      status: 'warning',
      container: 'warning-container outline',
      containerTitle: 'Warning Button',
      title: 'Warning',
      default: '#ffcb17',
    },
    {
      status: 'success',
      container: 'success-container outline',
      containerTitle: 'Success Button',
      title: 'Success',
      default: '#00d977',
    },
    {
      status: 'info',
      container: 'info-container',
      containerTitle: 'Info Button',
      title: 'Info',
      default: '#0088ff',
    },
    {
      status: 'danger',
      container: 'danger-container outline',
      containerTitle: 'Danger Button',
      title: 'Danger',
      default: '#ff386a',
    },
  ];
}
