import { Component } from '@angular/core';

@Component({
  selector: 'ngx-default-buttons',
  templateUrl: './default-buttons.component.html',
})
export class DefaultButtonsComponent {

  buttons = [{
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
  }];
}
