import { Component, ViewChild  , Input , Output} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';

@Component({
  selector: 'action-modal',
  styleUrls: ['./modals.scss'],
  templateUrl: './actionModal.html'
})
export class ActionModal {

  @Input()
  renderUI : boolean;

  @ViewChild('actionModel') childModal: ModalDirective;
  showActionModal(): void {
    this.childModal.show();
  }


  @Input()
  actionButtonSettings: actionButtonSetting [] ;


}

interface actionButtonSetting {name : string , link:string , icon : string} ;
