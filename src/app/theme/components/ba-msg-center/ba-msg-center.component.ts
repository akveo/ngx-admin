import { Component } from '@angular/core';

import { BaMsgCenterService } from './ba-msg-center.service';

@Component({
  selector: 'ba-msg-center',
  providers: [BaMsgCenterService],
  styleUrls: ['./ba-msg-center.component.scss'],
  templateUrl: './ba-msg-center.component.html'
})
export class BaMsgCenter {

  public notifications: Array<any>;
  public messages: Array<any>;

  constructor(private _baMsgCenterService: BaMsgCenterService) {
    this.notifications = this._baMsgCenterService.getNotifications();
    this.messages = this._baMsgCenterService.getMessages();
  }

}
