import { Component } from '@angular/core';
import { ToasterService, ToasterConfig, Toast } from 'angular2-toaster';

// import 'style-loader!angular2-notifications/notifications.css';

@Component({
  selector: 'ngx-notifications',
  styleUrls: ['./notifications.component.scss'],
  templateUrl: './notifications.component.html',
})
export class NotificationsComponent {
  constructor(private toasterService: ToasterService) {}

  title: string = 'HI there!';
  content: string = `I'm cool toaster!`;
  type: string = 'default';
  isCloseButton: boolean = true;
  config: ToasterConfig;

  isHideOnClick: boolean = true;
  isNewestOnTop: boolean = true;
  toastsLimit: number = 5;
  position: string = 'toast-bottom-right';
  timeout: number = 5000;
  isDuplicatesPrevented: boolean = false;
  animationType: string = 'fade';
  types: string[] = ['default', 'info', 'wait', 'success', 'warning', 'error'];
  animations: string[] = ['fade', 'flyLeft', 'flyRight', 'slideDown', 'slideUp'];
  positions: string[] = ['toast-top-full-width', 'toast-bottom-full-width', 'toast-top-left', 'toast-top-center',
    'toast-top-right', 'toast-bottom-right', 'toast-bottom-center', 'toast-bottom-left', 'toast-center'];

  makeToast() {
    this.config = new ToasterConfig({
      positionClass: this.position,
      timeout: this.timeout,
      newestOnTop: this.isNewestOnTop,
      preventDuplicates: this.isDuplicatesPrevented,
      animation: this.animationType,
      limit: this.toastsLimit,
    });
    const toast: Toast = {
      type: this.type,
      title: this.title,
      body: this.content,
      timeout: this.timeout,
      showCloseButton: this.isCloseButton,
    };
    this.toasterService.popAsync(toast);
  }

  clearToasts() {
    this.toasterService.clear();
  }
}
