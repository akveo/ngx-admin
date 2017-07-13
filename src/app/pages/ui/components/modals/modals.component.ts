import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DefaultModal } from './default-modal/default-modal.component';

@Component({
  selector: 'modals',
  styleUrls: ['./modals.scss'],
  templateUrl: './modals.html'
})
export class Modals {

  constructor(private modalService: NgbModal) {}

  lgModalShow() {
    const activeModal = this.modalService.open(DefaultModal, {size: 'lg'});
    activeModal.componentInstance.modalHeader = 'Large Modal';
  }
  smModalShow(): void {
    const activeModal = this.modalService.open(DefaultModal, {size: 'sm'});
    activeModal.componentInstance.modalHeader = 'Small Modal';
  }

  staticModalShow() {
    const activeModal = this.modalService.open(DefaultModal, {size: 'sm',
                                                              backdrop: 'static'});
    activeModal.componentInstance.modalHeader = 'Static modal';
    activeModal.componentInstance.modalContent = `This is static modal, backdrop click
                                                    will not close it. Click × or confirmation button to close modal.`;
  }

  childModalShow() {
    const activeModal = this.modalService.open(DefaultModal, {size: 'sm'});
    activeModal.componentInstance.modalHeader = 'Child modal';
    activeModal.componentInstance.modalContent = `I am a child modal, opened from parent component!`;
  }
}
