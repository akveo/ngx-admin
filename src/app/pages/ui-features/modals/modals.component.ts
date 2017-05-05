import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { NgxModalComponent } from './modal/modal.component';

@Component({
  selector: 'ngx-modals',
  styleUrls: ['./modals.component.scss'],
  templateUrl: './modals.component.html',
})
export class NgxModalsComponent {

  constructor(private modalService: NgbModal) { }

  showLargeModal() {
    const activeModal = this.modalService.open(NgxModalComponent, { size: 'lg' });

    activeModal.componentInstance.modalHeader = 'Large Modal';
  }
  showSmallModal() {
    const activeModal = this.modalService.open(NgxModalComponent, { size: 'sm' });

    activeModal.componentInstance.modalHeader = 'Small Modal';
  }

  showStaticModal() {
    const activeModal = this.modalService.open(NgxModalComponent, {
      size: 'sm',
      backdrop: 'static',
    });

    activeModal.componentInstance.modalHeader = 'Static modal';
    activeModal.componentInstance.modalContent = `This is static modal, backdrop click
                                                    will not close it. Click × or confirmation button to close modal.`;
  }

}
