import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';

@Component({
  selector: 'modals',
  styles: [require('./modals.scss')],
  template: require('./modals.html')
})
export class Modals {
  @ViewChild('childModal') childModal: ModalDirective;

  showChildModal(): void {
    this.childModal.show();
  }

  hideChildModal(): void {
    this.childModal.hide();
  }
}
