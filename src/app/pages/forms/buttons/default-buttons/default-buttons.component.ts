import { Component } from '@angular/core';

@Component({
  selector: 'ngx-default-buttons',
  styleUrls: ['./default-buttons.component.scss'],
  templateUrl: './default-buttons.component.html',
})
export class DefaultButtonsComponent {

  buttonsViews = [{
    title: 'Default Buttons',
    key: 'default',
  }, {
    title: 'Outline Buttons',
    key: 'outline',
  }];

  selectedView = this.buttonsViews[0];

  buttons = {
    'default': [
      {
        status: 'primary',
        container: 'primary-container',
        containerTitle: 'Primary Button',
        title: 'Primary',
        default: '#7659ff',
      }, {
        status: 'warning',
        container: 'warning-container',
        containerTitle: 'Warning Button',
        title: 'Warning',
        default: '#ffcb17',
      }, {
        status: 'success',
        container: 'success-container',
        containerTitle: 'Success Button',
        title: 'Success',
        default: '#00d977',
      }, {
        status: 'info',
        container: 'info-container',
        containerTitle: 'Info Button',
        title: 'Info',
        default: '#0088ff',
      }, {
        status: 'danger',
        container: 'danger-container',
        containerTitle: 'Danger Button',
        title: 'Danger',
        default: '#ff386a',
      }, {
        bootstrap: true,
        class: 'btn-secondary',
        container: 'secondary-container',
        containerTitle: 'Default Button',
        title: 'Default',
        default: '#bdbaff',
      },
    ],

    'outline': [
      {
        outline: true,
        status: 'primary',
        container: 'primary-container outline',
        containerTitle: 'Primary Button',
        title: 'Primary',
        default: '#7659ff',
      }, {
        outline: true,
        status: 'warning',
        container: 'warning-container outline',
        containerTitle: 'Warning Button',
        title: 'Warning',
        default: '#ffcb17',
      }, {
        outline: true,
        status: 'success',
        container: 'success-container outline',
        containerTitle: 'Success Button',
        title: 'Success',
        default: '#00d977',
      }, {
        outline: true,
        status: 'info',
        container: 'info-container',
        containerTitle: 'Info Button',
        title: 'Info',
        default: '#0088ff',
      }, {
        outline: true,
        status: 'danger',
        container: 'danger-container outline',
        containerTitle: 'Danger Button',
        title: 'Danger',
        default: '#ff386a',
      }, {
        bootstrap: true,
        outline: true,
        class: 'btn-outline-secondary',
        container: 'secondary-container outline',
        containerTitle: 'Default Button',
        title: 'Default',
        default: '#bdbaff',
      },
    ],
  };
}
