import {Component} from '@angular/core';
import {Device} from "../models/Device";

@Component({
  selector: 'new-device',
  template: require('./newDevice.html')
})
export class NewDeviceComponent {

  private _device:Device;

  constructor() {
    this._device = new Device("Temperature", 2016, 1000, "Karpos");
  }
}
