import {Component, Input} from '@angular/core';

@Component({
  selector: 'notifications',
  template: `
    <div class="alert alert-danger fade in">
      <strong>{{ message }}</strong>
    </div>
  `
})
export class NotificationComponent {

  @Input() message: string = '';

}
