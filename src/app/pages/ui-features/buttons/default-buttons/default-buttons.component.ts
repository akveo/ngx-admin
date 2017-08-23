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
        class: 'btn-primary',
        container: 'primary-container',
        containerTitle: 'Primary Button',
        title: 'Primary',
        default: '#7659ff',
      }, {
        class: 'btn-warning',
        container: 'warning-container',
        containerTitle: 'Warning Button',
        title: 'Warning',
        default: '#ffcb17',
      }, {
        class: 'btn-success',
        container: 'success-container',
        containerTitle: 'Success Button',
        title: 'Success',
        default: '#00d977',
      }, {
        class: 'btn-info',
        container: 'info-container',
        containerTitle: 'Info Button',
        title: 'Info',
        default: '#0088ff',
      }, {
        class: 'btn-danger',
        container: 'danger-container',
        containerTitle: 'Danger Button',
        title: 'Danger',
        default: '#ff386a',
      }, {
        class: 'btn-secondary',
        container: 'secondary-container',
        containerTitle: 'Default Button',
        title: 'Default',
        default: '#bdbaff',
      },
    ],

    'outline': [
      {
        class: 'btn-outline-primary',
        container: 'primary-container outline',
        containerTitle: 'Primary Button',
        title: 'Primary',
        default: '#7659ff',
      }, {
        class: 'btn-outline-warning',
        container: 'warning-container outline',
        containerTitle: 'Warning Button',
        title: 'Warning',
        default: '#ffcb17',
      }, {
        class: 'btn-outline-success',
        container: 'success-container outline',
        containerTitle: 'Success Button',
        title: 'Success',
        default: '#00d977',
      }, {
        class: 'btn-outline-info',
        container: 'info-container',
        containerTitle: 'Info Button',
        title: 'Info',
        default: '#0088ff',
      }, {
        class: 'btn-outline-danger',
        container: 'danger-container outline',
        containerTitle: 'Danger Button',
        title: 'Danger',
        default: '#ff386a',
      }, {
        class: 'btn-outline-secondary',
        container: 'secondary-container outline',
        containerTitle: 'Default Button',
        title: 'Default',
        default: '#bdbaff',
      },
    ],
  };
}
