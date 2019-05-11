import { Component } from '@angular/core';

@Component({
  selector: 'ngx-default-buttons',
  styleUrls: ['./default-buttons.component.scss'],
  templateUrl: './default-buttons.component.html',
})
export class DefaultButtonsComponent {

  buttons = [
    {
      status: 'primary',
      container: 'primary-container',
      containerTitle: 'Primary Button',
      title: 'Primary',
      default: '#7659ff',
    },
    {
      status: 'warning',
      container: 'warning-container',
      containerTitle: 'Warning Button',
      title: 'Warning',
      default: '#ffcb17',
    },
    {
      status: 'success',
      container: 'success-container',
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
      container: 'danger-container',
      containerTitle: 'Danger Button',
      title: 'Danger',
      default: '#ff386a',
    },
  ];
}
