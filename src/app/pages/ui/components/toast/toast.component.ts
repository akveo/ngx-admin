import { Component } from '@angular/core';
import { ToasterService } from 'angular2-toaster';

@Component({
    selector: 'toast',
    styleUrls: ['./toast.scss'],
    templateUrl: './toast.html',
})
export class ToastComponent {

    constructor(private toasterService: ToasterService) {}

    popToast() {
        this.toasterService.pop('success', 'Args Title', 'Args Body');
    }
}
